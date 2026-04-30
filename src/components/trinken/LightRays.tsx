interface LightRaysProps {
  count?: number;
  className?: string;
}

export const LightRays = ({ count = 5, className = "" }: LightRaysProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="light-ray"
          style={{
            left: `${(i / count) * 100 + Math.random() * 10}%`,
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
            opacity: 0.3 + Math.random() * 0.4,
          }}
        />
      ))}
    </div>
  );
};
