import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  telefone: z.string().trim().min(8, "Telefone inválido").max(20),
  email: z.string().trim().email("E-mail inválido").max(255),
  cidade: z.string().trim().min(2, "Informe sua cidade").max(100),
  material: z.string().trim().min(2, "Selecione um material").max(80),
  aplicacao: z.string().trim().min(2, "Selecione a aplicação").max(80),
  mensagem: z.string().trim().max(1000).optional().or(z.literal("")),
});

export function QuoteForm() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries()) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Verifique os campos");
      return;
    }
    setLoading(true);
    const msg = `Olá! Quero um orçamento.%0A%0ANome: ${encodeURIComponent(parsed.data.nome)}%0ATelefone: ${encodeURIComponent(parsed.data.telefone)}%0AE-mail: ${encodeURIComponent(parsed.data.email)}%0ACidade: ${encodeURIComponent(parsed.data.cidade)}%0AMaterial: ${encodeURIComponent(parsed.data.material)}%0AAplicação: ${encodeURIComponent(parsed.data.aplicacao)}%0AObs: ${encodeURIComponent(parsed.data.mensagem ?? "")}`;
    window.open(`https://wa.me/5512982519116?text=${msg}`, "_blank");
    toast.success("Redirecionando para o WhatsApp...");
    setLoading(false);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field name="nome" label="Nome completo" placeholder="Seu nome" />
        <Field name="telefone" label="Telefone / WhatsApp" placeholder="(12) 98251-9116" />
        <Field name="email" label="E-mail" type="email" placeholder="voce@email.com" />
        <Field name="cidade" label="Cidade / Estado" placeholder="Ex: São Paulo / SP" />
        <Select name="material" label="Material desejado" options={[
          "Granito São Gabriel", "Granito Branco Siena", "Mármore Carrara",
          "Mármore Calacatta Gold", "Quartzo Branco", "Outro"
        ]} />
        <Select name="aplicacao" label="Aplicação" options={[
          "Bancada de cozinha", "Bancada de banheiro", "Pia esculpida",
          "Churrasqueira gourmet", "Piso / soleira", "Escada", "Outra"
        ]} />
      </div>
      <div>
        <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Mensagem (opcional)</label>
        <textarea
          name="mensagem"
          rows={4}
          maxLength={1000}
          placeholder="Conte sobre seu projeto, medidas aproximadas..."
          className="w-full border border-border bg-card px-4 py-3 text-sm focus:border-gold focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-background transition-colors hover:bg-gold hover:text-onyx md:w-auto"
      >
        {loading ? "Enviando..." : "Solicitar Orçamento"}
      </button>
    </form>
  );
}

function Field({ name, label, type = "text", placeholder }: { name: string; label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        maxLength={255}
        className="w-full border border-border bg-card px-4 py-3 text-sm focus:border-gold focus:outline-none"
      />
    </div>
  );
}

function Select({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <select name={name} className="w-full border border-border bg-card px-4 py-3 text-sm focus:border-gold focus:outline-none">
        <option value="">Selecione...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
