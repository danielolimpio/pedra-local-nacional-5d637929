import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { QuoteForm } from "@/components/QuoteForm";
import { PageHero } from "./granito";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import calacatta from "@/assets/marble-calacatta.jpg";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Orçamento Online de Granito e Mármore | Marmoraria PedraNobre" },
      { name: "description", content: "Solicite orçamento de bancada em granito, mármore ou quartzo. Atendimento por WhatsApp, e-mail e telefone. Entrega e instalação em todo o Brasil." },
      { property: "og:title", content: "Solicitar Orçamento — PedraNobre" },
      { property: "og:image", content: calacatta },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <PageLayout>
      <PageHero eyebrow="Atendimento" title="Solicite seu Orçamento" subtitle="Envie as medidas e o tipo de pedra desejada. Retornamos em até 24h com tabela de preço e prazo." image={calacatta} />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="eyebrow">Formulário</p>
            <h2 className="mt-4 font-serif text-4xl">Conte sobre seu projeto</h2>
            <p className="mt-4 text-muted-foreground">Após enviar, você é redirecionado ao nosso WhatsApp com os dados preenchidos para atendimento imediato.</p>
            <div className="mt-10">
              <QuoteForm />
            </div>
          </div>

          <aside className="space-y-8 bg-secondary p-10">
            <div>
              <p className="eyebrow">Contato Direto</p>
              <h3 className="mt-3 font-serif text-2xl">Fale com a PedraNobre</h3>
            </div>
            <Item icon={MessageCircle} label="WhatsApp" value="(12) 98251-9116" href="https://wa.me/5512982519116" />
            <Item icon={Phone} label="Telefone" value="(12) 98251-9116" href="tel:+5512982519116" />
            <Item icon={Mail} label="E-mail" value="contato@pedranobre.com.br" href="mailto:contato@pedranobre.com.br" />
            <Item icon={MapPin} label="Loja & Showroom" value="Av. das Marmorarias, 1500 — São Paulo / SP" />
            <Item icon={Clock} label="Horário" value="Seg a Sex: 8h às 18h • Sáb: 8h às 13h" />

            <div className="border-t border-border pt-6 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Áreas atendidas</p>
              <p className="mt-2">Atendemos todo o Brasil com entrega e instalação. Projetos em São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba, Porto Alegre, Brasília, Salvador e demais capitais.</p>
            </div>
          </aside>
        </div>
      </section>
    </PageLayout>
  );
}

function Item({ icon: Icon, label, value, href }: { icon: React.ElementType; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4">
      <Icon className="mt-0.5 h-5 w-5 text-gold" strokeWidth={1.4} />
      <div>
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{label}</p>
        <p className="mt-1 text-sm text-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-80">{content}</a> : <div>{content}</div>;
}
