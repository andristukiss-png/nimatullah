import { notFound } from "next/navigation";
import { isLocale, principles } from "@/lib/site";
import { PageShell } from "@/components/site-chrome";

export default async function PrinciplesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ar = locale === "ar";

  return (
    <PageShell locale={locale}>
      <main className="innerPage">
        <section className="pageHero compact">
          <p className="eyebrow">{ar ? "المبادئ" : "PRINCIPLES"}</p>
          <h1>{ar ? "الثقة قبل النمو." : "Trust before growth."}</h1>
          <p>{ar ? "هذه المبادئ ليست شعارات تسويقية؛ بل حدود تصميمية وتشغيلية للمشروع." : "These are not marketing slogans. They are intended as product and operating constraints for the project."}</p>
        </section>
        <section className="principlesPageGrid">
          {principles[locale].map(([title, body], i) => (
            <article key={title}>
              <span>0{i + 1}</span>
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  );
}
