import { PublicTopicPage } from "../_components/public-topic-page";

export default function SegurancaPage() {
  return (
    <PublicTopicPage
      eyebrow="Seguranca"
      title="Protecao de conta sem transformar seguranca em complexidade."
      text="A seguranca da Aivor combina autenticacao, protecao de conta e transparencia operacional sem expor detalhes tecnicos desnecessarios."
      points={["Acesso protegido para a conta", "Controles internos para operacoes sensiveis", "Historico e status apresentados com clareza"]}
    />
  );
}
