import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-marmorarias.png";

const materiais = [
  { to: "/granito", label: "Granito" },
  { to: "/marmore", label: "Mármore" },
  { to: "/quartzo", label: "Quartzo" },
] as const;

const ambientes = [
  { to: "/cozinha", label: "Cozinha" },
  { to: "/banheiro", label: "Banheiro" },
] as const;

const mainItems = [
  { to: "/", label: "Início" },
  { to: "/precos", label: "Preços" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <Link to="/" className="flex items-center shrink-0">
          <img
            src={logo}
            alt="Marmorarias.shop"
            className="h-12 w-auto object-contain md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-foreground" }}
            inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
            className="text-sm tracking-wide transition-colors"
          >
            Início
          </Link>

          <DropdownMenu label="Materiais" items={materiais} />
          <DropdownMenu label="Ambientes" items={ambientes} />

          {mainItems.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="text-sm tracking-wide transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex shrink-0">
          <a href="tel:+5512982519116" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground">
            <Phone className="h-4 w-4 text-gold" />
            (12) 98251-9116
          </a>
          <Link
            to="/contato"
            className="inline-flex items-center justify-center border border-foreground bg-foreground px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] text-background transition-all hover:bg-gold hover:border-gold hover:text-onyx"
          >
            Orçamento
          </Link>
        </div>

        <Link
          to="/contato"
          className="hidden lg:inline-flex xl:hidden items-center justify-center border border-foreground bg-foreground px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] text-background transition-all hover:bg-gold hover:border-gold hover:text-onyx shrink-0"
        >
          Orçamento
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {[...mainItems, ...materiais, ...ambientes].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-3 text-sm tracking-wide"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center bg-foreground px-5 py-3 text-xs uppercase tracking-[0.2em] text-background"
            >
              Solicitar Orçamento
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function DropdownMenu({
  label,
  items,
}: {
  label: string;
  items: readonly { to: string; label: string }[];
}) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground">
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
        <div className="min-w-[180px] border border-border bg-background p-2 shadow-lg">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeProps={{ className: "text-gold bg-muted/40" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground hover:bg-muted/40" }}
              className="block px-3 py-2 text-sm tracking-wide transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
