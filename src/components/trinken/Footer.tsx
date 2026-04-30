import trinkenLogo from "@/assets/trinken-logo.png";

const socials = [
  { icon: "fi-brands-x", href: "https://x.com/TrinkenUG", label: "X" },
  { icon: "fi-brands-facebook", href: "https://x.com/TrinkenUG", label: "Facebook" },
  { icon: "fi-brands-instagram", href: "https://x.com/TrinkenUG", label: "Instagram" },
];

export const Footer = () => {
  return (
    <footer className="bg-deep text-primary-foreground pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-glow">
                <img src={trinkenLogo} alt="Trinken Water logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-display font-extrabold text-xl">Trinken</div>
                <div className="text-[10px] tracking-[0.2em] text-accent uppercase">Water</div>
              </div>
            </div>
            <p className="text-white/60 max-w-md">
              Trinken Water  manufactured by Trinken Investments
              Limited. Pure, mineral-balanced hydration for every Ugandan.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full glass-dark hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
                  aria-label={s.label}
                >
                  <i className={`fi ${s.icon} flex`} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-white/60">
              {["About", "Products", "Process", "Gallery", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-accent transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>+256 393 102 275</li>
              <li className="break-all">sales@trinkeninvestiments.co.ug</li>
              <li>Kampala, Uganda</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <div>© {new Date().getFullYear()} Trinken Investments Limited. All rights reserved.</div>
          <div className="font-display tracking-widest text-accent text-xs uppercase">#KinywajiChaMaisha</div>
        </div>
      </div>
    </footer>
  );
};
