import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code2 as Github, ChevronDown } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "TCC — Cubo Multissensorial",
    period: "jan 2024 – out 2024 • UNASP",
    description:
      "Trabalho de Conclusão de Curso desenvolvido no UNASP. O Cubo Multissensorial é um brinquedo comunicador em formato de cubo, criado para apoiar o desenvolvimento pessoal e auxiliar pessoas com transtornos mentais. O dispositivo utiliza Arduino e integra luzes, sons e interações táteis, proporcionando uma experiência sensorial com fins educativos e terapêuticos.",
    extra:
      "Além do hardware, foi desenvolvido um site de apresentação do projeto — com objetivos, impacto social e documentação técnica — incluindo integração com banco de dados e estruturação completa das páginas web.",
    tags: ["C++", "Arduino", "IoT", "Hardware", "React", "HTML/CSS", "Banco de Dados"],
    badge: "🏆 2º lugar entre 25+ projetos",
    liveUrl: "https://tcc-react-eosin.vercel.app/",
    liveLabel: "Site do projeto",
    repoUrl: "https://github.com/JonasEstevess",
    accent: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Passa a Bola",
    description:
      "Plataforma dedicada ao futebol feminino, com foco em divulgar atletas, times e conteúdos do universo da modalidade. Projeto desenvolvido em equipe com layout responsivo e navegação fluida.",
    tags: ["React", "JavaScript", "HTML/CSS", "Tailwind"],
    badge: "🏆 15º lugar entre 100+ projetos",
    liveUrl: "https://passa-a-bola-one.vercel.app/",
    liveLabel: "Ver site",
    repoUrl: "https://github.com/Augusto-Valerio/Passa-a-Bola",
    accent: "from-pink-500/20 to-rose-500/20",
  },
   {
    title: "CodeDaily — Desafios Diários",
    description:
      "Plataforma interativa para programadores em formação, com cadastro e login de usuários, perguntas diárias gerenciadas por administradores, sistema de pontuação por acertos e ranking competitivo. Promove o aprendizado contínuo através de desafios renovados todos os dias.",
    tags: ["Python", "JSON", "CLI", "Autenticação"],
    repoUrl: "https://github.com/JonasEstevess/Sistema-desafios",
    accent: "from-green-500/20 to-emerald-500/20",
  },
    {
    title: "Screen Match Filmes",
    description: "Aplicação Java focada em prática de fundamentos da linguagem através de um sistema simples de filmes: cadastro de informações, cálculo de média de avaliações, classificação por nota e leitura de dados pelo terminal usando estruturas condicionais e laços de repetição.",
    tags: ["Java", "POO", "IntelliJ IDEA"],
    repoUrl: "https://github.com/JonasEstevess/screen-match-movies",
    accent: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Photo Portfolio",
    description:
      "Portfólio fotográfico desenvolvido em equipe, com galeria responsiva e layout pensado para destacar as imagens com elegância e fluidez.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://marirsil.github.io/Photo_portfolio/",
    liveLabel: "Ver site",
    repoUrl: "https://github.com/Marirsil/Photo_portfolio",
    accent: "from-sky-500/20 to-blue-500/20",
  },
  {
    title: "Clone Airbnb",
    description:
      "Clone da interface do Airbnb desenvolvido como exercício de front-end, replicando layout, componentes e responsividade do site original.",
    tags: ["React", "JavaScript", "HTML/CSS"],
    liveUrl: "https://airbnb-clone-cp4.vercel.app/",
    liveLabel: "Ver site",
    repoUrl: "https://github.com/Augusto-Valerio/Airbnb-Clone",
    accent: "from-rose-500/20 to-red-500/20",
  },
  {
    title: "GameStore — Catálogo de Produtos",
    description:
      "Catálogo de produtos no formato de loja de games, com layout moderno e organização por categorias. Projeto focado em estrutura HTML semântica e estilização avançada com CSS.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://augusto-valerio.github.io/GameStore-Catalogo-de-produtos/",
    liveLabel: "Ver site",
    repoUrl: "https://github.com/Augusto-Valerio/GameStore-Catalogo-de-produtos",
    accent: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Cadastro de Jogadoras — CRUD",
    description:
      "Aplicação CRUD completa para cadastro, edição, listagem e remoção de jogadoras. Projeto focado em manipulação de dados no front-end e lógica de programação.",
    tags: ["JavaScript", "HTML", "CSS", "CRUD"],
    liveUrl: "https://augusto-valerio.github.io/Cadastro-jogadoras-CRUD/",
    liveLabel: "Ver site",
    repoUrl: "https://github.com/Augusto-Valerio/Cadastro-jogadoras-CRUD",
    accent: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Auto Escola",
    description:
      "Sistema voltado à gestão de auto escola, com foco em organização de informações e interface intuitiva para usuários e administradores.",
    tags: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/Augusto-Valerio/projeto-AutoEscola",
    accent: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Carros",
    description:
      "Projeto web de exibição e catálogo de carros, com foco em layout responsivo, organização de cards e prática de componentização.",
    tags: ["React", "JavaScript", "HTML/CSS"],
    liveUrl: "https://carros--jonasesteves31ati.vercel.app/",
    liveLabel: "Ver site",
    repoUrl: "https://github.com/JonasEstevess/carros",
    accent: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Jogo do Número Secreto",
    description:
      "Jogo interativo onde o usuário tenta adivinhar um número secreto sorteado pelo sistema. Projeto focado em lógica de programação e manipulação do DOM.",
    tags: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://jogo-delta-two-26.vercel.app/",
    liveLabel: "Ver site",
    repoUrl: "https://github.com/JonasEstevess/Jogo-do-n-secreto",
    accent: "from-fuchsia-500/20 to-pink-500/20",
  },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);
  return (
    <section id="projects" className="py-32 relative">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium text-primary-glow tracking-widest uppercase">Trabalhos selecionados</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Projetos <span className="text-gradient">em destaque</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {visibleProjects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-card border border-border/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-muted-foreground font-mono">0{i + 1}</span>
                    <div className="h-px flex-1 bg-border max-w-[40px]" />
                    {project.badge && (
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/15 text-primary-glow border border-primary/30">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  {project.period && (
                    <p className="text-xs text-muted-foreground/80 font-mono mb-3">{project.period}</p>
                  )}
                  <p className="text-muted-foreground mb-3 max-w-2xl">{project.description}</p>
                  {project.extra && (
                    <p className="text-muted-foreground mb-4 max-w-2xl">{project.extra}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-secondary/60 text-secondary-foreground border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex md:flex-col gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-background/80 border border-border flex items-center justify-center text-muted-foreground hover:text-primary-glow hover:border-primary/50 transition-all"
                      aria-label="Ver projeto ao vivo"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  )}
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-background/80 border border-border flex items-center justify-center text-muted-foreground hover:text-primary-glow hover:border-primary/50 transition-all"
                    aria-label="Código fonte"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <button
              onClick={() => setShowAll((v) => !v)}
              className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-card border border-border/50 hover:border-primary/50 text-foreground hover:text-primary-glow transition-all duration-300"
            >
              <span className="font-medium">
                {showAll ? "Ver menos" : `Ver mais (${projects.length - 3})`}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
