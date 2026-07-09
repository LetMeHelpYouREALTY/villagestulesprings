type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({ eyebrow, title, description, align = "center", light = false }: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-12 max-w-3xl ${alignment}`}>
      <p className="luxury-eyebrow mb-4">{eyebrow}</p>
      <h2
        className={`font-display text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl ${
          light ? "text-luxury-ivory" : "text-luxury-charcoal"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${light ? "text-luxury-cream/80" : "text-luxury-muted"}`}
        >
          {description}
        </p>
      ) : null}
      <div className={`luxury-divider mt-8 ${align === "center" ? "mx-auto w-24" : "w-24"}`} />
    </div>
  );
}
