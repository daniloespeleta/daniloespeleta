import { ExternalLink, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  image: string;
  link?: string;
  imageContain?: boolean;
  hideLink?: boolean;
}

const ProjectCard = ({ title, category, description, metrics, tags, image, link, imageContain, hideLink }: ProjectCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="group bg-card border-3 border-foreground brutal-shadow hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-brutal-lg transition-all duration-200 overflow-hidden">
      <div className="relative overflow-hidden h-56 flex items-center justify-center bg-muted/30 border-b-3 border-foreground">
        <img
          src={image}
          alt={title}
          className={imageContain 
            ? "max-w-[70%] max-h-40 object-contain group-hover:scale-110 transition-transform duration-300"
            : "w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          }
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wide border-2 border-foreground">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors uppercase">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-4 p-4 bg-muted/50 border-2 border-foreground">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <div>
                <div className="text-sm font-bold text-foreground">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="text-xs font-bold uppercase border-2 border-foreground bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        {!hideLink && (
          <a
            href={link || "#"}
            target={link ? "_blank" : undefined}
            rel={link ? "noopener noreferrer" : undefined}
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground font-bold uppercase text-sm border-2 border-foreground brutal-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all"
          >
            {t("projects.viewProject")}
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;