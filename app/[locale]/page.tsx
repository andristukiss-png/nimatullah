import Link from "next/link";
import { notFound } from "next/navigation";

const copy = {
  en: {
    locale: "en",
    direction: "ltr" as const,
    switchLabel: "العربية",
    switchHref: "/ar",
    nav: ["Missions", "Stories", "Principles", "Verification"],
    eyebrow: "نعمة الله · NIMATULLAH",
    hero: "MAKE GOOD VISIBLE",
    subhero:
      "A global platform for the Muslim world to turn blessings into service, participation and measurable good.",
    primary: "Explore the vision",
    secondary: "Institutional enquiries",
    philosophyTitle: "A blessing becomes more when it moves.",
    philosophy:
      "Money is only one form of giving. Time, knowledge, health, skill, influence, equipment, transport, teaching, medical expertise, prayer and service can all become meaningful acts of good.",
    paths: [
      ["PRAY", "Stand with people and missions through sincere dua."],
      ["GIVE", "Support verified work through licensed implementing partners."],
      ["SERVE", "Contribute time where it can make a practical difference."],
      ["GIVE YOUR SKILL", "Offer professional expertise to real needs."],
    ],
    mapKicker: "THE GOOD MAP · PROTOTYPE",
    mapTitle: "GOOD IS HAPPENING.",
    mapText:
      "Every light is an act of good. These locations are illustrative only; no impact or verification claims are being made in this prototype.",
    missionsTitle: "Prototype missions",
    missionsText:
      "A future mission can connect prayer, regulated giving, service and professional skill around one clearly defined need.",
    missions: [
      ["Saudi Arabia", "Health access", "Health"],
      ["Indonesia", "Learning opportunity", "Education"],
      ["Morocco", "Community rebuilding", "Reconstruction"],
    ],
    principlesTitle: "Built for trust before growth.",
    principles: [
      "Dignity before engagement",
      "No fake statistics",
      "Prayer is never monetized",
      "Partner-led regulated giving",
      "Privacy by default",
      "Non-political and non-sectarian",
    ],
    verifyTitle: "Verification must mean something.",
    verifyText:
      "Nimatullah will not claim that work is verified until a real methodology exists. The intended model distinguishes submitted, partner verified and independently verified states.",
    institutionalTitle: "For institutions building lasting good.",
    institutionalText:
      "Nimatullah is being designed to work with foundations, humanitarian organizations, companies, philanthropic families and qualified professionals across the Muslim world.",
    contact: "Institutional enquiries",
    footer: "NIMATULLAH · نعمة الله",
  },
  ar: {
    locale: "ar",
    direction: "rtl" as const,
    switchLabel: "English",
    switchHref: "/en",
    nav: ["المبادرات", "قصص الخير", "المبادئ", "التحقق"],
    eyebrow: "نعمة الله · NIMATULLAH",
    hero: "لِنَجْعَلِ الخَيْرَ مَرْئِيًّا",
    subhero:
      "منصة عالمية للمجتمعات المسلمة تحوّل النِّعَم إلى خدمة ومشاركة وأثر يمكن قياسه.",
    primary: "اكتشف الرؤية",
    secondary: "للتواصل المؤسسي",
    philosophyTitle: "تزداد النعمة أثرًا حين تمتد إلى الآخرين.",
    philosophy:
      "العطاء لا يقتصر على المال. فالوقت والمعرفة والصحة والمهارة والتأثير والمعدات والنقل والتعليم والخبرة الطبية والدعاء والخدمة يمكن أن تتحول جميعها إلى أعمال خير ذات معنى.",
    paths: [
      ["ادعُ", "ساند الناس والمبادرات بالدعاء الصادق."],
      ["أعطِ", "ادعم العمل الموثوق عبر جهات تنفيذية مرخصة."],
      ["اخدم", "قدّم وقتك حيث يمكن أن يصنع فرقًا عمليًا."],
      ["قدّم مهارتك", "ساهم بخبرتك المهنية في احتياجات حقيقية."],
    ],
    mapKicker: "خريطة الخير · نموذج أولي",
    mapTitle: "الخَيْرُ يَحْدُث.",
    mapText:
      "كل نقطة ضوء ترمز إلى عمل خير. المواقع المعروضة هنا توضيحية فقط، ولا تمثل بيانات أثر أو ادعاءات تحقق فعلية.",
    missionsTitle: "مبادرات نموذجية",
    missionsText:
      "يمكن للمبادرة مستقبلًا أن تجمع الدعاء والعطاء المنظم والخدمة والخبرة المهنية حول احتياج واضح.",
    missions: [
      ["المملكة العربية السعودية", "الوصول إلى الرعاية الصحية", "الصحة"],
      ["إندونيسيا", "فرص التعلّم", "التعليم"],
      ["المغرب", "إعادة بناء المجتمع", "إعادة الإعمار"],
    ],
    principlesTitle: "الثقة قبل النمو.",
    principles: [
      "الكرامة قبل التفاعل",
      "لا أرقام وهمية",
      "الدعاء لا يُباع",
      "العطاء عبر شركاء مرخصين",
      "الخصوصية افتراضيًا",
      "منصة غير سياسية وغير طائفية",
    ],
    verifyTitle: "للتحقق معنى ومسؤولية.",
    verifyText:
      "لن تدّعي نعمة الله التحقق من أي عمل قبل وجود منهجية حقيقية. والنموذج المستهدف يميز بين: مُقدَّم، متحقق عبر الشريك، ومتحقق بشكل مستقل.",
    institutionalTitle: "للمؤسسات التي تبني خيرًا مستدامًا.",
    institutionalText:
      "يُصمَّم مشروع نعمة الله للتعاون مع المؤسسات والجمعيات الإنسانية والشركات والعائلات الخيرية وأصحاب الخبرات المؤهلين في العالم الإسلامي.",
    contact: "التواصل المؤسسي",
    footer: "نعمة الله · NIMATULLAH",
  },
};

type Locale = keyof typeof copy;

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!(rawLocale in copy)) notFound();

  const locale = rawLocale as Locale;
  const t = copy[locale];

  return (
    <main dir={t.direction} lang={t.locale}>
      <header className="siteHeader">
        <Link href={`/${locale}`} className="brand" aria-label="Nimatullah home">
          <span className="brandArabic">نعمة الله</span>
          <span className="brandLatin">NIMATULLAH</span>
        </Link>
        <nav aria-label="Primary navigation">
          {t.nav.map((item, i) => (
            <a key={item} href={["#missions", "#stories", "#principles", "#verification"][i]}>
              {item}
            </a>
          ))}
        </nav>
        <Link className="langSwitch" href={t.switchHref}>
          {t.switchLabel}
        </Link>
      </header>

      <section className="hero section">
        <div className="heroGlow" aria-hidden="true" />
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.hero}</h1>
        <p className="heroText">{t.subhero}</p>
        <div className="actions">
          <a className="button primary" href="#philosophy">{t.primary}</a>
          <a className="button ghost" href="#institutional">{t.secondary}</a>
        </div>
        <div className="heroSeal" aria-hidden="true">
          <span>ن</span>
        </div>
      </section>

      <section className="section philosophy" id="philosophy">
        <div className="sectionIntro">
          <p className="sectionNumber">01</p>
          <h2>{t.philosophyTitle}</h2>
          <p>{t.philosophy}</p>
        </div>
        <div className="pathsGrid">
          {t.paths.map(([title, body], index) => (
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
          <p className="eyebrow">{t.mapKicker}</p>
          <h2 id="map-heading">{t.mapTitle}</h2>
          <p>{t.mapText}</p>
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
            <h2>{t.missionsTitle}</h2>
          </div>
          <p>{t.missionsText}</p>
        </div>
        <div className="missionGrid">
          {t.missions.map(([country, title, category], index) => (
            <article className="missionCard" key={country}>
              <div className={`missionArt art${index + 1}`}>
                <span>PROTOTYPE</span>
              </div>
              <p className="missionMeta">{country} · {category}</p>
              <h3>{title}</h3>
              <div className="missionActions">
                <span>Pray</span><span>Give via partner</span><span>Serve</span><span>Skill</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section stories" id="stories">
        <p className="sectionNumber">03</p>
        <div className="storyStatement">
          <p>STORIES OF GOOD</p>
          <h2>{locale === "ar" ? "الأفعال أهم من الضجيج." : "Actions, not noise."}</h2>
          <p>
            {locale === "ar"
              ? "قصص تحفظ كرامة الإنسان وتُظهر العمل المفيد دون استغلال المعاناة."
              : "Stories that preserve human dignity and show useful work without exploiting suffering."}
          </p>
        </div>
      </section>

      <section className="section trust" id="principles">
        <div className="sectionIntro">
          <p className="sectionNumber">04</p>
          <h2>{t.principlesTitle}</h2>
        </div>
        <div className="principlesGrid">
          {t.principles.map((principle) => <div key={principle}>{principle}</div>)}
        </div>
      </section>

      <section className="section verification" id="verification">
        <div>
          <p className="sectionNumber">05</p>
          <h2>{t.verifyTitle}</h2>
          <p>{t.verifyText}</p>
        </div>
        <div className="verifyStates" aria-label="Proposed verification states">
          <div><span>01</span>Submitted</div>
          <div><span>02</span>Partner verified</div>
          <div><span>03</span>Independently verified</div>
        </div>
      </section>

      <section className="section institutional" id="institutional">
        <p className="eyebrow">INSTITUTIONAL</p>
        <h2>{t.institutionalTitle}</h2>
        <p>{t.institutionalText}</p>
        <a className="button light" href="mailto:info@nimatullah.com">{t.contact}</a>
      </section>

      <footer>
        <div className="footerBrand">
          <strong>{t.footer}</strong>
          <span>MAKE GOOD VISIBLE</span>
        </div>
        <div className="footerLinks">
          <a href="#philosophy">About</a>
          <a href="#principles">Principles</a>
          <a href="#verification">Verification</a>
          <a href="mailto:info@nimatullah.com">info@nimatullah.com</a>
        </div>
      </footer>
    </main>
  );
}
