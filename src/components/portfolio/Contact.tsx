import { motion } from "framer-motion";
import type { MouseEvent } from "react";
import { Mail, ArrowUpRight, MapPin } from "lucide-react";
import { GitHubIcon as Github } from "@/components/icons/GitHubIcon";
import { LinkedInIcon as Linkedin } from "@/components/icons/LinkedInIcon";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const openExternalLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const GMAIL_COMPOSE_URL = "https://mail.google.com/mail/?view=cm&fs=1&to=jonasestevesppl@gmail.com";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/JonasEstevess" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jonas-esteves-573a662ba/" },
  { icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/5511974517730" },
  { icon: Mail, label: "Gmail", href: GMAIL_COMPOSE_URL },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-card border border-primary/20 p-10 md:p-16 text-center"
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl" />

          <div className="relative">
            <span className="text-sm font-medium text-primary-glow tracking-widest uppercase">Contato</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              Vamos construir <br />
              <span className="text-gradient">algo incrível</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Aberto para estágios, oportunidades em tecnologia e colaborações em projetos. <span className="text-primary-glow font-medium">Disponibilidade para início imediato.</span> Resposta rápida garantida.
            </p>

            <div className="flex flex-col items-center gap-4 mb-8">
              <a
                href={GMAIL_COMPOSE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-primary text-primary-foreground font-medium text-lg hover:shadow-glow transition-all hover:-translate-y-0.5"
              >
                jonasestevesppl@gmail.com
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/5511974517730"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background/40 border border-border/50 text-foreground font-medium hover:border-primary/40 hover:shadow-glow transition-all hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Salvar contato no WhatsApp
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-12">
              <MapPin className="w-4 h-4" />
              <span>JD IAE, São Paulo — SP</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                    event.preventDefault();
                    openExternalLink(s.href);
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center gap-2 p-4 rounded-2xl bg-background/40 border border-border/50 hover:border-primary/40 hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary-glow">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-medium">{s.label}</div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <footer className="mt-12 text-center text-sm text-muted-foreground">
          © 2026 Jonas Esteves. Construído com cuidado e café.
        </footer>
      </div>
    </section>
  );
};
