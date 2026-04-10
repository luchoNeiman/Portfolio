import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "Lic. en Tecnología Multimedial (UMAI) – 3er año" },
  { icon: Briefcase, label: "Tesis en curso – Diseño y Programación Web (Da Vinci)" },
  { icon: Award, label: "Egresado con honores – Escuela Técnica ORT" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Sobre <span className="text-gradient">Mí</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Soy un desarrollador Full Stack y estudiante de diseño y programación.
            Actualmente curso el 3er año de la Licenciatura en Tecnología Multimedial
            (UMAI) y me encuentro realizando la tesis de la Tecnicatura en Diseño y
            Programación Web (Escuela Da Vinci). Egresé con honores de la escuela
            secundaria técnica (especialidad Informática). Durante estos años me
            enfoqué al 100% en mi formación académica y en el desarrollo de proyectos
            complejos, y hoy busco mi primera experiencia profesional en la industria IT.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="glass rounded-xl p-5 flex flex-col items-center gap-3"
              >
                <h.icon className="h-8 w-8 text-primary" />
                <p className="text-sm font-medium text-foreground">{h.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
