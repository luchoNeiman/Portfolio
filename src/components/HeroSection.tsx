import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Gradient orbs */}
    <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
    <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

    <div className="container relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 pt-20">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center lg:text-left"
      >
        <p className="text-primary font-medium mb-2 tracking-wider text-sm uppercase">
          Bienvenido a mi portfolio
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          Luciano Agustín{" "}
          <span className="text-gradient">Neiman</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-8">
          Full Stack Developer
        </p>
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <Button size="lg" asChild>
            <a href="#projects">
              <ArrowDown className="mr-2 h-4 w-4" />
              Ver Proyectos
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              <Send className="mr-2 h-4 w-4" />
              Contactar
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex-shrink-0"
      >
        <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent p-1">
            <img
              src={profileImg}
              alt="Luciano Neiman"
              className="w-full h-full object-cover rounded-full"
              width={320}
              height={320}
            />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
