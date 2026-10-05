import { notFound } from "next/navigation";
import { isLocale } from "@/lib/site";
import { PageShell } from "@/components/site-chrome";

export default async function VerificationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ar = locale === "ar";

  const states = ar
    ? [["01", "مُقدَّم", "أُضيفت المعلومات إلى المنصة ولم يكتمل التحقق منها."], ["02", "متحقق عبر الشريك", "أكدت الجهة التنفيذية المعتمدة المعلومات وفق منهجية معلنة."], ["03", "متحقق بشكل مستقل", "خضعت النتيجة لمراجعة مستقلة وفق معايير محددة."]]
    : [["01", "Submitted", "Information has been entered into the platform but has not completed verification."], ["02", "Partner verified", "An approved implementing organization has confirmed the information under a stated methodology."], ["03", "Independently verified", "The result has undergone independent review against defined criteria."]];

  return (
    <PageShell locale={locale}>
      <main className="innerPage">
        <section className="pageHero">
          <p className="eyebrow">{ar ? "التحقق والأثر" : "VERIFICATION & IMPACT"}</p>
          <h1>{ar ? "لا قيمة لكلمة «موثّق» بلا منهجية." : "“Verified” means nothing without a methodology."}</h1>
          <p>{ar ? "لن تدّعي نعمة الله أن مشروعًا أو أثرًا موثّق حتى توجد آلية تحقق حقيقية، قابلة للفهم والمراجعة." : "Nimatullah will not describe a project or result as verified until a genuine, understandable and reviewable verification methodology exists."}</p>
        </section>
        <section className="verificationPage">
          {states.map(([number, title, body]) => (
            <article key={number}>
              <span>{number}</span>
              <div>
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </section>
        <section className="impactIdPanel">
          <div>
            <p className="eyebrow">{ar ? "مفهوم مستقبلي" : "FUTURE CONCEPT"}</p>
            <h2>Impact ID</h2>
          </div>
          <div className="impactCode">NIM-2030-SA-847291</div>
          <p>{ar ? "هذا المثال توضيحي فقط. لا يوجد معيار Nimatullah Verified فعّال حاليًا، ولا ينبغي عرض أي رقم كهذا بوصفه تحققًا حقيقيًا قبل اكتمال المنهجية." : "This identifier is illustrative only. There is no active Nimatullah Verified standard yet, and no identifier should be presented as genuine verification before the methodology exists."}</p>
        </section>
      </main>
    </PageShell>
  );
}
