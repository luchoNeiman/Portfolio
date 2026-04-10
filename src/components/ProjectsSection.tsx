import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import umamiImg from "@/assets/project-umami.jpg";
import soundpulseImg from "@/assets/project-soundpulse.jpg";
import uxImg from "@/assets/project-uxchallenge.jpg";

const projects = [
  {
    title: "UMAMI",
    description:
      "E-commerce con integración completa de la pasarela de pagos de Mercado Pago, manejo de notificaciones en tiempo real con Webhooks y ngrok.",
    image: umamiImg,
    tags: ["Laravel 11", "PHP", "MySQL", "Mercado Pago"],
    github: "https://github.com/luchoNeiman/UMAMI",
  },
  {
    title: "Soundpulse",
    description:
      "Aplicación web interactiva de temática musical con enfoque en una UI moderna y navegación fluida.",
    image: soundpulseImg,
    tags: ["Vue.js", "JavaScript", "CSS3", "Figma"],
    github: "https://github.com/luchoNeiman/Soundpulse",
  },
  {
    title: "UMAI UX Challenge",
    description:
      "Liderazgo en diseño visual y prototipado interactivo para solucionar problemáticas urbanas en un sprint de una semana.",
    image: uxImg,
    tags: ["Figma", "UX Research", "Prototipado"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-14"
        >
          Proyectos <span className="text-gradient">Destacados</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="w-full h-48 transition-transform duration-500 group-hover:scale-110 object-contain text-inherit bg-inherit"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {p.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={p.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
