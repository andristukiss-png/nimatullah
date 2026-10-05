export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const site = {
  en: {
    dir: "ltr" as const,
    language: "English",
    switchLabel: "العربية",
    switchLocale: "ar" as const,
    brandArabic: "نعمة الله",
    brandLatin: "NIMATULLAH",
    tagline: "MAKE GOOD VISIBLE",
    nav: {
      missions: "Missions",
      stories: "Stories",
      about: "About",
      principles: "Principles",
      verification: "Verification",
      institutional: "Institutional",
    },
    footerLine: "A global platform for the Muslim world to turn blessings into service, participation and measurable good.",
  },
  ar: {
    dir: "rtl" as const,
    language: "العربية",
    switchLabel: "English",
    switchLocale: "en" as const,
    brandArabic: "نعمة الله",
    brandLatin: "NIMATULLAH",
    tagline: "MAKE GOOD VISIBLE",
    nav: {
      missions: "المبادرات",
      stories: "قصص الخير",
      about: "عن نعمة الله",
      principles: "المبادئ",
      verification: "التحقق",
      institutional: "للمؤسسات",
    },
    footerLine: "منصة عالمية للمجتمعات المسلمة تحوّل النِّعَم إلى خدمة ومشاركة وأثر يمكن قياسه.",
  },
};

export const missions = {
  en: [
    { slug: "health-access-saudi-arabia", country: "Saudi Arabia", category: "Health", title: "Health access", description: "A prototype mission exploring how licensed partners, volunteers and qualified professionals could coordinate around a clearly defined health need.", status: "Prototype" },
    { slug: "learning-opportunity-indonesia", country: "Indonesia", category: "Education", title: "Learning opportunity", description: "A prototype education mission designed to show how funding, mentoring, teaching and professional skill could work together.", status: "Prototype" },
    { slug: "community-rebuilding-morocco", country: "Morocco", category: "Community", title: "Community rebuilding", description: "A prototype mission focused on dignified participation in community recovery without exploiting images of suffering.", status: "Prototype" },
  ],
  ar: [
    { slug: "health-access-saudi-arabia", country: "المملكة العربية السعودية", category: "الصحة", title: "الوصول إلى الرعاية الصحية", description: "مبادرة نموذجية تستكشف كيف يمكن للشركاء المرخصين والمتطوعين وأصحاب الخبرة المؤهلين التعاون حول احتياج صحي واضح.", status: "نموذج أولي" },
    { slug: "learning-opportunity-indonesia", country: "إندونيسيا", category: "التعليم", title: "فرص التعلّم", description: "مبادرة تعليمية نموذجية تُظهر كيف يمكن للعطاء والإرشاد والتعليم والخبرة المهنية أن تعمل معًا.", status: "نموذج أولي" },
    { slug: "community-rebuilding-morocco", country: "المغرب", category: "المجتمع", title: "إعادة بناء المجتمع", description: "مبادرة نموذجية تركز على المشاركة الكريمة في التعافي المجتمعي دون استغلال صور المعاناة.", status: "نموذج أولي" },
  ],
};

export const principles = {
  en: [
    ["Dignity before engagement", "People are never reduced to images of suffering in order to generate clicks or donations."],
    ["Truth before momentum", "No fabricated statistics, partners, endorsements, verification claims or institutional relationships."],
    ["Prayer is never monetized", "Dua is participation, not a product and not a paid transaction."],
    ["Regulated giving", "Financial support initially routes through approved and licensed implementing organizations."],
    ["Privacy by default", "Collect the minimum personal data required for a useful and trustworthy experience."],
    ["Actions over arguments", "Nimatullah is not designed as a political, sectarian or general news platform."],
  ],
  ar: [
    ["الكرامة قبل التفاعل", "لا يُختزل الإنسان في صور المعاناة بهدف زيادة النقرات أو التبرعات."],
    ["الحقيقة قبل الزخم", "لا أرقام وهمية ولا شركاء أو تأييدات أو ادعاءات تحقق أو علاقات مؤسسية مختلقة."],
    ["الدعاء لا يُباع", "الدعاء مشاركة، وليس منتجًا أو معاملة مدفوعة."],
    ["عطاء منظم", "يُوجَّه الدعم المالي في البداية عبر جهات تنفيذية معتمدة ومرخصة."],
    ["الخصوصية افتراضيًا", "نجمع أقل قدر ممكن من البيانات الشخصية اللازمة لتجربة مفيدة وموثوقة."],
    ["الأفعال قبل الجدل", "نعمة الله ليست منصة سياسية أو طائفية أو موقعًا عامًا للأخبار."],
  ],
};
