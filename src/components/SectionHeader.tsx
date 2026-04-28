interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, description, align = "center" }: Props) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className="eyebrow flex items-center gap-3 justify-center">
          {align === "center" && <span className="gold-rule" />}
          {eyebrow}
          {align === "center" && <span className="gold-rule" />}
        </div>
      )}
      <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>}
    </div>
  );
}
