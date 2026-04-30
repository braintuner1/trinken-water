import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const cities = ["Kampala", "Wakiso", "Entebbe", "Mbarara", "Lira"];

export const Contact = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll be in touch shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-background">
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-primary-glow/10 blob blur-3xl" />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-deep text-primary-foreground rounded-3xl p-10 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-accent/20 blob blur-3xl" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent" />

            <div className="relative">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-accent text-xs uppercase tracking-widest font-semibold mb-5">
                Get in Touch
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl leading-tight mb-6">
                Order Trinken for your home or business
              </h2>
              <p className="text-white/70 mb-10">
                Reach out for retail orders, distribution, or wholesale inquiries.
                We deliver across Uganda.
              </p>

              <div className="space-y-5 mb-10">
                <a href="tel:+256393102275" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                    <i className="fi fi-sr-phone-call flex" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50">Call us</div>
                    <div className="font-display font-bold text-lg">+256 393 102 275</div>
                  </div>
                </a>
                <a href="mailto:sales@trinkeninvestiments.co.ug" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all">
                    <i className="fi fi-sr-envelope flex" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50">Email</div>
                    <div className="font-display font-bold text-lg break-all">sales@trinkeninvestiments.co.ug</div>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <i className="fi fi-sr-marker flex" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50">Available in</div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {cities.map((c) => (
                        <span key={c} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-10 shadow-soft"
          >
            <h3 className="font-display font-bold text-2xl mb-6">Send us a message</h3>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input required placeholder="Your name" className="h-12 rounded-xl" />
                <Input required type="email" placeholder="Email" className="h-12 rounded-xl" />
              </div>
              <Input placeholder="Phone (optional)" className="h-12 rounded-xl" />
              <Textarea required placeholder="How can we help?" rows={5} className="rounded-xl resize-none" />
              <Button type="submit" size="lg" className="w-full bg-aqua hover:opacity-90 rounded-xl h-12 text-base font-semibold shadow-glow">
                Send Message <i className="fi fi-sr-paper-plane ml-2 flex" />
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
