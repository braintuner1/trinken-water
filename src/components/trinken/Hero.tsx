import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import bottle from "@/assets/hero.png";
import heroBg from "@/assets/hero-bg.jpg";
import { LightRays } from "./LightRays";

const Bubbles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 18 }).map((_, i) => {
      const size = 8 + Math.random() * 30;
      const left = Math.random() * 100;
      const delay = Math.random() * 8;
      const duration = 8 + Math.random() * 10;
      return (
        <span
          key={i}
          className="absolute rounded-full bg-white/20 border border-white/30 animate-bubble"
          style={{
            width: size,
            height: size,
            left: `${left}%`,
            bottom: `-${size}px`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      );
    })}
  </div>
);

const Wave = () => (
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
    <svg
      className="relative block w-[200%] h-24 animate-wave"
      viewBox="0 0 2880 320"
      preserveAspectRatio="none"
    >
      <path
        d="M0,160 C480,320 960,0 1440,160 C1920,320 2400,0 2880,160 L2880,320 L0,320 Z"
        fill="hsl(var(--background))"
      />
    </svg>
  </div>
);

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-[hsl(215_85%_15%/0.55)]" />
      </div>

      {/* Light rays overlay */}
      <LightRays count={6} />
      <Bubbles />

      <div className="container relative z-10 mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary-foreground"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-dark text-white px-4 py-2 rounded-full text-xs uppercase tracking-widest mb-6"
          >
            <i className="fi fi-sr-sparkles text-accent flex" />
            #The Drink of Life
          </motion.div>

          <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-6">
            Pure Hydration,
            <span className="block italic text-cyan-200">
              Bottled by Nature.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/85 max-w-xl mb-8">
            Trinken Water is sourced, purified and packed with care in
            Uganda. Crisp, clean, mineral-balanced  hydration the way it should be.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-14 text-base font-semibold shadow-glow group"
            >
              <a href="#products">
                Shop Bottles
                <i className="fi fi-rr-arrow-right ml-2 flex group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10 rounded-full px-6 h-14 gap-3"
            >
              <a href="#process">
                <span className="w-10 h-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center backdrop-blur-sm">
                  <i className="fi fi-sr-play text-white text-xs flex" />
                </span>
                Watch our process
              </a>
            </Button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 mt-14 max-w-lg">
            {[
              { n: "100%", l: "Purified" },
              { n: "5+", l: "Cities" },
              { n: "10K+", l: "Daily Bottles" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="border-l-2 border-accent/60 pl-4"
              >
                <div className="font-display font-extrabold text-3xl text-white">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right bottle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute w-[420px] h-[420px] rounded-full bg-accent/30 blur-3xl animate-glow-pulse" />
          <div className="absolute w-[340px] h-[340px] rounded-full border border-white/20 animate-spin-slow" />
          <div
            className="absolute w-[460px] h-[460px] rounded-full border border-dashed border-white/15 animate-spin-slow"
            style={{ animationDirection: "reverse", animationDuration: "40s" }}
          />

          <motion.img
            src={bottle}
            alt="Trinken bottled drinking water"
            width={520}
            height={780}
            className="relative z-10 w-[280px] md:w-[380px] lg:w-[440px] drop-shadow-2xl animate-float"
          />
        </motion.div>
      </div>

      <Wave />
    </section>
  );
};
