import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

type PublicTopicPageProps = {
  eyebrow: string;
  title: string;
  text: string;
  points: string[];
};

export function PublicTopicPage({ eyebrow, title, text, points }: PublicTopicPageProps) {
  return (
    <main className="min-h-screen bg-[#fbfaf6] text-[#10221b]">
      <header className="px-4 pt-5 sm:px-8 lg:px-10">
        <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between rounded-full border border-[#d7e2d7]/80 bg-[rgba(255,255,255,0.78)] px-4 shadow-[0_18px_50px_rgba(20,46,34,0.10)] backdrop-blur-2xl">
          <Link className="flex min-h-12 items-center" href="/" aria-label="Aivor">
            <Image alt="Aivor" className="h-auto w-28" height={192} priority src="/brand/aivor-logo-560x192-pine.svg" width={560} />
          </Link>
          <Link className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0a2f24] px-5 text-sm font-semibold text-white transition hover:bg-[#164b39]" href="/">
            <ArrowLeft size={16} />
            Voltar
          </Link>
        </div>
      </header>

      <section className="px-4 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#315b4a]">{eyebrow}</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.02] text-[#071f17] sm:text-6xl">{title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#516158]">{text}</p>
            <Link className="mt-9 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#0a2f24] px-6 font-semibold text-white transition hover:bg-[#164b39]" href="/account">
              Abrir conta
              <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid gap-4">
            {points.map((point, index) => (
              <article className="rounded-[22px] border border-[#dce5dc] bg-white/82 p-6 shadow-[0_14px_42px_rgba(20,46,34,0.05)]" key={point}>
                <span className="text-sm font-semibold text-[#315b4a]">0{index + 1}</span>
                <p className="mt-4 text-xl font-semibold leading-7 text-[#071f17]">{point}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
