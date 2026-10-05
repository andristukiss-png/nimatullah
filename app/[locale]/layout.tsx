import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/site";

const descriptions = {
  en: "Nimatullah is a global platform concept for the Muslim world to turn blessings into service, participation and measurable good.",
  ar: "نعمة الله مفهوم لمنصة عالمية للمجتمعات المسلمة تحوّل النِّعَم إلى خدمة ومشاركة وأثر يمكن قياسه.",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  return {
    title: {
      default: locale === "ar" ? "نعمة الله — لِنَجْعَلِ الخَيْرَ مَرْئِيًّا" : "Nimatullah — Make Good Visible",
      template: locale === "ar" ? "%s · نعمة الله" : "%s · Nimatullah",
    },
    description: descriptions[locale],
    alternates: {
      canonical: "/" + locale,
      languages: {
        en: "/en",
        ar: "/ar",
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      siteName: "Nimatullah",
      title: locale === "ar" ? "نعمة الله" : "Nimatullah",
      description: descriptions[locale],
      locale: locale === "ar" ? "ar_SA" : "en",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return children;
}
