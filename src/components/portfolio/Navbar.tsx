import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#about", label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#skills", label: "Habilidades" },
  { href: "#contact", label: "Contato" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50"
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="font-display font-bold text-lg tracking-tight">
          <span className="text-gradient">JonasPort</span>
          <span className="text-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 ml-auto">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 rounded-full border border-border bg-card/50 flex items-center justify-center text-foreground"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed top-16 right-0 w-2/3 max-w-xs border-l border-b border-border/50 bg-background/95 backdrop-blur-xl rounded-bl-2xl shadow-xl"
          >
            <div className="py-4 px-4 flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-card/60 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
