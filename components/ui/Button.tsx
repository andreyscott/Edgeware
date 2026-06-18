import Link from "next/link";
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  href?: undefined;
}

interface ButtonAsLink extends BaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-gold hover:bg-brand-gold-dark text-white shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5",
  secondary:
    "bg-brand-navy hover:bg-brand-navy-light text-white shadow-navy hover:shadow-navy-lg hover:-translate-y-0.5",
  outline:
    "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white hover:-translate-y-0.5",
  ghost:
    "text-brand-navy hover:text-brand-gold hover:bg-brand-cream",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs font-semibold rounded-lg gap-1.5",
  md: "px-6 py-3 text-sm font-semibold rounded-xl gap-2",
  lg: "px-8 py-4 text-base font-bold rounded-xl gap-2.5",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center transition-all duration-200 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
