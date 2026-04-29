import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import { ArrowDown } from "lucide-react";
import { GitHubIcon as Github } from "@/components/icons/GitHubIcon";
import { LinkedInIcon as Linkedin } from "@/components/icons/LinkedInIcon";
import jonasPhoto from "@/assets/jonas-photo.jpg";

const openExternalLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-glow-pulse" />

      <div className="container relative z-10 flex flex-col items-center text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-5 animate-float"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-primary blur-2xl opacity-50" />
          <img
            src={jonasPhoto}
            alt="Jonas Esteves"
            width={224}
            height={224}
            className="relative w-56 h-56 md:w-60 md:h-60 rounded-full object-cover object-center border-2 border-primary/40 shadow-glow"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-4"
        >
          <span className="block text-base md:text-lg font-normal text-muted-foreground mb-2">Olá, sou</span>
          Jonas <span className="text-gradient">Esteves</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          {[
            { icon: Github, href: "https://github.com/JonasEstevess", label: "GitHub", external: true, iconClass: "text-foreground" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/jonas-esteves-573a662ba/", label: "LinkedIn", external: true, iconClass: "" },
          ].map(({ icon: Icon, href, label, external, iconClass }) => {
            const handleClick = external
              ? (event: MouseEvent<HTMLAnchorElement>) => {
                  event.preventDefault();
                  openExternalLink(href);
                }
              : undefined;

            return (
            <a
              key={label}
              href={href}
              onClick={handleClick}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              aria-label={label}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 text-sm text-muted-foreground hover:text-primary-glow hover:border-primary/50 transition-all"
            >
              <Icon className={`w-4 h-4 ${iconClass}`} />
              <span>{label}</span>
            </a>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            Ver projetos
          </a>
          <a
            href="#about"
            className="px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            Sobre mim
          </a>
          <a
            href="/curriculo-jonas-esteves.pdf"
            download
            className="px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            Baixar CV
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-muted-foreground"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
};
