import { useEffect, useState } from "react";

export const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getParallaxStyle = (speed: number = 0.5, offset: number = 0) => ({
    transform: `translateY(${(scrollY - offset) * speed}px)`,
  });

  return { scrollY, getParallaxStyle };
};