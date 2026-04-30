import { motion } from "framer-motion";
import life1 from "@/assets/more-water.jpeg";
import life2 from "@/assets/african.jpg";
import family from "@/assets/family.webp";
import factory from "@/assets/factory.jpg";
import spring from "@/assets/spring-source.jpg";
import splash from "@/assets/trinken.jpeg";

const items = [
  { src: life1, label: "Refresh", span: "row-span-2" },
  { src: factory, label: "Production", span: "" },
  { src: spring, label: "Source", span: "" },
  { src: splash, label: "Pure", span: "row-span-2" },
  { src: family, label: "Family", span: "" },
  { src: life2, label: "Active", span: "" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary text-xs uppercase tracking-widest font-semibold mb-5">
            Gallery
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-tight mb-4">
            Moments of <span className="text-gradient">pure refreshment</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[640px]">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 text-white font-display font-bold text-2xl translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                {it.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
