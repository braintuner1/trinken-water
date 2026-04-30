import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import aisha from "@/assets/avatar-aisha.jpg";
import david from "@/assets/avatar-david.jpg";
import sarah from "@/assets/avatar-sarah.jpg";

const reviews = [
  {
    name: "Aisha Nabagalla",
    title: "Customer · Kampala",
    handle: "aishan",
    avatar: aisha,
    text: "The taste is so clean and crisp. Trinken has become our family's only choice for drinking water.",
  },
  {
    name: "David Okello",
    title: "Marathon Runner",
    handle: "davidokello",
    avatar: david,
    text: "I trust Trinken on every long run. Refreshing, balanced and easy on the stomach.",
  },
  {
    name: "Sarah Kemigisha",
    title: "Restaurant Owner · Mbarara",
    handle: "sarahkemigisha12",
    avatar: sarah,
    text: "Our customers always notice the quality. Trinken is the perfect partner for our restaurant.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-28 bg-secondary/40 relative overflow-hidden">
      <div className="absolute -left-20 top-1/2 w-72 h-72 bg-primary/10 blob blur-3xl" />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs uppercase tracking-widest font-semibold mb-5">
            <i className="fi fi-sr-heart flex" />
            Testimonials
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl leading-tight">
            Loved by <span className="text-gradient italic">thousands</span> across Uganda
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex flex-col items-center gap-6"
            >
              <ProfileCard
                avatarUrl={r.avatar}
                miniAvatarUrl={r.avatar}
                name={r.name}
                title={r.title}
                handle={r.handle}
                status="Approved"
                contactText="Contact"
                onContactClick={() => window.open("https://x.com/TrinkenUG", "_blank")}
              />
              <p className="text-foreground/75 text-base leading-relaxed text-center max-w-xs italic">
                "{r.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
