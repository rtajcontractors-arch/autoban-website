import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "أوتوبان — المنصة المتكاملة لقطاع المقاولات",
  description: "برنامج محاسبة مخصص للمقاولين + مجتمع حصري + سوق محاسبين معتمدين + مكتبة معرفية. سهل للمقاول، دقيق للمحاسب.",
  keywords: "محاسبة مقاولات, برنامج محاسبة, زاتكا, استقطاعات, دفعة مقدمة, WPS",
  openGraph: {
    title: "أوتوبان — المنصة المتكاملة لقطاع المقاولات",
    description: "سهل للمقاول، دقيق للمحاسب",
    locale: "ar_SA",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
