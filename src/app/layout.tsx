import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Providers } from "@/components/Providers";
import { siteName } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteName} — бег с тренером Верой Фатеевой`,
    template: `%s | ${siteName}`,
  },
  description:
    "Тренировки для любителей бега: бесплатные курсы, платные групповые и индивидуальные программы, новости тренера и беговые группы.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
