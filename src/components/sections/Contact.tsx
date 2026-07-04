import { personalInfo } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import SectionWrapper from "../shared/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact" subtitle="Get In Touch" title="Let's Work Together">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-muted-foreground mb-8">
          I am currently looking for new opportunities in Data Engineering and Embedded Systems.
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <Link
          href={`mailto:${personalInfo.email}`}
          className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyber-purple to-cyber-blue text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(149,107,255,0.6)] transition-all transform hover:-translate-y-1"
        >
          Say Hello
        </Link>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-xl flex flex-col items-center gap-2">
            <Mail className="text-cyber-cyan" size={24} />
            <span className="text-sm text-muted-foreground">{personalInfo.email}</span>
          </div>
          <div className="glass p-6 rounded-xl flex flex-col items-center gap-2">
            <Phone className="text-cyber-purple" size={24} />
            <span className="text-sm text-muted-foreground">{personalInfo.phone}</span>
          </div>
          <div className="glass p-6 rounded-xl flex flex-col items-center gap-2">
            <MapPin className="text-cyber-blue" size={24} />
            <span className="text-sm text-muted-foreground">{personalInfo.location}</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
