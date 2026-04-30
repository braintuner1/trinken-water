export const Marquee = () => {
  const items = [
    "100% Pure",
    "Mineral Balanced",
    "Made in Uganda",
    "Family Trusted",
    "BPA-Free Bottles",
    "Source to Seal",
    "#KinywajiChaMaisha",
  ];
  const list = [...items, ...items];
  return (
    <div className="relative bg-deep text-primary-foreground overflow-hidden border-y border-white/10">
      <div className="flex gap-12 py-5 animate-marquee whitespace-nowrap">
        {list.map((it, i) => (
          <div key={i} className="flex items-center gap-4 text-sm uppercase tracking-[0.3em] font-semibold">
            <i className="fi fi-sr-drop text-accent flex" />
            {it}
          </div>
        ))}
      </div>
    </div>
  );
};
