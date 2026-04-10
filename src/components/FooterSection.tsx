import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/luchoNeiman", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/luchoneiman", label: "LinkedIn" },
  { icon: Mail, href: "mailto:neimanlucho@gmail.com", label: "Email" },
];

const FooterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer id="contact" className="py-24 bg-secondary/30">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            ¿Trabajamos <span className="text-gradient">juntos</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Estoy buscando mi primera experiencia profesional (Junior / Trainee).
            Si tenés una oportunidad o simplemente querés conectar, ¡escribime!
          </p>
          <div className="flex justify-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>
        <div className="mt-16 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Luciano Neiman. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
