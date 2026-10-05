import Link from "next/link";
import { Locale, site } from "@/lib/site";

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = site[locale];
  const other = t.switchLocale;

  return (
    <header className="siteHeader">
      <Link href={`/${locale}`} className="brand" aria-label="Nimatullah home">
        <span className="brandArabic">{t.brandArabic}</span>
        <span className="brandLatin">{t.brandLatin}</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href={`/${locale}/missions`}>{t.nav.missions}</Link>
        <Link href={`/${locale}/stories`}>{t.nav.stories}</Link>
        <Link href={`/${locale}/about`}>{t.nav.about}</Link>
        <Link href={`/${locale}/principles`}>{t.nav.principles}</Link>
        <Link href={`/${locale}/verification`}>{t.nav.verification}</Link>
      </nav>
      <Link className="langSwitch" href={`/${other}`}>
        {t.switchLabel}
      </Link>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = site[locale];
  return (
    <footer>
      <div className="footerBrand">
        <strong>{t.brandArabic} · {t.brandLatin}</strong>
        <span>{t.tagline}</span>
        <p>{t.footerLine}</p>
      </div>
      <div className="footerLinks">
        <Link href={`/${locale}/about`}>{t.nav.about}</Link>
        <Link href={`/${locale}/principles`}>{t.nav.principles}</Link>
        <Link href={`/${locale}/verification`}>{t.nav.verification}</Link>
        <Link href={`/${locale}/institutional`}>{t.nav.institutional}</Link>
        <a href="mailto:info@nimatullah.com">info@nimatullah.com</a>
      </div>
    </footer>
  );
}

export function PageShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const t = site[locale];
  return (
    <div dir={t.dir} lang={locale}>
      <SiteHeader locale={locale} />
      {children}
      <SiteFooter locale={locale} />
    </div>
  );
}
