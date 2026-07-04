import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28 relative", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            {subtitle && (
              <p className="text-cyber-cyan font-mono text-sm md:text-base uppercase tracking-widest mb-3">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
