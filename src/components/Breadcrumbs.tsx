import { Link } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Início", to: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.to ? `https://marmorarias.shop${c.to === "/" ? "" : c.to}` : undefined,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-background">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 py-3 text-xs text-muted-foreground">
        {all.map((c, i) => {
          const isLast = i === all.length - 1;
          return (
            <li key={i} className="flex items-center gap-2">
              {i === 0 && <Home className="h-3.5 w-3.5" />}
              {c.to && !isLast ? (
                <Link to={c.to} className="hover:text-gold transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span className={isLast ? "text-foreground" : ""}>{c.label}</span>
              )}
              {!isLast && <ChevronRight className="h-3 w-3 opacity-50" />}
            </li>
          );
        })}
      </ol>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
