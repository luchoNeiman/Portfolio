import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/context/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import soundspotImg from "@/assets/project-soundpulse.jpg";
import umamiImg from "@/assets/project-umami.jpg";
import undergroundImg from "@/assets/project-uxchallenge.jpg";
import soundpulseImg from "@/assets/project-soundpulse.jpg";

interface Project {
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tags: string[];
  github?: string;
  liveUrl?: string;
  liveLabel?: string;
}

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang, t } = useLang();
  const [selected, setSelected] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Soundspot",
      shortDesc: lang === "es"
        ? "Descubrimiento de eventos musicales en tiempo real con la API de Ticketmaster."
        : "Real-time music event discovery powered by the Ticketmaster API.",
      fullDesc: lang === "es"
        ? "Aplicación web orientada al descubrimiento de eventos musicales en tiempo real. El desarrollo destaca por la integración y consumo de la Ticketmaster Discovery API (RESTful), gestionando datos externos asíncronos para desplegar información detallada de conciertos, fechas y artistas mediante una interfaz dinámica."
        : "Web application for real-time music event discovery. The development highlights the integration and consumption of the Ticketmaster Discovery API (RESTful), managing asynchronous external data to display detailed concert information, dates and artists through a dynamic interface.",
      image: soundspotImg,
      tags: ["Vue.js", "JavaScript (ES6+)", "REST APIs", "HTML5", "CSS3"],
      github: "https://github.com/luchoNeiman/Soundpulse",
      liveUrl: "https://soundspot-pearl.vercel.app/",
    },
    {
      title: "UMAMI",
      shortDesc: lang === "es"
        ? "E-commerce con pasarela de pagos Mercado Pago y Webhooks en tiempo real."
        : "E-commerce with Mercado Pago payment gateway and real-time Webhooks.",
      fullDesc: lang === "es"
        ? "Plataforma E-commerce integral de alto rendimiento. Su principal desafío técnico fue la integración completa y segura de la pasarela de pagos de Mercado Pago, gestionando transacciones y procesando notificaciones de estado en tiempo real mediante Webhooks."
        : "High-performance, comprehensive E-commerce platform. Its main technical challenge was the complete and secure integration of the Mercado Pago payment gateway, managing transactions and processing real-time status notifications via Webhooks.",
      image: umamiImg,
      tags: ["Laravel 11", "PHP", "Webhooks", "MySQL"],
      github: "https://github.com/luchoNeiman/UMAMI",
      liveLabel: lang === "es" ? "Deploy en proceso" : "Deploy in progress",
    },
    {
      title: "Underground Cinema",
      shortDesc: lang === "es"
        ? "Red social para cinéfilos con Backend-as-a-Service."
        : "Social network for movie lovers with Backend-as-a-Service.",
      fullDesc: lang === "es"
        ? "Red social diseñada específicamente para cinéfilos. Implementa un sistema de gestión de base de datos e interacciones sociales utilizando un entorno de Backend-as-a-Service."
        : "Social network designed specifically for movie lovers. It implements a database management system and social interactions using a Backend-as-a-Service environment.",
      image: undergroundImg,
      tags: ["Vue 3", "Supabase", "JavaScript"],
      liveUrl: "https://underground-cinema.vercel.app/",
    },
    {
      title: "Soundpulse",
      shortDesc: lang === "es"
        ? "Plataforma musical con UI/UX moderna y transiciones fluidas."
        : "Music platform with modern UI/UX and fluid transitions.",
      fullDesc: lang === "es"
        ? "Plataforma musical interactiva enfocada en una UI/UX moderna y transiciones fluidas. La arquitectura del proyecto prioriza el rendimiento optimizando la carga de recursos de imágenes mediante gestión de archivos locales en lugar de peticiones externas, operando por diseño sin barreras de autenticación."
        : "Interactive music platform focused on modern UI/UX and fluid transitions. The project architecture prioritizes performance by optimizing image resource loading through local file management instead of external requests, operating by design without authentication barriers.",
      image: soundpulseImg,
      tags: ["Vue.js", "Vite", "CSS moderno"],
      github: "https://github.com/luchoNeiman/Soundpulse",
      liveLabel: lang === "es" ? "Deploy en proceso" : "Deploy in progress",
    },
  ];

  return (
    <>
      <section id="projects" className="py-24">
        <div className="container" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-14"
          >
            {t("projects.title1")} <span className="text-gradient">{t("projects.title2")}</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={p.title + i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelected(p)}
                className="glass rounded-2xl overflow-hidden cursor-pointer transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/10 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-sm font-medium text-foreground bg-background/60 backdrop-blur-sm px-4 py-2 rounded-full">
                      {lang === "es" ? "Ver detalles" : "View details"}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                    {p.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {p.tags.length > 3 && (
                      <span className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                        +{p.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto glass border-primary/10">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{selected?.title}</DialogTitle>
            <DialogDescription className="sr-only">
              {selected?.title} project details
            </DialogDescription>
          </DialogHeader>

          {selected && (
            <div className="space-y-5">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="text-muted-foreground text-sm leading-relaxed">
                {selected.fullDesc}
              </p>
              <div className="flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {selected.liveUrl ? (
                  <Button asChild size="sm">
                    <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {lang === "es" ? "Visitar web" : "Visit website"}
                    </a>
                  </Button>
                ) : (
                  <Button size="sm" disabled variant="secondary">
                    {selected.liveLabel}
                  </Button>
                )}
                {selected.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={selected.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      {t("projects.code")}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectsSection;
