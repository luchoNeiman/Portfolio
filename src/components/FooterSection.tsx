import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/context/LanguageContext";

const EMAIL_HREF = "https://mail.google.com/mail/?view=cm&fs=1&to=neimanlucho@gmail.com";

const socials = [
  { icon: Github, href: "https://github.com/luchoNeiman", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/luchoneiman/", label: "LinkedIn" },
  { icon: Mail, href: EMAIL_HREF, label: "Email" },
];

const FooterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang, t } = useLang();

  return (
    <footer id="contact" className="py-24 bg-secondary/30">
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            {t("footer.title1")} <span className="text-gradient">{t("footer.title2")}</span>?
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-10">
            {t("footer.text")}
          </p>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-10"
          >
            <Button size="lg" asChild className="bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-white">
              <a
                href="https://wa.me/5491160331228"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="mr-2 h-5 w-5"
                >
                  <path d="M19.05 4.91A9.82 9.82 0 0 0 12.03 2a9.9 9.9 0 0 0-8.57 14.85L2 22l5.29-1.38a9.9 9.9 0 0 0 4.73 1.2h.01A9.98 9.98 0 0 0 22 11.93a9.8 9.8 0 0 0-2.95-7.02Zm-7.02 15.24h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.14.82.84-3.06-.2-.32a8.24 8.24 0 0 1-1.27-4.35c0-4.57 3.72-8.29 8.29-8.29a8.1 8.1 0 0 1 5.86 2.44 8.2 8.2 0 0 1 2.43 5.86c0 4.58-3.72 8.3-8.3 8.3Zm4.55-6.2c-.25-.13-1.46-.72-1.69-.8-.22-.08-.38-.13-.55.12-.16.25-.63.8-.77.96-.14.16-.28.18-.53.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.28.37-.41.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.43-.06-.13-.55-1.32-.76-1.81-.2-.47-.4-.41-.55-.42h-.47c-.16 0-.43.06-.66.3-.23.25-.87.86-.87 2.1s.89 2.43 1.01 2.59c.12.16 1.74 2.65 4.22 3.72.59.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.46-.6 1.67-1.17.21-.58.21-1.07.15-1.17-.06-.1-.22-.16-.47-.29Z" />
                </svg>
                {lang === "es" ? "Contactame por WhatsApp" : "Contact me on WhatsApp"}
              </a>
            </Button>
          </motion.div>

          <div className="flex justify-center gap-5">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                whileHover={{
                  scale: 1.14,
                  rotate: 4,
                  transition: { type: "spring", stiffness: 320, damping: 16 },
                }}
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
        <div className="mt-16 text-center text-sm font-body text-muted-foreground">
          © {new Date().getFullYear()} Luciano Neiman. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
