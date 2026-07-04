import { services } from "@/lib/constants";
import { Database, Cpu, Code2 } from "lucide-react";
import GlowCard from "../shared/GlowCard";
import SectionWrapper from "../shared/SectionWrapper";

const iconMap = {
  Database: Database,
  Cpu: Cpu,
  Code2: Code2,
};

export default function Services() {
  return (
    <SectionWrapper id="services" subtitle="What I Do" title="My Expertise">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Code2;
          return (
            <GlowCard key={service.title} delay={index * 0.1}>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-purple/20 to-cyber-cyan/20 flex items-center justify-center mb-4 border border-white/10">
                <IconComponent className="text-cyber-cyan" size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </GlowCard>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
