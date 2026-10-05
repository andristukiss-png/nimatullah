import { notFound } from "next/navigation";
import { isLocale } from "@/lib/site";
import { PageShell } from "@/components/site-chrome";

export default async function TransparencyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ar = locale === "ar";

  const rows = ar
    ? [
        ["حالة المشروع", "مرحلة مبكرة / نموذج رقمي قيد التطوير."],
        ["المبادرات المعروضة", "أمثلة توضيحية، وليست برامج نشطة."],
        ["الشركاء", "لا تعرض النسخة الحالية أي شراكات مؤسسية على أنها قائمة."],
        ["الأثر", "لا توجد أرقام أثر حقيقية منشورة حاليًا."],
        ["التحقق", "لا يوجد حتى الآن معيار Nimatullah Verified عامل أو معتمد."],
        ["الأموال", "لا تستقبل النسخة الحالية تبرعات ولا تحتفظ بأموال خيرية."],
      ]
    : [
        ["Project status", "Early-stage digital concept under development."],
        ["Missions shown", "Illustrative prototypes, not active programs."],
        ["Partners", "The current site does not present any institutional partnership as active."],
        ["Impact", "No live impact statistics are currently published."],
        ["Verification", "There is not yet an operational or accredited Nimatullah Verified standard."],
        ["Funds", "The current site does not accept donations or hold charitable funds."],
      ];

  return (
    <PageShell locale={locale}>
      <main className="innerPage">
        <section className="pageHero compact">
          <p className="eyebrow">{ar ? "الشفافية" : "TRANSPARENCY"}</p>
          <h1>{ar ? "قول ما هو حقيقي، وما لم يصبح حقيقيًا بعد." : "Say what is real—and what is not real yet."}</h1>
          <p>
            {ar
              ? "توضح هذه الصفحة حالة المشروع الحالية حتى لا يُفهم النموذج الأولي على أنه مؤسسة تشغيلية مكتملة."
              : "This page states the project’s current status so an early prototype is not mistaken for a fully operating institution."}
          </p>
        </section>

        <section className="transparencyTable">
          {rows.map(([label, value]) => (
            <div key={label}>
              <strong>{label}</strong>
              <p>{value}</p>
            </div>
          ))}
        </section>

        <section className="transparencyStatement">
          <p className="eyebrow">{ar ? "التزام مستقبلي" : "FUTURE COMMITMENT"}</p>
          <h2>{ar ? "أي ادعاء يجب أن يكون قابلًا للفهم والمراجعة." : "Every claim should be understandable and reviewable."}</h2>
          <p>
            {ar
              ? "إذا تطورت نعمة الله إلى منصة تشغيلية، ينبغي أن تشرح بوضوح منهجية التحقق، وأدوار الشركاء، ومصادر بيانات الأثر، وأي تدفقات مالية ذات صلة."
              : "If Nimatullah develops into an operating platform, it should clearly explain verification methodology, partner roles, impact data sources and any relevant financial flows."}
          </p>
        </section>
      </main>
    </PageShell>
  );
}
