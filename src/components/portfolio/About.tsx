import { motion } from "framer-motion";
import { GraduationCap, Award, Languages } from "lucide-react";

const formations = [
  {
    icon: GraduationCap,
    title: "Engenharia de Software",
    place: "FIAP — Paulista",
    period: "02/2025 – 11/2029",
    status: "Cursando 4º semestre",
  },
  {
    icon: Award,
    title: "Técnico em Informática",
    place: "UNASP — São Paulo",
    period: "01/2021 – 12/2024",
    status: "Concluído • TCC premiado",
  },
  {
    icon: Languages,
    title: "Inglês C1 — Avançado",
    place: "Wizard & IW",
    period: "Certificação",
    status: "Fluência profissional",
  },
];

const stats = [
  { value: "4º", label: "Semestre de Engenharia" },
  { value: "2º lugar", label: "TCC entre 25+ projetos" },
  { value: "C1", label: "Inglês avançado" },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary-glow tracking-widest uppercase">Sobre</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
            Tecnologia com <br />
            <span className="text-gradient">propósito e impacto</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 items-stretch">
          {formations.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="h-full flex flex-col p-6 rounded-2xl bg-gradient-card border border-border/50 backdrop-blur-sm hover:border-primary/40 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                <f.icon className="w-4 h-4 text-primary-glow" />
              </div>
              <h3 className="font-bold mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.place}</p>
              <p className="text-xs text-muted-foreground/70 mt-2">{f.period}</p>
              <p className="text-xs text-primary-glow mt-1">{f.status}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 md:gap-8 mb-16"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center p-6 rounded-2xl bg-gradient-card border border-border/50 backdrop-blur-sm"
            >
              <div className="text-3xl md:text-5xl font-bold text-gradient mb-2">{s.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto space-y-4 text-left"
        >
          <p>
            Me formei em Tecnologia da Informação integrado ao ensino médio pela UNASP em 2024, onde meu TCC ficou em 2º lugar entre mais de 25 projetos. Em 2025 passei na seletiva do curso de Engenharia de Software na FIAP e hoje estou no quarto semestre.
          </p>
          <p>
            Já adquiri habilidades em Python, SQL, desenvolvimento de web, manipulação de Inteligência artificial, trabalho em equipe e metodologias ágeis. Tenho inglês avançado com certificações pela Wizard e IW.
          </p>
          <p>
            Busco oportunidades na área de tecnologia para desenvolver minhas aptidões.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
