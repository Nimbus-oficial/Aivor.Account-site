"use client";

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CreditCard,
  Globe2,
  LockKeyhole,
  Menu,
  ShieldCheck,
  WalletCards,
  X
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";

const navigation = [
  { label: "Conta", href: "/conta" },
  { label: "Cartao", href: "/cartao" },
  { label: "Investimentos", href: "/investimentos" },
  { label: "Seguranca", href: "/seguranca" },
  { label: "Empresa", href: "/empresa" }
];

const accountActions = [
  {
    icon: WalletCards,
    title: "Guardar dolares digitais",
    text: "Mantenha USDC em uma experiencia simples, clara e pensada para uso cotidiano."
  },
  {
    icon: BadgeCheck,
    title: "Acompanhar saldo",
    text: "Veja sua posicao, historico e disponibilidade sem telas tecnicas ou excesso de informacao."
  },
  {
    icon: Globe2,
    title: "Movimentar USDC",
    text: "Envie e receba dolares digitais com fluxos diretos e confirmacoes compreensiveis."
  },
  {
    icon: CreditCard,
    title: "Usar com cartao",
    text: "Aproxime seu saldo digital de uma rotina financeira simples, clara e pronta para o dia a dia."
  },
  {
    icon: ShieldCheck,
    title: "Creditos periodicos opcionais",
    text: "Funcionalidade secundaria, apresentada com cuidado e sem promessa financeira."
  }
];

const reasons = [
  "Simplicidade para entrar e acompanhar",
  "Dolar digital sem linguagem especulativa",
  "Tecnologia invisivel para o usuario",
  "Experiencia de fintech global",
  "Seguranca e transparencia como base"
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#10221b]">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {mobileMenuOpen ? (
        <nav className="fixed inset-x-4 top-24 z-40 grid gap-1 rounded-lg border border-[#dce5dc] bg-[#fbfaf6] p-3 text-sm font-semibold shadow-2xl lg:hidden">
          {navigation.map((item) => (
            <a className="min-h-11 rounded-md px-3 py-3 hover:bg-[#eef4ed]" href={item.href} key={item.label} onClick={() => setMobileMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="min-h-11 rounded-md px-3 py-3" href="/account">
            Entrar
          </a>
          <a className="min-h-11 rounded-md bg-[#0a2f24] px-3 py-3 text-white" href="/account" onClick={() => setMobileMenuOpen(false)}>
            Abrir conta
          </a>
        </nav>
      ) : null}

      <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-8 lg:px-10 lg:pb-28 lg:pt-36">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(circle_at_84%_8%,rgba(10,47,36,0.08),transparent_28%),linear-gradient(180deg,#ffffff_0%,#fbfaf6_64%,rgba(243,246,239,0.72)_100%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#fbfaf6] to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-[#dce5dc]" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-px bg-[#dce5dc] lg:block" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <Reveal className="max-w-3xl">
            <p className="inline-flex min-h-8 items-center rounded-full border border-[#cddbcf] bg-white/70 px-3 text-sm font-semibold text-[#315b4a]">
              Aivor
            </p>
            <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-normal text-[#071f17] sm:text-6xl lg:text-7xl">
              O jeito mais simples de usar dolar digital no dia a dia.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#516158] sm:text-xl">
              Guarde USDC, acompanhe seu saldo e prepare-se para usar uma experiencia financeira global com a Aivor.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href="/account">Abrir conta</PrimaryLink>
              <SecondaryLink href="#conta">Conhecer a Aivor</SecondaryLink>
            </div>
          </Reveal>

          <OpenAccountPanel />
        </div>
      </section>

      <section className="border-y border-[#dce5dc] bg-[#f3f6ef] px-4 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0a2f24]">Cambio digital</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight text-[#071f17] sm:text-5xl">
              Converta reais em USDC com clareza antes de movimentar.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#173b24]">
              Veja a estimativa em tempo real, inverta a direcao da conversao e entenda o valor de referencia sem telas tecnicas.
            </p>
            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              <DetailPill title="Cotacao" text="Atualizada no navegador" />
              <DetailPill title="Destino" text="BRL ou USDC" />
              <DetailPill title="Uso" text="Conta e cartao" />
            </div>
          </Reveal>
          <AccountPreview />
        </div>
      </section>

      <section className="border-y border-[#dce5dc] bg-white px-4 py-16 sm:px-8 lg:px-10" id="conta">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionIntro eyebrow="O que e" title="Dolar digital com cara de conta, nao de protocolo." />
          <Reveal delay={0.08}>
            <p className="max-w-3xl text-xl leading-9 text-[#516158]">
              Aivor e uma conta digital em USDC para quem quer acessar dolar digital com clareza, seguranca e simplicidade. A experiencia mostra o essencial: saldo, wallet, movimentacoes e uso financeiro diario, sem expor complexidade desnecessaria.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fbfaf6] px-4 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Na pratica" title="O que voce pode fazer com a Aivor." />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {accountActions.map((item, index) => (
              <FeatureCard {...item} delay={index * 0.04} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#08241b] px-4 py-20 text-white sm:px-8 lg:px-10 lg:py-28" id="empresa">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro eyebrow="Por que Aivor" title="Uma experiencia financeira global, feita para parecer simples." dark />
          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <Reveal className="flex min-h-24 items-center gap-4 border-t border-white/15 py-5" delay={index * 0.04} key={reason}>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#7aff78] text-[#08241b]">
                  <ArrowRight size={16} />
                </span>
                <p className="font-semibold leading-6 text-[#e9f4ea]">{reason}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-8 lg:px-10 lg:py-28" id="cartao">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <CardMockup />
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#315b4a]">Cartao</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[#071f17] sm:text-5xl">
              O saldo digital mais perto do uso no dia a dia.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#516158]">
              Cartao virtual para transformar seu saldo em uma experiencia de uso no dia a dia, com a mesma clareza da conta e foco em controle para cada movimentacao.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#fbfaf6] px-4 py-20 sm:px-8 lg:px-10 lg:py-28" id="investimentos">
        <div className="mx-auto grid max-w-7xl gap-10 border-y border-[#cddbcf] py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionIntro eyebrow="Investimentos" title="Uma area preparada para evoluir com calma." />
          <Reveal delay={0.08}>
            <p className="max-w-3xl text-xl leading-9 text-[#516158]">
              A navegacao ja reserva espaco para Investimentos. Esta experiencia sera tratada em uma etapa propria, com linguagem simples, controles claros e sem promessas financeiras.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#dce5dc] bg-[#f3f6ef] px-4 py-20 sm:px-8 lg:px-10 lg:py-28" id="seguranca">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionIntro eyebrow="Seguranca" title="Protecao de conta sem transformar seguranca em complexidade." />
          <div className="grid gap-4 md:grid-cols-2">
            <SecurityItem icon={WalletCards} title="Wallet" text="Estrutura de conta preparada para organizar saldo e movimentacoes em USDC." />
            <SecurityItem icon={LockKeyhole} title="Autenticacao" text="Acesso protegido e fluxos de confirmacao para operacoes sensiveis." />
            <SecurityItem icon={ShieldCheck} title="Protecao de conta" text="Controles internos para reduzir risco operacional e dar previsibilidade ao usuario." />
            <SecurityItem icon={Building2} title="Transparencia" text="Historico, status e informacoes importantes apresentados de forma direta." />
          </div>
        </div>
      </section>

      <section className="bg-[#fbfaf6] px-4 py-20 sm:px-8 lg:px-10 lg:py-28" id="abrir-conta">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 border-y border-[#cddbcf] py-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#315b4a]">Aivor</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#071f17] sm:text-5xl">
              Abra sua conta digital em USDC.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#516158]">
              Guarde, acompanhe e movimente dolares digitais com uma experiencia limpa, segura e direta.
            </p>
          </div>
          <PrimaryLink href="/account">Abrir conta</PrimaryLink>
        </div>
      </section>

      <footer className="bg-[#071f17] px-4 py-10 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.8fr_0.7fr] md:items-end">
          <div>
            <Image alt="Aivor" className="h-auto w-28 brightness-0 invert" height={192} src="/brand/aivor-logo-560x192-pine.svg" width={560} />
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#b9c8bd]">
              Conta digital em USDC com experiencia simples, moderna e segura.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm font-semibold text-[#dce8df] md:justify-center">
            {navigation.map((item) => (
              <a className="hover:text-white" href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="md:justify-self-end">
            <p className="text-sm font-semibold text-white">Fale com a gente</p>
            <a className="mt-3 inline-flex min-h-11 items-center rounded-full border border-white/18 px-4 text-sm font-semibold text-[#dce8df] transition hover:border-white/36 hover:text-white" href="tel:+5500000000000">
              +55 00 00000-0000
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Header({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean; setMobileMenuOpen: (open: boolean) => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between rounded-full border border-[#d7e2d7]/80 bg-[rgba(255,255,255,0.78)] px-3 shadow-[0_18px_50px_rgba(20,46,34,0.10)] backdrop-blur-2xl sm:px-4">
        <a className="flex min-h-12 items-center gap-3 px-2" href="/" aria-label="Aivor">
          <Image alt="Aivor" className="h-auto w-28" height={192} priority src="/brand/aivor-logo-560x192-pine.svg" width={560} />
        </a>
        <nav className="hidden items-center gap-1 text-sm font-semibold text-[#17382b] lg:flex">
          {navigation.map((item) => (
            <a className="inline-flex min-h-11 items-center rounded-full px-4 transition hover:bg-[#eef4ed]" href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <a className="inline-flex min-h-11 items-center px-4 text-sm font-semibold text-[#17382b]" href="/account">
            Entrar
          </a>
          <a className="inline-flex min-h-11 items-center rounded-full bg-[#7aff78] px-5 text-sm font-semibold text-[#061b14] transition hover:bg-[#a1ff9d]" href="/account">
            Abrir conta
          </a>
          <a aria-label="Abrir conta" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0a2f24] text-white transition hover:bg-[#164b39]" href="/account">
            <ArrowUpRight size={18} />
          </a>
        </div>
        <button aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"} className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0a2f24] text-white lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} type="button">
          {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
    </header>
  );
}

function AccountPreview() {
  const [amount, setAmount] = useState("1000");
  const [direction, setDirection] = useState<"BRL_TO_USDC" | "USDC_TO_BRL">("BRL_TO_USDC");
  const [brlPerUsdc, setBrlPerUsdc] = useState(5.5);
  const [rateLabel, setRateLabel] = useState("cotacao de referencia");

  useEffect(() => {
    let active = true;

    fetch("https://open.er-api.com/v6/latest/USD")
      .then((response) => response.json())
      .then((data: { rates?: { BRL?: number } }) => {
        if (active && typeof data.rates?.BRL === "number") {
          setBrlPerUsdc(data.rates.BRL);
          setRateLabel("cotacao atual");
        }
      })
      .catch(() => {
        if (active) {
          setRateLabel("cotacao de referencia");
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const numericAmount = Number(amount.replace(",", "."));
  const converted = useMemo(() => {
    if (!Number.isFinite(numericAmount)) {
      return 0;
    }

    return direction === "BRL_TO_USDC" ? numericAmount / brlPerUsdc : numericAmount * brlPerUsdc;
  }, [brlPerUsdc, direction, numericAmount]);

  const sourceLabel = direction === "BRL_TO_USDC" ? "BRL" : "USDC";
  const targetLabel = direction === "BRL_TO_USDC" ? "USDC" : "BRL";

  return (
    <Reveal className="relative mx-auto w-full max-w-lg lg:justify-self-end" delay={0.1}>
      <div className="rounded-[28px] border border-[#dce5dc] bg-white/82 p-5 shadow-[0_30px_90px_rgba(20,46,34,0.12)] backdrop-blur-xl">
        <div className="rounded-[22px] bg-[#08241b] p-5 text-white shadow-inner shadow-white/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#b9c8bd]">Conversor para USDC</p>
              <p className="mt-2 text-4xl font-semibold">{formatConverted(converted, targetLabel)}</p>
            </div>
            <button
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#7aff78] px-4 text-sm font-semibold text-[#08241b] transition hover:bg-[#a1ff9d]"
              onClick={() => setDirection((value) => (value === "BRL_TO_USDC" ? "USDC_TO_BRL" : "BRL_TO_USDC"))}
              type="button"
            >
              Inverter
            </button>
          </div>
          <div className="mt-8 grid gap-3">
            <label className="block rounded-xl border border-white/18 bg-white/6 p-4">
              <span className="text-xs text-[#b9c8bd]">Valor em {sourceLabel}</span>
              <div className="mt-2 flex items-center gap-3">
                <input
                  className="min-w-0 flex-1 bg-transparent text-2xl font-semibold text-white outline-none"
                  inputMode="decimal"
                  onChange={(event) => setAmount(event.target.value)}
                  value={amount}
                />
                <span className="rounded-full border border-white/16 px-3 py-1 text-xs font-semibold text-[#dce8df]">{sourceLabel}</span>
              </div>
            </label>
            <div className="grid grid-cols-2 gap-3">
              <MiniMetric label={rateLabel} value={`1 USDC = R$ ${brlPerUsdc.toFixed(2)}`} />
              <MiniMetric label="Destino" value={targetLabel} />
            </div>
          </div>
        </div>
        <div className="mt-4 grid gap-3">
          <PreviewRow label="Receber USDC" value="Simples" />
          <PreviewRow label="Enviar" value="Disponivel" />
          <PreviewRow label="Cartao virtual" value="Ativo" />
        </div>
      </div>
    </Reveal>
  );
}

function OpenAccountPanel() {
  return (
    <Reveal className="relative mx-auto w-full max-w-md lg:justify-self-end" delay={0.1}>
      <div className="relative overflow-hidden rounded-[28px] border border-[#dce5dc] bg-white/88 p-5 shadow-[0_24px_70px_rgba(20,46,34,0.12)] backdrop-blur-xl">
        <div className="absolute inset-x-5 top-5 h-20 rounded-[22px] bg-[#08241b]" aria-hidden="true" />
        <div className="relative ml-auto mr-2 mt-6 aspect-[1.58/1] w-[68%] rounded-[18px] border border-white/16 bg-[#0a2f24] p-5 text-white shadow-[0_18px_50px_rgba(8,36,27,0.22)]">
          <div className="flex items-center justify-between">
            <Image alt="Aivor" className="h-auto w-20 brightness-0 invert" height={192} src="/brand/aivor-logo-560x192-pine.svg" width={560} />
            <span className="h-7 w-10 rounded-full border border-white/22" />
          </div>
          <p className="mt-14 text-xs text-[#b9c8bd]">USDC account</p>
        </div>
        <div className="relative mt-8">
          <h2 className="max-w-sm text-2xl font-semibold leading-tight text-[#071f17]">
            Abra sua conta Aivor e use USDC com simplicidade.
          </h2>
          <label className="mt-6 block rounded-full bg-[#f3f6ef] px-5 py-4">
            <span className="sr-only">Email</span>
            <input className="w-full bg-transparent text-lg font-semibold text-[#10221b] outline-none placeholder:text-[#718078]" placeholder="Digite seu email" type="email" />
          </label>
          <a className="mt-3 flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#0a2f24] px-6 font-semibold text-white transition hover:bg-[#164b39]" href="/account">
            Abrir conta
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

function DetailPill({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-[#dce5dc] bg-white/72 p-4 shadow-[0_12px_36px_rgba(10,47,36,0.06)] backdrop-blur">
      <p className="text-sm font-semibold text-[#0a2f24]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-[#315b4a]">{text}</p>
    </div>
  );
}

function CardMockup() {
  return (
    <Reveal className="relative">
      <div className="aspect-[1.58/1] w-full max-w-xl rounded-[26px] bg-[#08241b] p-8 text-white shadow-[0_28px_70px_rgba(8,36,27,0.22)]">
        <div className="flex items-center justify-between">
          <Image alt="Aivor" className="h-auto w-24 brightness-0 invert" height={192} src="/brand/aivor-logo-560x192-pine.svg" width={560} />
          <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-[#dce8df]">Virtual</span>
        </div>
        <div className="mt-16">
          <p className="text-sm text-[#b9c8bd]">Aivor</p>
          <p className="mt-3 text-2xl font-semibold tracking-normal">USDC card experience</p>
        </div>
        <div className="mt-8 h-1.5 w-20 rounded-full bg-[#7aff78]" />
      </div>
    </Reveal>
  );
}

function SectionIntro({ eyebrow, title, dark = false }: { eyebrow: string; title: string; dark?: boolean }) {
  return (
    <Reveal>
      <p className={`text-sm font-semibold uppercase tracking-[0.14em] ${dark ? "text-[#7aff78]" : "text-[#315b4a]"}`}>{eyebrow}</p>
      <h2 className={`mt-5 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl ${dark ? "text-white" : "text-[#071f17]"}`}>{title}</h2>
    </Reveal>
  );
}

function FeatureCard({ icon: Icon, title, text, delay }: { icon: typeof WalletCards; title: string; text: string; delay: number }) {
  return (
    <Reveal className="min-h-64 border border-[#dce5dc] bg-white p-6 shadow-[0_14px_42px_rgba(20,46,34,0.05)]" delay={delay}>
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e7f2e7] text-[#0a2f24]">
        <Icon size={20} />
      </div>
      <h3 className="mt-8 text-xl font-semibold text-[#071f17]">{title}</h3>
      <p className="mt-3 leading-7 text-[#516158]">{text}</p>
    </Reveal>
  );
}

function SecurityItem({ icon: Icon, title, text }: { icon: typeof WalletCards; title: string; text: string }) {
  return (
    <Reveal className="border-t border-[#cddbcf] pt-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0a2f24]">
          <Icon size={19} />
        </span>
        <h3 className="text-lg font-semibold text-[#071f17]">{title}</h3>
      </div>
      <p className="mt-4 leading-7 text-[#516158]">{text}</p>
    </Reveal>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/12 bg-white/6 p-4">
      <p className="text-xs text-[#b9c8bd]">{label}</p>
      <p className="mt-2 font-semibold">{value}</p>
    </div>
  );
}

function PreviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex min-h-14 items-center justify-between rounded-2xl bg-[#f3f6ef] px-4">
      <span className="font-semibold text-[#10221b]">{label}</span>
      <span className="text-sm text-[#516158]">{value}</span>
    </div>
  );
}

function formatConverted(value: number, currency: "BRL" | "USDC") {
  if (currency === "BRL") {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 2
    }).format(value);
  }

  return `${new Intl.NumberFormat("pt-BR", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  }).format(value)} USDC`;
}

function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0a2f24] px-6 font-semibold text-white transition hover:bg-[#164b39]" href={href}>
      {children}
      <ArrowRight className="transition group-hover:translate-x-1" size={17} />
    </a>
  );
}

function SecondaryLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#cddbcf] bg-white px-6 font-semibold text-[#0a2f24] transition hover:bg-[#f3f6ef]" href={href}>
      {children}
    </a>
  );
}

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      transition={{ duration: 0.52, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.22 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
