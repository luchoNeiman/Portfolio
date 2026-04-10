import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/context/LanguageContext";
import umamiImg from "@/assets/project-umami.jpg";
import soundpulseImg from "@/assets/project-soundpulse.jpg";
import uxImg from "@/assets/project-uxchallenge.jpg";

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  const projects = [
    {
      title: "UMAMI",
      description: t("projects.umami.desc"),
      image: umamiImg,
      tags: ["Laravel 11", "PHP", "MySQL", "Mercado Pago"],
      github: "https://github.com/luchoNeiman/UMAMI",
    },
    {
      title: "Soundpulse",
      description: t("projects.soundpulse.desc"),
      image: soundpulseImg,
      tags: ["Vue.js", "JavaScript", "CSS3", "Figma"],
      github: "https://github.com/luchoNeiman/Soundpulse",
    },
    {
      title: "UMAI UX Challenge",
      description: t("projects.ux.desc"),
      image: uxImg,
      tags: ["Figma", "UX Research", "Prototipado"],
    },
  ];

  return (
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} inView={inView} codeLabel={t("projects.code")} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project: p,
  index: i,
  inView,
  codeLabel,
}: {
  project: { title: string; description: string; image: string; tags: string[]; github?: string };
  index: number;
  inView: boolean;
  codeLabel: string;
}) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.15 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="glass rounded-2xl overflow-hidden group cursor-default transition-shadow duration-500 hover:shadow-2xl hover:shadow-primary/10"
      style={{ perspective: "1000px" }}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={p.image}
          alt={p.title}
          loading="lazy"
          width={1280}
          height={720}
          className="w-full h-48 object-contain text-inherit bg-inherit"
          animate={hover ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
          initial={{ opacity: 0 }}
          animate={hover ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{p.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {p.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {p.tags.map((tag, ti) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 + ti * 0.05 }}
              className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        <div className="flex gap-3">
          {p.github && (
            <Button variant="outline" size="sm" asChild className="group/btn">
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                {codeLabel}
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
