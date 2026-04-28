import { Link } from "@tanstack/react-router";

interface Props {
  image: string;
  name: string;
  category: string;
  price: string;
  to?: string;
  alt?: string;
}

export function StoneCard({ image, name, category, price, to = "/contato", alt }: Props) {
  return (
    <Link
      to={to}
      className="group block overflow-hidden bg-card transition-all hover:shadow-elegant"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={image}
          alt={alt ?? `${name} — ${category}`}
          loading="lazy"
          width={1280}
          height={1280}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-onyx/70 to-transparent" />
        <span className="absolute left-4 top-4 bg-background/85 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground">{category}</span>
      </div>
      <div className="flex items-end justify-between gap-4 px-5 py-5">
        <div>
          <h3 className="font-serif text-xl">{name}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">A partir de {price}/m²</p>
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-gold transition-transform group-hover:translate-x-1">Ver →</span>
      </div>
    </Link>
  );
}
