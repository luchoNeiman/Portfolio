import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "es" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.about": { es: "Sobre Mí", en: "About Me" },
  "nav.skills": { es: "Habilidades", en: "Skills" },
  "nav.projects": { es: "Proyectos", en: "Projects" },
  "nav.contact": { es: "Contacto", en: "Contact" },

  // Hero
  "hero.welcome": { es: "Bienvenido a mi portfolio", en: "Welcome to my portfolio" },
  "hero.cta.projects": { es: "Ver Proyectos", en: "View Projects" },
  "hero.cta.contact": { es: "Contactar", en: "Contact Me" },
  "hero.cta.cv": { es: "Descargar CV", en: "Download CV" },

  // About
  "about.title1": { es: "Sobre", en: "About" },
  "about.title2": { es: "Mí", en: "Me" },
  "about.text": {
    es: "Soy un desarrollador Full Stack y estudiante de diseño y programación. Actualmente curso el 3er año de la Licenciatura en Tecnología Multimedial (UMAI) y me encuentro realizando la tesis de la Tecnicatura en Diseño y Programación Web (Escuela Da Vinci). Egresé con honores de la escuela secundaria técnica (especialidad Informática). Durante estos años me enfoqué al 100% en mi formación académica y en el desarrollo de proyectos complejos, y hoy busco mi primera experiencia profesional en la industria IT.",
    en: "I'm a Full Stack Developer and a design & programming student. I'm currently in my 3rd year of the Bachelor's in Multimedia Technology (UMAI) and working on my thesis for the Web Design & Programming Technician degree (Da Vinci School). I graduated with honors from a technical high school (Computer Science specialty). Over the years I focused 100% on my academic training and the development of complex projects, and today I'm looking for my first professional experience in the IT industry.",
  },
  "about.h1": { es: "Lic. en Tecnología Multimedial (UMAI) – 3er año", en: "B.S. in Multimedia Technology (UMAI) – 3rd year" },
  "about.h2": { es: "Tesis en curso – Diseño y Programación Web (Da Vinci)", en: "Thesis in progress – Web Design & Programming (Da Vinci)" },
  "about.h3": { es: "Egresado con honores – Escuela Técnica ORT", en: "Graduated with honors – ORT Technical School" },

  // Skills
  "skills.title1": { es: "Mis", en: "My" },
  "skills.title2": { es: "Habilidades", en: "Skills" },
  "skills.frontend": { es: "Frontend", en: "Frontend" },
  "skills.backend": { es: "Backend & Bases de Datos", en: "Backend & Databases" },
  "skills.design": { es: "Diseño & Herramientas", en: "Design & Tools" },

  // Projects
  "projects.title1": { es: "Proyectos", en: "Featured" },
  "projects.title2": { es: "Destacados", en: "Projects" },
  "projects.code": { es: "Código", en: "Code" },
  "projects.umami.desc": {
    es: "E-commerce con integración completa de la pasarela de pagos de Mercado Pago, manejo de notificaciones en tiempo real con Webhooks y ngrok.",
    en: "E-commerce with full Mercado Pago payment gateway integration, real-time notifications with Webhooks and ngrok.",
  },
  "projects.soundpulse.desc": {
    es: "Aplicación web interactiva de temática musical con enfoque en una UI moderna y navegación fluida.",
    en: "Interactive music-themed web app focused on a modern UI and smooth navigation.",
  },
  "projects.ux.desc": {
    es: "Liderazgo en diseño visual y prototipado interactivo para solucionar problemáticas urbanas en un sprint de una semana.",
    en: "Led visual design and interactive prototyping to solve urban issues in a one-week sprint.",
  },

  // Footer
  "footer.title1": { es: "¿Trabajamos", en: "Shall we work" },
  "footer.title2": { es: "juntos", en: "together" },
  "footer.text": {
    es: "Estoy buscando mi primera experiencia profesional (Junior / Trainee). Si tenés una oportunidad o simplemente querés conectar, ¡escribime!",
    en: "I'm looking for my first professional experience (Junior / Trainee). If you have an opportunity or just want to connect, reach out!",
  },
  "footer.rights": { es: "Todos los derechos reservados.", en: "All rights reserved." },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");
  const toggleLang = () => setLang((l) => (l === "es" ? "en" : "es"));
  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be inside LanguageProvider");
  return ctx;
};
