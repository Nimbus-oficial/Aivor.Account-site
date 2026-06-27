import { PublicTopicPage } from "../_components/public-topic-page";

export default function InvestimentosPage() {
  return (
    <PublicTopicPage
      eyebrow="Investimentos"
      title="Investimentos com comunicacao simples e controles claros."
      text="A area de Investimentos sera tratada com cuidado editorial, sem promessas financeiras e sem linguagem especulativa."
      points={["Informacao clara antes de qualquer decisao", "Riscos apresentados de forma compreensivel", "Experiencia separada da conta transacional"]}
    />
  );
}
