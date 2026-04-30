import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import bottle from "@/assets/hero.png";

const products = [
  { size: "500ml", name: "Pocket", price: "500", desc: "Perfect on-the-go hydration for daily refresh.", popular: false },
  { size: "1L", name: "Active", price: "1000", desc: "Ideal for workouts, work and family meals.", popular: true },
  { size: "1.5L", name: "Family", price: "1,500", desc: "Share the goodness  built for the whole table.", popular: false },
  { size: "5L", name: "Home", price: "5,000", desc: "Bulk hydration for the entire household.", popular: false },
];

export const Products = () => {
  return (
    <section id="products" className="relative py-28 bg-gradient-to-b from-background to-secondary/40 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs uppercase tracking-widest font-semibold mb-5">
            Our Bottles
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-tight mb-4">
            Choose your <span className="text-gradient">perfect size</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From pocket-friendly to family-sized. Trinken comes in the format
            that fits your day.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.size}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative rounded-3xl p-6 pt-8 group transition-all duration-500 ${
                p.popular
                  ? "bg-deep text-primary-foreground shadow-elegant"
                  : "bg-card border border-border hover:shadow-elegant hover:border-primary/30"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Most Loved
                </div>
              )}
              <div className="relative h-52 flex items-center justify-center mb-4 overflow-hidden">
                <div className={`absolute inset-0 ${p.popular ? "bg-accent/20" : "bg-primary/5"} blob blur-2xl group-hover:scale-110 transition-transform duration-500`} />
                <motion.img
                  src={bottle}
                  alt={`Trinken ${p.size} bottle`}
                  loading="lazy"
                  whileHover={{ rotate: -8, scale: 1.1 }}
                  className="relative h-full object-contain drop-shadow-2xl"
                />
              </div>
              <div className="text-xs uppercase tracking-widest opacity-70 mb-1">{p.name}</div>
              <h3 className="font-display font-extrabold text-3xl mb-2">{p.size}</h3>
              <p className={`text-sm mb-5 ${p.popular ? "text-white/70" : "text-muted-foreground"}`}>{p.desc}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs opacity-70">UGX</span>
                  <div className="font-display font-bold text-2xl">{p.price}</div>
                </div>
                <Button
                  size="icon"
                  className={`rounded-full w-11 h-11 ${
                    p.popular
                      ? "bg-accent text-primary hover:bg-white"
                      : "bg-aqua text-primary-foreground hover:opacity-90"
                  }`}
                >
                  <i className="fi fi-sr-shopping-bag flex" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
