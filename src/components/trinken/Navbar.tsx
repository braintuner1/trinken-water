import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import trinkenLogo from "@/assets/trinken-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Color helpers depending on scrolled state
  const textBase = scrolled ? "text-foreground/80 hover:text-primary" : "text-white/90 hover:text-white";
  const brandTitle = scrolled ? "text-foreground" : "text-white";
  const brandTag = scrolled ? "text-primary" : "text-white/80";
  const burgerColor = scrolled ? "text-foreground" : "text-white";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="w-10 h-10 rounded-full overflow-hidden shadow-glow"
            >
              <img src={trinkenLogo} alt="Trinken Water logo" className="w-full h-full object-cover" />
            </motion.div>
            <div className="leading-none">
              <div className={`font-display font-extrabold text-xl transition-colors ${brandTitle}`}>Trinken</div>
              <div className={`text-[10px] tracking-[0.2em] uppercase transition-colors ${brandTag}`}>Water</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors group ${textBase}`}
              >
                {l.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-aqua scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild variant="default" className="bg-aqua hover:opacity-90 shadow-glow rounded-full px-6">
              <a href="#contact" className="inline-flex items-center gap-2">
                <i className="fi fi-sr-shopping-bag flex" />
                Order Now
              </a>
            </Button>
          </div>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${burgerColor}`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <i className={`fi ${open ? "fi-rr-cross" : "fi-rr-menu-burger"} text-xl flex`} />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-2"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-lg hover:bg-secondary transition-colors text-foreground/80"
                >
                  {l.label}
                </a>
              ))}
              <Button asChild className="bg-aqua mt-2">
                <a href="#contact">Order Now</a>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
