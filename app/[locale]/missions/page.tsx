import { notFound } from "next/navigation";
import { isLocale, missions } from "@/lib/site";
import { PageShell } from "@/components/site-chrome";

export default async function MissionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ar = locale === "ar";

  return (
    <PageShell locale={locale}>
      <main className="innerPage">
        <section className="pageHero">
          <p className="eyebrow">{ar ? "المبادرات" : "MISSIONS"}</p>
          <h1>{ar ? "طرق واضحة للمشاركة في الخير." : "Clear ways to participate in good."}</h1>
          <p>{ar ? "المبادرات الحالية أمثلة تصميمية فقط. لا تمثل مشاريع فعلية أو شراكات أو بيانات أثر موثقة." : "The current missions are design prototypes only. They do not represent live projects, partnerships or verified impact data."}</p>
        </section>

        <section className="missionList">
          {missions[locale].map((mission, i) => (
            <article className="missionRow" key={mission.slug}>
              <div className={`missionIndex art${i + 1}`}><span>0{i + 1}</span></div>
              <div>
                <p className="missionMeta">{mission.status} · {mission.country} · {mission.category}</p>
                <h2>{mission.title}</h2>
                <p>{mission.description}</p>
                <div className="missionActions">
                  <span>{ar ? "ادعُ" : "Pray"}</span>
                  <span>{ar ? "أعطِ عبر شريك" : "Give via partner"}</span>
                  <span>{ar ? "اخدم" : "Serve"}</span>
                  <span>{ar ? "قدّم مهارتك" : "Offer a skill"}</span>
                  <span>{ar ? "شارك" : "Share"}</span>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </PageShell>
  );
}
