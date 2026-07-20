import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/context/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import soundspotImg from "@/assets/project-soundspot.jpg";
import umamiImg from "@/assets/project-umami.jpg";
import undergroundImg from "@/assets/project-underground.jpg";
import soundpulseImg from "@/assets/project-soundpulse.jpg";
import umaiuxchallengeImg from "@/assets/project-uxchallenge.jpeg";

interface Project {
  title: string;
  shortDesc: string;
  fullDesc: string;
  image?: string;
  tags: string[];
  github?: string;
  liveUrl?: string;
  liveLabel?: string;
  comingSoon?: boolean;
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
      github: "https://github.com/luchoNeiman/Soundspot",
      liveUrl: "https://soundspot-pearl.vercel.app/",
    },
    {
      title: "UMAMI",
      shortDesc: lang === "es"
        ? "E-commerce con pasarela de pagos Mercado Pago y Webhooks en tiempo real."
        : "E-commerce with Mercado Pago payment gateway and real-time Webhooks.",
      fullDesc: lang === "es"
        ? "UMAMI es una plataforma de gestión gastronómica Full Stack desarrollada en Laravel bajo el patrón MVC. El sistema permite digitalizar ventas mediante un catálogo interactivo con carrito de compras e integración de Mercado Pago. Incluye además un panel administrativo para controlar stock y pedidos en tiempo real."
        : "UMAMI is a Full Stack gastronomic management platform built in Laravel following the MVC pattern. The system digitizes sales through an interactive catalog with a shopping cart and Mercado Pago integration. It also includes an admin panel to control stock and orders in real time.",
      image: umamiImg,
      tags: ["Laravel 11", "PHP", "Webhooks", "MySQL", "Aiven", "DBeaver"],
      github: "https://github.com/luchoNeiman/UMAMI",
      liveUrl: "https://umami-jade-chi.vercel.app/",
    },
    {
      title: "Underground",
      shortDesc: lang === "es"
        ? "Red social para cinéfilos con Backend-as-a-Service."
        : "Social network for movie lovers with Backend-as-a-Service.",
      fullDesc: lang === "es"
        ? "Red social diseñada específicamente para cinéfilos. Implementa un sistema de gestión de base de datos e interacciones sociales utilizando un entorno de Backend-as-a-Service."
        : "Social network designed specifically for movie lovers. It implements a database management system and social interactions using a Backend-as-a-Service environment.",
      image: undergroundImg,
      tags: ["Vue 3", "Supabase", "JavaScript"],
      github: "https://github.com/luchoNeiman/Underground",
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
      tags: ["Vue.js", "Vite", "TypeScript", "iTunes API", "CSS moderno"],
      github: "https://github.com/luchoNeiman/Soundpulse",
      liveUrl: "https://soundpulse-xi.vercel.app/",
    },
    {
      title: "UMAI UX Challenge",
      shortDesc: lang === "es"
        ? "Liderazgo en diseño visual y prototipado interactivo para solucionar problemáticas urbanas en un sprint de una semana."
        : "Led visual design and interactive prototyping to solve urban issues in a one-week sprint.",
      fullDesc: lang === "es"
        ? "Participé de la competencia educativa de diseño de experiencia de usuario. Durante una semana trabajamos en equipo para idear, diseñar y prototipar una solución digital a problemáticas de la Ciudad de Buenos Aires. Tuvimos capacitaciones intensivas a cargo de profesionales de distintas empresas donde aprendimos sobre gestión de proyectos, diseño UI, diseño UX e investigación de usuarios."
        : "I participated in an educational UX design competition. During one week we worked as a team to ideate, design and prototype a digital solution for urban issues in Buenos Aires. We received intensive training from professionals of various companies where we learned about project management, UI design, UX design and user research.",
      image: umaiuxchallengeImg,
      tags: ["Figma", "UX Research", "Prototipado"],
    },
    ...(["Filmistry", "Luthier", "Provident", "AGBot"].map((name) => ({
      title: name,
      shortDesc: lang === "es" ? "Próximamente. Detalles en breve." : "Coming soon. Details shortly.",
      fullDesc: lang === "es" ? "Este proyecto se sumará al portfolio próximamente." : "This project will be added to the portfolio soon.",
      tags: [lang === "es" ? "Próximamente" : "Coming soon"],
      comingSoon: true,
    }))),
  ];

  const bentoClasses = [
    "md:col-span-4 md:row-span-2 min-h-[420px] md:min-h-0",
    "md:col-span-2 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-3 md:row-span-1",
    "md:col-span-3 md:row-span-1",
    "md:col-span-3 md:row-span-1",
    "md:col-span-3 md:row-span-1",
    "md:col-span-3 md:row-span-1",
    "md:col-span-3 md:row-span-1",
  ];

  return (
    <>
      <section id="projects" className="py-24">
        <div className="container" ref={ref}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-heading font-bold text-center mb-14"
          >
            {t("projects.title1")} <span className="text-gradient">{t("projects.title2")}</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-6 md:auto-rows-[220px] gap-4 md:gap-5">
            {projects.map((p, i) => (
              <motion.div
                key={p.title + i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 260, damping: 20 } }}
                onClick={() => setSelected(p)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer border border-border/50 bg-card/40 backdrop-blur-xl shadow-lg shadow-black/20 transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/20 min-h-[260px] ${bentoClasses[i] ?? "md:col-span-3"}`}
              >
                {/* Background image or decorative fallback */}
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-primary/10 to-background transition-transform duration-700 ease-out group-hover:scale-105">
                    <div className="absolute inset-0" style={{ background: "radial-gradient(500px circle at 30% 20%, hsl(var(--primary) / 0.25), transparent 60%)" }} />
                    <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                    <span className="absolute top-4 right-4 px-2.5 py-1 text-[10px] font-body font-medium rounded-full border border-primary/40 bg-background/60 backdrop-blur text-primary uppercase tracking-wider">
                      {lang === "es" ? "Próximamente" : "Coming soon"}
                    </span>
                  </div>
                )}

                {/* Base gradient (always visible) */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

                {/* Accent glow on hover */}
                <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(600px circle at 50% 100%, hsl(var(--primary) / 0.25), transparent 60%)" }} />

                {/* Title bar (base state) */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground drop-shadow">
                    {p.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground font-body mt-1 line-clamp-1">
                    {p.tags.slice(0, 3).join(" · ")}
                  </p>
                </div>

                {/* Hover reveal panel */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6 bg-gradient-to-t from-background/95 via-background/85 to-background/40 backdrop-blur-md opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed mb-3 line-clamp-3">
                    {p.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-body rounded-full border border-primary/30 bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-primary">
                    {lang === "es" ? "Ver detalles" : "View details"}
                    <ExternalLink className="h-3 w-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent
          overlayClassName="bg-black/80 backdrop-blur-sm"
          className="sm:max-w-lg max-h-[90vh] overflow-y-auto border border-slate-700/80 bg-slate-950/95 text-slate-100 backdrop-blur-2xl shadow-2xl shadow-black/50"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading font-bold">{selected?.title}</DialogTitle>
            <DialogDescription className="sr-only">
              {selected?.title} project details
            </DialogDescription>
          </DialogHeader>

          {selected && (
            <div className="space-y-5">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-64 md:h-72 object-contain rounded-xl mx-0 p-2 bg-slate-900/80 border border-slate-700/70"
              />
              <p className="text-sm font-body leading-relaxed text-slate-300">
                {selected.fullDesc}
              </p>
              <div className="flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-body font-medium rounded-full border border-cyan-400/35 bg-cyan-500/10 text-cyan-200 transition-colors hover:border-cyan-300/60 hover:bg-cyan-400/20 hover:text-cyan-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {selected.liveUrl ? (
                  <Button asChild size="sm" className="shadow-sm">
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
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-cyan-400/45 bg-cyan-500/10 text-cyan-200 hover:border-cyan-300 hover:bg-cyan-400/20 hover:text-cyan-100"
                  >
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
