import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  const highlights = [
    { icon: GraduationCap, label: t("about.h1") },
    { icon: Briefcase, label: t("about.h2") },
    { icon: Award, label: t("about.h3") },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            {t("about.title1")} <span className="text-gradient">{t("about.title2")}</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed mb-10">
            {t("about.text")}
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 260, damping: 18 },
                }}
                className="glass rounded-xl p-5 flex flex-col items-center gap-3 cursor-default transition-shadow hover:shadow-lg hover:shadow-primary/10"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <h.icon className="h-8 w-8 text-primary" />
                </motion.div>
                <p className="text-sm font-body font-medium text-foreground">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
