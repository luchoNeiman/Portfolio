import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { ArrowDown, Send, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/context/LanguageContext";
import profileImg from "@/assets/profile.jpg";
import { useEffect, useRef, useState } from "react";

const roles = ["Full Stack Developer", "Frontend Developer", "Backend Developer", "UI/UX Designer"];

const HeroSection = () => {
  const { lang, t } = useLang();
  const cvUrl = lang === "es" ? "/cv/CV-Luciano-Neiman-ES.pdf" : "/cv/CV-Luciano-Neiman-EN.pdf";

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  // Interactive fluid background reacting to mouse
  const sectionRef = useRef<HTMLElement | null>(null);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20, mass: 0.6 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20, mass: 0.6 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const fluidBg = useMotionTemplate`
    radial-gradient(600px circle at ${smoothX}% ${smoothY}%, hsl(var(--primary) / 0.35), transparent 60%),
    radial-gradient(500px circle at ${useTransform(smoothX, (v) => 100 - v)}% ${useTransform(smoothY, (v) => 100 - v)}%, hsl(var(--accent) / 0.28), transparent 65%),
    radial-gradient(800px circle at 50% 50%, hsl(217 91% 60% / 0.12), transparent 70%)
  `;

  const orbX = useTransform(smoothX, [0, 100], [-40, 40]);
  const orbY = useTransform(smoothY, [0, 100], [-30, 30]);
  const orb2X = useTransform(smoothX, [0, 100], [40, -40]);
  const orb2Y = useTransform(smoothY, [0, 100], [30, -30]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Interactive fluid gradient layer */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{ background: fluidBg }}
      />
      {/* Subtle noise/grid for depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Animated gradient orbs that drift with the cursor */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        style={{ x: orbX, y: orbY }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        style={{ x: orb2X, y: orb2Y }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Particle dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <div className="container relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 pt-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-primary font-body font-medium mb-2 tracking-wider text-sm uppercase"
          >
            {t("hero.welcome")}
          </motion.p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4">
            Luciano Agustín{" "}
            <span className="text-gradient">Neiman</span>
          </h1>
          <div className="text-xl sm:text-2xl text-muted-foreground font-body font-medium mb-8 h-8">
            <span>{displayed}</span>
            <motion.span
              className="inline-block w-0.5 h-6 bg-primary ml-0.5 align-middle"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" asChild className="group">
              <a href="#projects">
                <ArrowDown className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                {t("hero.cta.projects")}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                <Send className="mr-2 h-4 w-4" />
                {t("hero.cta.contact")}
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href={cvUrl} download>
                <Download className="mr-2 h-4 w-4" />
                {t("hero.cta.cv")}
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Photo — fade-in + hover scale (no spin) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <motion.div
            className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 group cursor-pointer"
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent p-1 transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-primary/30">
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <img
                  src={profileImg}
                  alt="Luciano Neiman"
                  className="w-full h-full object-cover rounded-full"
                  width={320}
                  height={320}
                />
              </div>
            </div>
            {/* Glow ring */}
            <motion.div
              className="absolute -inset-3 rounded-full border border-primary/20"
              animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
