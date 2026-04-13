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
    es: "Soy un Desarrollador Web Full Stack apasionado por la creación de experiencias digitales integrales. Mi perfil híbrido me permite combinar la lógica técnica del desarrollo backend y frontend con una mirada estratégica enfocada en el diseño UI/UX. Actualmente busco mi primera oportunidad profesional en el sector IT para seguir desarrollándome. A tu equipo puedo aportarle la capacidad de transformar ideas en productos funcionales y escalables, abarcando todo el ciclo de vida del proyecto: desde el prototipado interactivo en Figma hasta la implementación de arquitecturas robustas e interfaces inmersivas. Estoy listo para sumar proactividad, código limpio y resultados reales.",
    en: "I'm a Full Stack Web Developer passionate about creating comprehensive digital experiences. My hybrid profile allows me to combine the technical logic of backend and frontend development with a strategic focus on UI/UX design. I'm currently looking for my first professional opportunity in the IT sector to continue growing. I can bring to your team the ability to transform ideas into functional and scalable products, covering the entire project lifecycle: from interactive prototyping in Figma to the implementation of robust architectures and immersive interfaces. I'm ready to contribute proactivity, clean code and real results.",
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
