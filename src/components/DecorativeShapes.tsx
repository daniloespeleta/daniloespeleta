import { useParallax } from "@/hooks/useParallax";

interface DecorativeShapesProps {
  variant?: "hero" | "about" | "projects" | "services" | "contact";
}

const DecorativeShapes = ({ variant = "hero" }: DecorativeShapesProps) => {
  const { getParallaxStyle } = useParallax();

  if (variant === "hero") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large circle */}
        <div
          className="absolute -top-20 -right-20 w-80 h-80 bg-primary/20 rounded-full animate-float"
          style={getParallaxStyle(0.3)}
        />
        {/* Accent circle */}
        <div
          className="absolute bottom-20 right-1/4 w-24 h-24 bg-accent/30 rounded-full"
          style={getParallaxStyle(0.2)}
        />
        {/* Zigzag stripe */}
        <div
          className="absolute -bottom-10 -left-10 w-40 h-40 opacity-10"
          style={{
            background: `repeating-linear-gradient(
              45deg,
              hsl(var(--primary)),
              hsl(var(--primary)) 10px,
              transparent 10px,
              transparent 20px
            )`,
            ...getParallaxStyle(0.4),
          }}
        />
      </div>
    );
  }

  if (variant === "about") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-10 right-20 w-32 h-32 bg-accent/20 rounded-full"
          style={getParallaxStyle(0.25)}
        />
        <div
          className="absolute bottom-10 left-10 w-20 h-20 bg-secondary/30 border-3 border-foreground brutal-shadow -rotate-6"
          style={getParallaxStyle(0.35)}
        />
      </div>
    );
  }

  if (variant === "projects") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 -left-10 w-48 h-48 bg-primary/10 rounded-full"
          style={getParallaxStyle(0.2)}
        />
        <div
          className="absolute -bottom-20 right-10 w-36 h-36 bg-secondary/20 border-3 border-foreground brutal-shadow rotate-45"
          style={getParallaxStyle(0.3)}
        />
      </div>
    );
  }

  if (variant === "services") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-16 left-1/3 w-40 h-40 bg-accent/15 rounded-full animate-float"
          style={{ animationDelay: "1s", ...getParallaxStyle(0.2) }}
        />
        <div
          className="absolute bottom-10 -right-10 w-28 h-28 bg-primary/20 border-3 border-foreground brutal-shadow rotate-12"
          style={getParallaxStyle(0.4)}
        />
      </div>
    );
  }

  if (variant === "contact") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 right-10 w-24 h-24 bg-secondary/25 rounded-full"
          style={getParallaxStyle(0.3)}
        />
        <div
          className="absolute -bottom-10 left-1/4 w-32 h-32 bg-accent/20 border-3 border-foreground brutal-shadow -rotate-12 animate-wiggle"
          style={{ animationDelay: "0.5s", ...getParallaxStyle(0.25) }}
        />
      </div>
    );
  }

  return null;
};

export default DecorativeShapes;