interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  label?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  light = false,
  label,
}: SectionHeaderProps) {
  const textAlign = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${textAlign} mb-12 md:mb-16`}>
      {label && (
        <span className="inline-block text-brand-gold font-semibold text-xs tracking-[0.2em] uppercase mb-3">
          {label}
        </span>
      )}
      <h2
        className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 ${
          light ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
        <span className="block w-12 h-1 bg-brand-gold rounded-full mt-4" />
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed mt-4 ${
            light ? "text-white/70" : "text-brand-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
