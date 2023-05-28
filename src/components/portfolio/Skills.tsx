import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRef, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Skill = {
  name: string;
  src?: string;
  node?: ReactNode;
};

// Ordenado por relevância no mercado de trabalho (demanda atual)
const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

const skills: Skill[] = [
  { name: "JavaScript", src: devicon("javascript") },
  { name: "Python", src: devicon("python") },
  {
    name: "Uso e Manipulação de IA",
    node: (
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary-glow/30 border border-primary/40 flex items-center justify-center">
        <Sparkles className="w-7 h-7 text-primary-glow" strokeWidth={2} />
      </div>
    ),
  },
  { name: "React", src: devicon("react") },
  { name: "Java", src: devicon("java") },
  { name: ".NET", src: devicon("dot-net") },
  { name: "HTML", src: devicon("html5") },
  { name: "CSS", src: devicon("css3") },
  { name: "Git", src: devicon("git") },
  { name: "Tailwind", src: devicon("tailwindcss") },
  { name: "C++", src: devicon("cplusplus") },
  { name: "Modelagem 3D", src: devicon("blender") },
];

const softSkills = [
  "Comunicação",
  "Solução de problemas",
  "Trabalho em equipe",
  "Aprendizado contínuo",
  "Organização",
  "Resiliência",
  "Proatividade",
  "Gestão de tempo",
];

export const Skills = () => {
  const autoplay = useRef(
    Autoplay({ delay: 2200, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true },
    [autoplay.current]
  );

  return (
    <section id="skills" className="py-32 relative">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Hard <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="relative group/carousel">
          {/* Fades laterais */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-background to-transparent" />

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-5 py-2">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="pl-5 shrink-0 grow-0 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-gradient-card border border-border/50 backdrop-blur-sm hover:border-primary/40 hover:shadow-glow hover:-translate-y-1 transition-all duration-300 cursor-grab active:cursor-grabbing h-full">
                    <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      {skill.node ?? (
                        <img
                          src={skill.src}
                          alt={`${skill.name} logo`}
                          width={48}
                          height={48}
                          loading="lazy"
                          className="w-12 h-12"
                        />
                      )}
                    </div>
                    <span className="text-sm font-medium text-foreground text-center">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => emblaApi?.scrollPrev()}
              className="rounded-full border-border/50 hover:border-primary/40 hover:shadow-glow hover:bg-transparent"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => emblaApi?.scrollNext()}
              className="rounded-full border-border/50 hover:border-primary/40 hover:shadow-glow hover:bg-transparent"
              aria-label="Próximo"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Soft <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-2 max-w-3xl mx-auto">
          {softSkills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="px-4 py-2 md:px-4 md:py-2 rounded-full bg-gradient-card border border-border/50 backdrop-blur-sm text-foreground text-sm font-medium hover:border-primary/40 hover:shadow-glow transition-all"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};
