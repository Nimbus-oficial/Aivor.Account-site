import { PublicTopicPage } from "../_components/public-topic-page";

export default function ContaPage() {
  return (
    <PublicTopicPage
      eyebrow="Conta"
      title="Uma conta em USDC para usar dolar digital com clareza."
      text="A area de Conta organiza saldo, wallet e movimentacoes em uma experiencia simples, direta e facil de entender."
      points={["Saldo em USDC com leitura simples", "Wallet e movimentacoes em uma unica experiencia", "Fluxos pensados para uso cotidiano"]}
    />
  );
}
