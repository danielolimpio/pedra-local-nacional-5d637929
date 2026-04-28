import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "./SectionHeader";

export type FAQItem = { q: string; a: string };

export function FAQ({ items, eyebrow = "Dúvidas Frequentes", title = "Perguntas frequentes", description }: { items: FAQItem[]; eyebrow?: string; title?: string; description?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />
      <Accordion type="single" collapsible className="mt-12">
        {items.map((it, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
            <AccordionTrigger className="text-left font-serif text-lg hover:text-gold">{it.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">{it.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
