import { notFound } from "next/navigation";
import { isLocale } from "@/lib/site";
import { PageShell } from "@/components/site-chrome";

export default async function InstitutionalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ar = locale === "ar";

  return (
    <PageShell locale={locale}>
      <main className="innerPage">
        <section className="pageHero institutionalPageHero">
          <p className="eyebrow">{ar ? "للمؤسسات" : "INSTITUTIONAL"}</p>
          <h1>{ar ? "نبني البنية الرقمية للخير الموثوق." : "Building the digital layer for trustworthy good."}</h1>
          <p>{ar ? "المشروع في مرحلة مبكرة. نرحب مستقبلًا بالحوار مع المؤسسات والجمعيات الإنسانية والشركات والعائلات الخيرية وأصحاب الخبرات الذين يشاركون هذه المبادئ." : "The project is at an early stage. Future dialogue is intended for foundations, humanitarian organizations, companies, philanthropic families and qualified professionals who share these principles."}</p>
          <a className="button primary darkText" href="mailto:info@nimatullah.com">{ar ? "info@nimatullah.com" : "Contact Nimatullah"}</a>
        </section>
        <section className="institutionTypes">
          {(ar ? [
            ["المؤسسات", "برامج خير طويلة الأمد وشفافة."],
            ["المنظمات", "تنفيذ مرخص وخبرة ميدانية."],
            ["الشركات", "وقت ومهارات وأصول وخدمات، وليس المال فقط."],
            ["العائلات الخيرية", "إرث طويل الأمد مع احترام خيار العطاء المجهول."],
          ] : [
            ["Foundations", "Long-term, transparent programs of good."],
            ["Organizations", "Licensed implementation and field expertise."],
            ["Companies", "Time, skills, assets and services—not only money."],
            ["Philanthropic families", "Long-term legacy with respect for anonymous giving."],
          ]).map(([title, body], i) => (
            <article key={title}><span>0{i+1}</span><h2>{title}</h2><p>{body}</p></article>
          ))}
        </section>
      </main>
    </PageShell>
  );
}
