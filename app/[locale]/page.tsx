import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, missions } from "@/lib/site";
import { PageShell } from "@/components/site-chrome";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ar = locale === "ar";

  return (
    <PageShell locale={locale}>
      <main>
        <section className="hero section">
          <div className="heroGlow" aria-hidden="true" />
          <p className="eyebrow">نعمة الله · NIMATULLAH</p>
          <h1>{ar ? "لِنَجْعَلِ الخَيْرَ مَرْئِيًّا" : "MAKE GOOD VISIBLE"}</h1>
          <p className="heroText">
            {ar
              ? "منصة عالمية للمجتمعات المسلمة تحوّل النِّعَم إلى خدمة ومشاركة وأثر يمكن قياسه."
              : "A global platform for the Muslim world to turn blessings into service, participation and measurable good."}
          </p>
          <div className="actions">
            <Link className="button primary" href={`/${locale}/about`}>
              {ar ? "اكتشف الرؤية" : "Explore the vision"}
            </Link>
            <Link className="button ghost" href={`/${locale}/institutional`}>
              {ar ? "للتواصل المؤسسي" : "Institutional enquiries"}
            </Link>
          </div>
          <div className="heroSeal" aria-hidden="true"><span>ن</span></div>
        </section>

        <section className="section philosophy">
          <div className="sectionIntro">
            <p className="sectionNumber">01</p>
            <h2>{ar ? "تزداد النعمة أثرًا حين تمتد إلى الآخرين." : "A blessing becomes more when it moves."}</h2>
            <p>
              {ar
                ? "العطاء لا يقتصر على المال. فالوقت والمعرفة والصحة والمهارة والتأثير والمعدات والنقل والتعليم والخبرة الطبية والدعاء والخدمة يمكن أن تتحول جميعها إلى أعمال خير ذات معنى."
                : "Money is only one form of giving. Time, knowledge, health, skill, influence, equipment, transport, teaching, medical expertise, prayer and service can all become meaningful acts of good."}
            </p>
          </div>
          <div className="pathsGrid">
            {(ar
              ? [
                  ["ادعُ", "ساند الناس والمبادرات بالدعاء الصادق."],
                  ["أعطِ", "ادعم العمل الموثوق عبر جهات تنفيذية مرخصة."],
                  ["اخدم", "قدّم وقتك حيث يمكن أن يصنع فرقًا عمليًا."],
                  ["قدّم مهارتك", "ساهم بخبرتك المهنية في احتياجات حقيقية."],
                ]
              : [
                  ["PRAY", "Stand with people and missions through sincere dua."],
                  ["GIVE", "Support verified work through licensed implementing partners."],
                  ["SERVE", "Contribute time where it can make a practical difference."],
                  ["GIVE YOUR SKILL", "Offer professional expertise to real needs."],
                ]).map(([title, body], index) => (
              <article className="pathCard" key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mapSection section" aria-labelledby="map-heading">
          <div className="mapCopy">
            <p className="eyebrow">{ar ? "خريطة الخير · نموذج أولي" : "THE GOOD MAP · PROTOTYPE"}</p>
            <h2 id="map-heading">{ar ? "الخَيْرُ يَحْدُث." : "GOOD IS HAPPENING."}</h2>
            <p>
              {ar
                ? "كل نقطة ضوء ترمز إلى عمل خير. المواقع المعروضة توضيحية فقط ولا تمثل بيانات أثر أو ادعاءات تحقق فعلية."
                : "Every light is an act of good. These locations are illustrative only; no impact or verification claims are being made in this prototype."}
            </p>
          </div>
          <div className="mapVisual" aria-label="Illustrative Good Map prototype">
            <div className="orbit orbitOne" />
            <div className="orbit orbitTwo" />
            {[
              ["Saudi Arabia", "58%", "47%"],
              ["Indonesia", "78%", "66%"],
              ["Morocco", "36%", "40%"],
              ["Oman", "62%", "51%"],
              ["Pakistan", "67%", "44%"],
              ["Azerbaijan", "57%", "33%"],
            ].map(([name, left, top]) => (
              <div className="mapPoint" key={name} style={{ left, top }}>
                <span className="pulse" />
                <small>{name}</small>
              </div>
            ))}
            <p className="demoLabel">ILLUSTRATIVE DATA · DEMO ONLY</p>
          </div>
        </section>

        <section className="section" id="missions">
          <div className="sectionIntro splitIntro">
            <div>
              <p className="sectionNumber">02</p>
              <h2>{ar ? "مبادرات نموذجية" : "Prototype missions"}</h2>
            </div>
            <p>
              {ar
                ? "يمكن للمبادرة مستقبلًا أن تجمع الدعاء والعطاء المنظم والخدمة والخبرة المهنية حول احتياج واضح."
                : "A future mission can connect prayer, regulated giving, service and professional skill around one clearly defined need."}
            </p>
          </div>
          <div className="missionGrid">
            {missions[locale].map((mission, index) => (
              <article className="missionCard" key={mission.slug}>
                <div className={`missionArt art${index + 1}`}><span>{mission.status}</span></div>
                <p className="missionMeta">{mission.country} · {mission.category}</p>
                <h3>{mission.title}</h3>
                <p className="missionDescription">{mission.description}</p>
              </article>
            ))}
          </div>
          <div className="sectionCta">
            <Link className="textLink" href={`/${locale}/missions`}>
              {ar ? "عرض المبادرات" : "View missions"} →
            </Link>
          </div>
        </section>

        <section className="section stories">
          <p className="sectionNumber">03</p>
          <div className="storyStatement">
            <p>{ar ? "قصص الخير" : "STORIES OF GOOD"}</p>
            <h2>{ar ? "الأفعال أهم من الضجيج." : "Actions, not noise."}</h2>
            <p>
              {ar
                ? "قصص تحفظ كرامة الإنسان وتُظهر العمل المفيد دون استغلال المعاناة."
                : "Stories that preserve human dignity and show useful work without exploiting suffering."}
            </p>
            <Link className="textLink" href={`/${locale}/stories`}>{ar ? "نهجنا التحريري" : "Our editorial approach"} →</Link>
          </div>
        </section>

        <section className="section trust">
          <div className="sectionIntro">
            <p className="sectionNumber">04</p>
            <h2>{ar ? "الثقة قبل النمو." : "Built for trust before growth."}</h2>
          </div>
          <div className="principlesGrid">
            {(ar
              ? ["الكرامة قبل التفاعل", "لا أرقام وهمية", "الدعاء لا يُباع", "العطاء عبر شركاء مرخصين", "الخصوصية افتراضيًا", "منصة غير سياسية وغير طائفية"]
              : ["Dignity before engagement", "No fake statistics", "Prayer is never monetized", "Partner-led regulated giving", "Privacy by default", "Non-political and non-sectarian"]
            ).map((principle) => <div key={principle}>{principle}</div>)}
          </div>
          <div className="sectionCta">
            <Link className="textLink" href={`/${locale}/principles`}>
              {ar ? "قراءة المبادئ" : "Read the principles"} →
            </Link>
          </div>
        </section>

        <section className="section verification">
          <div>
            <p className="sectionNumber">05</p>
            <h2>{ar ? "للتحقق معنى ومسؤولية." : "Verification must mean something."}</h2>
            <p>
              {ar
                ? "لن تدّعي نعمة الله التحقق من أي عمل قبل وجود منهجية حقيقية. والنموذج المستهدف يميز بين: مُقدَّم، متحقق عبر الشريك، ومتحقق بشكل مستقل."
                : "Nimatullah will not claim that work is verified until a real methodology exists. The intended model distinguishes submitted, partner verified and independently verified states."}
            </p>
            <Link className="textLink" href={`/${locale}/verification`}>
              {ar ? "منهجية التحقق" : "Verification methodology"} →
            </Link>
          </div>
          <div className="verifyStates">
            <div><span>01</span>{ar ? "مُقدَّم" : "Submitted"}</div>
            <div><span>02</span>{ar ? "متحقق عبر الشريك" : "Partner verified"}</div>
            <div><span>03</span>{ar ? "متحقق بشكل مستقل" : "Independently verified"}</div>
          </div>
        </section>

        <section className="section institutional">
          <p className="eyebrow">INSTITUTIONAL</p>
          <h2>{ar ? "للمؤسسات التي تبني خيرًا مستدامًا." : "For institutions building lasting good."}</h2>
          <p>
            {ar
              ? "يُصمَّم مشروع نعمة الله للتعاون مع المؤسسات والجمعيات الإنسانية والشركات والعائلات الخيرية وأصحاب الخبرات المؤهلين في العالم الإسلامي."
              : "Nimatullah is being designed to work with foundations, humanitarian organizations, companies, philanthropic families and qualified professionals across the Muslim world."}
          </p>
          <Link className="button light" href={`/${locale}/institutional`}>{ar ? "التواصل المؤسسي" : "Institutional enquiries"}</Link>
        </section>
      </main>
    </PageShell>
  );
}
