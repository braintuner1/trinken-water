import { motion } from "framer-motion";
import spring from "@/assets/spring-source.jpg";
import family from "@/assets/family.webp";

const points = [
  { icon: "fi-sr-shield-check", title: "Certified Purity", text: "Multi-stage filtration with UV and ozone treatment for absolute safety." },
  { icon: "fi-sr-leaf", title: "Natural Source", text: "Drawn from protected aquifers and bottled at the source." },
  { icon: "fi-sr-trophy", title: "Trusted Quality", text: "Manufactured by Trinken Investments  Uganda's hydration partner." },
];

export const About = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden bg-background">
      <div className="absolute -right-40 top-20 w-[500px] h-[500px] bg-primary/5 blob blur-3xl" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image collage */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative h-[560px]"
        >
          <div className="absolute top-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-elegant">
            <img src={spring} alt="Natural spring water source" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-elegant border-8 border-background">
            <img src={family} alt="Family enjoying Trinken water" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
            className="absolute top-6 right-6 w-32 h-32 rounded-full bg-aqua text-primary-foreground flex flex-col items-center justify-center shadow-glow font-display"
          >
            <div className="text-3xl font-extrabold leading-none">100%</div>
            <div className="text-[10px] uppercase tracking-widest mt-1">Pure</div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-xs uppercase tracking-widest font-semibold mb-5">
            About Trinken
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-tight mb-6">
            Hydration that flows from <span className="text-gradient">Uganda's heart</span>.
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Trinken Water is manufactured by Trinken Investments Limited.
            From source to seal, every bottle is crafted with care to deliver crisp,
            clean hydration for families, athletes and businesses across Uganda.
          </p>

          <div className="space-y-5">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start group"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-secondary text-primary flex items-center justify-center group-hover:bg-aqua group-hover:text-primary-foreground transition-all duration-300">
                  <i className={`fi ${p.icon} text-xl flex`} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-1">{p.title}</h3>
                  <p className="text-muted-foreground">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
