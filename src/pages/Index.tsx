import { Navbar } from "@/components/trinken/Navbar";
import { Hero } from "@/components/trinken/Hero";
import { Marquee } from "@/components/trinken/Marquee";
import { About } from "@/components/trinken/About";
import { Products } from "@/components/trinken/Products";
import { Process } from "@/components/trinken/Process";
import { Gallery } from "@/components/trinken/Gallery";
import { Testimonials } from "@/components/trinken/Testimonials";
import { Contact } from "@/components/trinken/Contact";
import { Footer } from "@/components/trinken/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Trinken Water  Pure Drinking Water | Made in Uganda";
    const desc = "Trinken Water: pure, mineral-balanced bottled water manufactured by Trinken Investments Ltd. Available across Uganda.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement('meta'); m.setAttribute('name', 'description'); document.head.appendChild(m); }
    m.setAttribute('content', desc);
  }, []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Products />
      <Process />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
