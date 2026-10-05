import { notFound } from "next/navigation";
import { isLocale } from "@/lib/site";
import { PageShell } from "@/components/site-chrome";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ar = locale === "ar";

  return (
    <PageShell locale={locale}>
      <main className="innerPage">
        <section className="pageHero compact">
          <p className="eyebrow">{ar ? "الخصوصية" : "PRIVACY"}</p>
          <h1>{ar ? "بيانات أقل. ثقة أكبر." : "Less data. More trust."}</h1>
          <p>
            {ar
              ? "مبدأ التصميم هو جمع أقل قدر ممكن من البيانات الشخصية اللازمة لتقديم خدمة مفيدة وآمنة."
              : "The design principle is to collect the minimum personal data needed to provide a useful and safe service."}
          </p>
        </section>

        <section className="privacyBody">
          <article>
            <span>01</span>
            <div>
              <h2>{ar ? "الوضع الحالي" : "Current prototype"}</h2>
              <p>{ar ? "لا تتضمن النسخة الحالية حسابات مستخدمين أو مدفوعات أو ملفات شخصية عامة." : "The current prototype does not include user accounts, payments or public personal profiles."}</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h2>{ar ? "التصميم المستقبلي" : "Future design"}</h2>
              <p>{ar ? "إذا أضيفت حسابات أو نماذج مشاركة مستقبلًا، ينبغي توضيح الغرض من كل معلومة ومدة الاحتفاظ بها ومن يمكنه الوصول إليها." : "If accounts or participation forms are added later, the purpose, retention period and access rules for each category of data should be stated clearly."}</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h2>{ar ? "لا درجات علنية للفضيلة" : "No public virtue scoring"}</h2>
              <p>{ar ? "لا ينبغي تحويل أعمال الخير أو الدعاء أو التبرع إلى ترتيب اجتماعي عام أو لوحة متصدرين." : "Acts of service, prayer or giving should not become a public social ranking or donor leaderboard."}</p>
            </div>
          </article>
        </section>
      </main>
    </PageShell>
  );
}
