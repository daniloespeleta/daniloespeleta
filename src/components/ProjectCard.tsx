import { ExternalLink, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  image: string;
  link?: string;
  imageContain?: boolean;
}

const ProjectCard = ({ title, category, description, metrics, tags, image, link, imageContain }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card hover:shadow-xl transition-all duration-300 border-border">
      <div className="relative overflow-hidden h-56 flex items-center justify-center bg-muted/20">
        <img
          src={image}
          alt={title}
          className={imageContain 
            ? "max-w-[70%] max-h-40 object-contain group-hover:scale-105 transition-transform duration-500"
            : "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          }
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-primary text-primary-foreground">
            {category}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-4 p-4 bg-muted/30 rounded-lg">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <div>
                <div className="text-sm font-semibold text-foreground">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <a
          href={link || "#"}
          target={link ? "_blank" : undefined}
          rel={link ? "noopener noreferrer" : undefined}
          className="inline-flex items-center text-primary font-medium hover:underline"
        >
          View Project
          <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
