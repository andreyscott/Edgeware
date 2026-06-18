"use client";

import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: ReactNode;
  /** Delay before animation starts (ms) */
  delay?: number;
  /** Animation duration (ms) */
  duration?: number;
  /** Direction the element slides in from */
  direction?: Direction;
  /** Distance to travel (px) */
  distance?: number;
  /** Re-animate each time the element enters the viewport */
  repeat?: boolean;
  className?: string;
  style?: CSSProperties;
  /** Intersection threshold 0–1 */
  threshold?: number;
}

const TRANSLATE: Record<Direction, string> = {
  up:    "translateY(VAR)",
  down:  "translateY(-VAR)",
  left:  "translateX(VAR)",
  right: "translateX(-VAR)",
  none:  "none",
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 600,
  direction = "up",
  distance = 28,
  repeat = false,
  className,
  style,
  threshold = 0.15,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (!repeat) observer.unobserve(el);
        } else if (repeat) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [repeat, threshold]);

  const hiddenTransform =
    direction === "none"
      ? "none"
      : TRANSLATE[direction].replace("VAR", `${distance}px`);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : hiddenTransform,
        transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
