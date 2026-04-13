import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Server, Palette } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  const categories = [
    {
      icon: Monitor,
      title: t("skills.frontend"),
      skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind", "JavaScript", "TypeScript", "React", "React Native", "Vue.js"],
    },
    {
      icon: Server,
      title: t("skills.backend"),
      skills: ["Node.js", "PHP", "C#", "ASP.NET MVC", "Laravel 11", "SQL Server", "MySQL", "MongoDB", "MariaDB", "Supabase"],
    },
    {
      icon: Palette,
      title: t("skills.design"),
      skills: ["Figma", "Photoshop", "Illustrator", "InDesign", "After Effects", "Media Encoder", "GitHub", "XAMPP", "ngrok"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-heading font-bold text-center mb-14"
        >
          {t("skills.title1")} <span className="text-gradient">{t("skills.title2")}</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{
                y: -8,
                scale: 1.015,
                transition: { type: "spring", stiffness: 250, damping: 18 },
              }}
              className="glass rounded-xl p-6 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <cat.icon className="h-5 w-5 text-primary" />
                </motion.div>
                <h3 className="font-heading font-semibold text-lg">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, si) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 + si * 0.04 }}
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                      transition: { type: "spring", stiffness: 320, damping: 16 },
                    }}
                    className="px-3 py-1.5 text-xs font-body font-medium rounded-full bg-primary/10 text-primary border border-primary/20 cursor-default transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {s}
                  </motion.span>
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
