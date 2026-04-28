import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-marmorarias.webp";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-onyx text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="Marmorarias.shop" className="h-16 w-auto object-contain bg-cream/95 p-2" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/70">
            Granito, mármore e quartzo sob medida para cozinhas, banheiros, churrasqueiras e
            projetos de alta arquitetura em todo o Brasil.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="https://instagram.com" aria-label="Instagram" className="rounded-full border border-cream/20 p-2 transition-colors hover:border-gold hover:text-gold">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://facebook.com" aria-label="Facebook" className="rounded-full border border-cream/20 p-2 transition-colors hover:border-gold hover:text-gold">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://wa.me/5512982519116" aria-label="WhatsApp" className="rounded-full border border-cream/20 p-2 transition-colors hover:border-gold hover:text-gold">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold">Materiais</h4>
          <ul className="mt-6 space-y-3 text-sm text-cream/70">
            <li><Link to="/granito" className="hover:text-gold">Granito São Gabriel</Link></li>
            <li><Link to="/granito" className="hover:text-gold">Granito Branco Siena</Link></li>
            <li><Link to="/marmore" className="hover:text-gold">Mármore Carrara</Link></li>
            <li><Link to="/marmore" className="hover:text-gold">Mármore Calacatta Gold</Link></li>
            <li><Link to="/quartzo" className="hover:text-gold">Quartzo Branco</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold">Aplicações</h4>
          <ul className="mt-6 space-y-3 text-sm text-cream/70">
            <li><Link to="/cozinha" className="hover:text-gold">Bancada de Cozinha</Link></li>
            <li><Link to="/banheiro" className="hover:text-gold">Bancada de Banheiro</Link></li>
            <li><Link to="/cozinha" className="hover:text-gold">Churrasqueira Gourmet</Link></li>
            <li><Link to="/galeria" className="hover:text-gold">Pisos e Soleiras</Link></li>
            <li><Link to="/precos" className="hover:text-gold">Tabela de Preços</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold">Contato</h4>
          <ul className="mt-6 space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 text-gold" />Av. das Marmorarias, 1500 — São Paulo / SP</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" />(12) 98251-9116</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" />contato@marmorarias.shop</li>
          </ul>
          <p className="mt-6 text-xs text-cream/50">Atendemos todo o Brasil — projetos sob medida com entrega e instalação.</p>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © Copyright {new Date().getFullYear()} | Marmorarias Shop | Todos os direitos reservados | Desenvolvido por{" "}
        <a
          href="https://danielolimpio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:underline"
        >
          Daniel Olímpio
        </a>
      </div>
    </footer>
  );
}
