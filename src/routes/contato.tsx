import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQ } from "@/components/FAQ";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "./granito";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import calacatta from "@/assets/marble-calacatta.webp";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { property: "og:url", content: "https://marmorarias.shop/contato" },
      { title: "Orçamento Online de Granito, Mármore e Quartzo via WhatsApp" },
      { name: "description", content: "Peça orçamento de bancada em granito, mármore ou quartzo direto no WhatsApp. Atendimento rápido, entrega e instalação em todo o Brasil." },
      { name: "keywords", content: "orçamento marmoraria, orçamento bancada de granito, orçamento mármore, marmoraria whatsapp, marmoraria perto de mim" },
      { property: "og:title", content: "Solicitar Orçamento de Marmoraria — Marmorarias.shop" },
      { property: "og:description", content: "Orçamento rápido de granito, mármore e quartzo via WhatsApp." },
      { property: "og:image", content: `https://marmorarias.shop${calacatta}` },
      { name: "twitter:image", content: `https://marmorarias.shop${calacatta}` },
    ],
    links: [{ rel: "canonical", href: "https://marmorarias.shop/contato" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Marmorarias.shop",
        image: `https://marmorarias.shop${calacatta}`,
        url: "https://marmorarias.shop/contato",
        telephone: "+55-12-98251-9116",
        email: "contato@marmorarias.shop",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. das Marmorarias, 1500",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        openingHoursSpecification: [
          { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
          { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "13:00" },
        ],
        areaServed: "BR",
        sameAs: ["https://instagram.com", "https://facebook.com"],
      }),
    }],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Contato" }]} />
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
              <h3 className="mt-3 font-serif text-2xl">Fale com a Marmorarias.shop</h3>
            </div>
            <Item icon={MessageCircle} label="WhatsApp" value="(12) 98251-9116" href="https://wa.me/5512982519116" />
            <Item icon={Phone} label="Telefone" value="(12) 98251-9116" href="tel:+5512982519116" />
            <Item icon={Mail} label="E-mail" value="contato@marmorarias.shop" href="mailto:contato@marmorarias.shop" />
            <Item icon={MapPin} label="Loja & Showroom" value="Av. das Marmorarias, 1500 — São Paulo / SP" />
            <Item icon={Clock} label="Horário" value="Seg a Sex: 8h às 18h • Sáb: 8h às 13h" />

            <div className="border-t border-border pt-6 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Áreas atendidas</p>
              <p className="mt-2">Atendemos todo o Brasil com entrega e instalação. Projetos em São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba, Porto Alegre, Brasília, Salvador e demais capitais.</p>
            </div>
          </aside>
        </div>
      </section>

      <FAQ
        title="Dúvidas sobre atendimento e orçamento"
        items={[
          { q: "Em quanto tempo recebo o orçamento?", a: "Retornamos em até 24 horas úteis com tabela de preço, sugestão de material e prazo de entrega. Para urgências, contate-nos diretamente pelo WhatsApp (12) 98251-9116." },
          { q: "Quais informações preciso enviar para o orçamento?", a: "Envie as medidas da bancada (largura x profundidade), tipo de aplicação (cozinha, banheiro, churrasqueira), preferência de material e quantidade de recortes (cooktop, cuba, torneira). Fotos do ambiente ajudam." },
          { q: "Vocês fazem visita técnica para medição?", a: "Sim. Após a aprovação do orçamento preliminar, agendamos a visita para o gabarito (medição definitiva). Em São Paulo capital e região não cobramos a visita; outras regiões têm taxa simbólica abatida no pedido." },
          { q: "Quais formas de pagamento vocês aceitam?", a: "PIX (5% de desconto), cartão de crédito em até 6x sem juros e até 12x com juros, transferência bancária e boleto. Para projetos acima de R$ 10.000, condições especiais são negociadas." },
          { q: "Atendem aos finais de semana?", a: "Atendimento comercial: Segunda a Sexta das 8h às 18h, e Sábado das 8h às 13h. WhatsApp responde também nos domingos para informações iniciais." },
          { q: "Qual a garantia oferecida?", a: "5 anos para defeitos de fabricação e instalação. 24 meses para a selagem hidrofugante. Acompanhamento pós-venda gratuito para orientação de manutenção." },
        ]}
      />
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
