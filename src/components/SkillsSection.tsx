import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Server, Palette } from "lucide-react";

const categories = [
  {
    icon: Monitor,
    title: "Frontend",
    skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind", "JavaScript", "TypeScript", "React", "React Native", "Vue.js"],
  },
  {
    icon: Server,
    title: "Backend & Bases de Datos",
    skills: ["Node.js", "PHP", "C#", "ASP.NET MVC", "Laravel 11", "SQL Server", "MySQL", "MongoDB", "MariaDB", "Supabase"],
  },
  {
    icon: Palette,
    title: "Diseño & Herramientas",
    skills: ["Figma", "Photoshop", "Illustrator", "InDesign", "After Effects", "Media Encoder", "GitHub", "XAMPP", "ngrok"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-14"
        >
          Mis <span className="text-gradient">Habilidades</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <cat.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
