import { notFound } from "next/navigation";
import { isLocale } from "@/lib/site";
import { PageShell } from "@/components/site-chrome";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const ar = locale === "ar";

  return (
    <PageShell locale={locale}>
      <main className="innerPage">
        <section className="pageHero">
          <p className="eyebrow">{ar ? "عن نعمة الله" : "ABOUT NIMATULLAH"}</p>
          <h1>{ar ? "من النعمة إلى العمل النافع." : "From blessing to useful action."}</h1>
          <p>{ar ? "نعمة الله مشروع رقمي عالمي للمجتمعات المسلمة، يهدف إلى ربط الناس بالخير من خلال الخدمة والعطاء والمهارات والدعاء والأثر الموثوق." : "Nimatullah is a global digital platform for the Muslim world, designed to connect people through service, giving, skills, prayer and trustworthy positive impact."}</p>
        </section>

        <section className="editorialGrid">
          <div>
            <span className="sectionNumber">01</span>
            <h2>{ar ? "الفكرة" : "The idea"}</h2>
          </div>
          <div className="prose">
            <p>{ar ? "تبدأ الفكرة من معنى بسيط: ما نملكه من نعمة يمكن أن يصبح نفعًا لغيرنا. والنعمة قد تكون مالًا أو وقتًا أو معرفة أو صحة أو خبرة أو تأثيرًا أو دعاءً." : "The idea begins with a simple principle: a blessing we have can become useful to someone else. A blessing may be money, time, knowledge, health, expertise, influence or prayer."}</p>
            <p>{ar ? "لهذا لا تختزل نعمة الله العمل الخيري في المال، ولا تسعى لأن تكون مجرد منصة تبرعات." : "That is why Nimatullah does not reduce philanthropy to money and is not being designed as just another donation platform."}</p>
          </div>
        </section>

        <section className="editorialGrid mutedSection">
          <div>
            <span className="sectionNumber">02</span>
            <h2>{ar ? "الموقع المؤسسي" : "Institutional position"}</h2>
          </div>
          <div className="prose">
            <p>{ar ? "في مرحلته الأولى، يهدف المشروع إلى أن يكون طبقة للاكتشاف والمشاركة والتحقق والأثر والسمعة، لا بنكًا أو معالج مدفوعات." : "In its first phase, the project is intended to be a layer for discovery, participation, verification, impact and reputation—not a bank or payment processor."}</p>
            <p>{ar ? "أي عطاء مالي مستقبلي يجب أن يمر عبر جهات تنفيذية مرخصة ومعتمدة، مع احترام القوانين المحلية ومتطلبات الامتثال." : "Future financial giving should flow through approved and licensed implementing organizations, with appropriate local regulatory and compliance safeguards."}</p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
