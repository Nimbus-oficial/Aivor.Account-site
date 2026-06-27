import { PublicTopicPage } from "../_components/public-topic-page";

export default function CartaoPage() {
  return (
    <PublicTopicPage
      eyebrow="Cartao"
      title="Seu saldo digital mais perto do uso no dia a dia."
      text="A experiencia de cartao aproxima a conta Aivor de pagamentos cotidianos, com foco em controle, clareza e simplicidade."
      points={["Cartao virtual vinculado a experiencia Aivor", "Uso do saldo com linguagem de fintech", "Controle visual antes de movimentar"]}
    />
  );
}
