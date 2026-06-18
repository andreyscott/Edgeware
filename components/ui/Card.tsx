interface CardProps {
  icon?: string;
  number?: string;
  title: string;
  description: string;
  variant?: "default" | "gold" | "dark";
  className?: string;
}

export default function Card({
  icon,
  number,
  title,
  description,
  variant = "default",
  className = "",
}: CardProps) {
  const base =
    "relative rounded-2xl p-7 transition-all duration-300 group cursor-default";

  const variants = {
    default:
      "bg-white border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1",
    gold: "bg-brand-navy border border-brand-gold/20 shadow-navy hover:shadow-gold hover:-translate-y-1",
    dark: "bg-brand-navy-dark border border-white/10 shadow-navy hover:shadow-navy-lg hover:-translate-y-1",
  };

  const titleColor = variant === "default" ? "text-brand-navy" : "text-white";
  const descColor = variant === "default" ? "text-brand-muted" : "text-white/60";
  const numberColor = "text-brand-gold";

  return (
    <div className={`${base} ${variants[variant]} ${className}`}>
      {/* Gold top accent line */}
      <div className="absolute top-0 left-7 right-7 h-0.5 bg-brand-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {number && (
        <span className={`block font-display font-bold text-4xl mb-4 ${numberColor}`}>
          {number}
        </span>
      )}
      {icon && (
        <span className="block text-3xl mb-4">{icon}</span>
      )}
      <h3 className={`font-display font-bold text-xl mb-3 ${titleColor}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${descColor}`}>{description}</p>
    </div>
  );
}
