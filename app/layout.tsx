import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nimatullah — Make Good Visible",
  description:
    "A global platform for the Muslim world to turn blessings into service, participation and measurable good.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
