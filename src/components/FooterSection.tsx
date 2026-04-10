import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

const socials = [
  { icon: Github, href: "https://github.com/luchoNeiman", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/luchoneiman/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:neimanlucho@gmail.com", label: "Email" },
];

const FooterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLang();

  return (
    <footer id="contact" className="py-24 bg-secondary/30">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("footer.title1")} <span className="text-gradient">{t("footer.title2")}</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            {t("footer.text")}
          </p>
          <div className="flex justify-center gap-5">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <s.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
        <div className="mt-16 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Luciano Neiman. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
