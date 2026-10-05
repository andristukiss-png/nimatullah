import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, missions } from "@/lib/site";
import { PageShell } from "@/components/site-chrome";

export function generateStaticParams() {
  return ["en", "ar"].flatMap((locale) =>
    missions[locale as "en" | "ar"].map((mission) => ({
      locale,
      slug: mission.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const mission = missions[locale].find((item) => item.slug === slug);
  if (!mission) return {};
  return {
    title: mission.title,
    description: mission.description,
  };
}

export default async function MissionDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const mission = missions[locale].find((item) => item.slug === slug);
  if (!mission) notFound();
  const ar = locale === "ar";

  return (
    <PageShell locale={locale}>
      <main className="innerPage">
        <section className="missionDetailHero">
          <div>
            <p className="eyebrow">
              {mission.status} · {mission.country} · {mission.category}
            </p>
            <h1>{mission.title}</h1>
            <p>{mission.description}</p>
          </div>
          <div className="prototypeBadge">
            <strong>{ar ? "مثال توضيحي" : "ILLUSTRATIVE PROTOTYPE"}</strong>
            <p>
              {ar
                ? "هذه ليست مبادرة نشطة ولا تمثل شريكًا أو جهة مستفيدة أو تمويلًا قائمًا."
                : "This is not a live mission and does not represent an active partner, beneficiary or funding program."}
            </p>
          </div>
        </section>

        <section className="participationSection">
          <div>
            <p className="sectionNumber">01</p>
            <h2>{ar ? "طرق المشاركة المحتملة" : "Potential ways to participate"}</h2>
          </div>
          <div className="participationGrid">
            {(ar
              ? [
                  ["ادعُ", "الدعاء للناس والعمل النافع دون أي مقابل مالي."],
                  ["أعطِ", "مستقبلًا، عبر نظام تبرع رسمي تابع لجهة تنفيذية مرخصة."],
                  ["اخدم", "تطوع بالوقت عندما تكون هناك حاجة واضحة وآمنة."],
                  ["قدّم مهارتك", "ساهم بخبرة مهنية مرتبطة باحتياج محدد."],
                ]
              : [
                  ["Pray", "Pray for people and useful work without any financial transaction."],
                  ["Give", "In future, through an official donation system operated by a licensed implementing organization."],
                  ["Serve", "Volunteer time when a clear and safe need exists."],
                  ["Offer a skill", "Contribute professional expertise connected to a defined need."],
                ]).map(([title, body], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="methodPanel">
          <div>
            <p className="eyebrow">{ar ? "مبدأ التحقق" : "VERIFICATION PRINCIPLE"}</p>
            <h2>{ar ? "لا أثر موثّق بلا دليل." : "No verified impact without evidence."}</h2>
          </div>
          <p>
            {ar
              ? "عندما تصبح المبادرات حقيقية، يجب أن تُعرض الجهة المنفذة، ونطاق العمل، وحالة التحقق، ومصدر البيانات بوضوح. هذا النموذج لا يقدم أي ادعاء من هذا النوع."
              : "When missions become real, the implementing organization, scope of work, verification state and data source should be shown clearly. This prototype makes no such claim."}
          </p>
        </section>

        <div className="backLinkWrap">
          <Link className="textLink" href={"/" + locale + "/missions"}>
            ← {ar ? "العودة إلى المبادرات" : "Back to missions"}
          </Link>
        </div>
      </main>
    </PageShell>
  );
}
