import { notFound } from "next/navigation";
import { isLocale } from "@/lib/site";
import { PageShell } from "@/components/site-chrome";

export default async function StoriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ar = locale === "ar";

  return (
    <PageShell locale={locale}>
      <main className="innerPage">
        <section className="pageHero">
          <p className="eyebrow">{ar ? "قصص الخير" : "STORIES OF GOOD"}</p>
          <h1>{ar ? "الأفعال بدل الضجيج." : "Actions instead of noise."}</h1>
          <p>{ar ? "مساحة مستقبلية لقصص موثوقة عن أشخاص ومؤسسات ومجتمعات تقوم بعمل نافع، مع الحفاظ على كرامة من تخدمهم." : "A future editorial space for trustworthy stories about people, institutions and communities doing useful work while protecting the dignity of the people they serve."}</p>
        </section>
        <section className="storyPlaceholder">
          <span>01</span>
          <div>
            <p className="eyebrow">{ar ? "سياسة التحرير" : "EDITORIAL PRINCIPLE"}</p>
            <h2>{ar ? "الكرامة قبل التفاعل." : "Dignity before engagement."}</h2>
            <p>{ar ? "لن تعتمد نعمة الله على صور مذلة أو عناوين صادمة أو استغلال المعاناة بهدف زيادة التفاعل. القصة الجيدة تشرح المشكلة والعمل والنتيجة باحترام." : "Nimatullah should not rely on humiliating imagery, shock headlines or exploitation of suffering to increase engagement. A good story explains the need, the work and the result with respect."}</p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
