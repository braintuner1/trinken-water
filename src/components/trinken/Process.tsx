import { motion } from "framer-motion";
import factory from "@/assets/factory.jpg";

const steps = [
  { icon: "fi-sr-drop", title: "Source", text: "Drawn from protected underground aquifers." },
  { icon: "fi-sr-filter", title: "Filter", text: "Multi-stage micron and carbon filtration." },
  { icon: "fi-sr-flask", title: "Purify", text: "UV + Ozone purification for absolute safety." },
  { icon: "fi-sr-box-alt", title: "Bottle", text: "Sealed in BPA-free bottles at the source." },
  { icon: "fi-sr-truck-side", title: "Deliver", text: "Distributed across Uganda within 24h." },
];

export const Process = () => {
  return (
    <section id="process" className="relative py-28 bg-deep text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src={factory} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-deep" />
      </div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-glow/20 blob blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 blob blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass-dark text-accent text-xs uppercase tracking-widest font-semibold mb-5">
            Our Process
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-tight mb-4">
            From source to seal in <span className="text-accent">5 careful steps</span>
          </h2>
          <p className="text-white/70 text-lg">
            Every drop of Trinken passes through a meticulous process designed
            for purity, safety and taste.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative group"
              >
                <div className="relative w-24 h-24 mx-auto mb-5">
                  <div className="absolute inset-0 rounded-full bg-aqua opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500" />
                  <div className="relative w-full h-full rounded-full glass-dark border-2 border-accent/40 flex items-center justify-center">
                    <i className={`fi ${s.icon} text-accent text-3xl flex`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-primary font-display font-bold flex items-center justify-center text-sm">
                    {i + 1}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                  <p className="text-sm text-white/65">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
