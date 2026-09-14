import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountrySelector from "@/components/CountrySelector";
import { CountryProvider } from "@/lib/country-context";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://autoban.app"),
  title: "أوتوبان — المنصة المتكاملة لقطاع المقاولات",
  description: "برنامج محاسبة مخصص للمقاولين + مجتمع حصري + سوق محاسبين معتمدين + مكتبة معرفية. سهل للمقاول، دقيق للمحاسب.",
  keywords: "محاسبة مقاولات, برنامج محاسبة, زاتكا, استقطاعات, دفعة مقدمة, WPS",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "أوتوبان — المنصة المتكاملة لقطاع المقاولات",
    description: "سهل للمقاول، دقيق للمحاسب",
    url: "https://autoban.app",
    siteName: "أوتوبان",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "أوتوبان — المنصة المتكاملة لقطاع المقاولات",
    description: "سهل للمقاول، دقيق للمحاسب",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "أوتوبان",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "برنامج محاسبة مخصص للمقاولين + مجتمع حصري + سوق محاسبين معتمدين + مكتبة معرفية.",
  url: "https://autoban.app",
  areaServed: ["SA", "KW", "QA", "EG"],
  inLanguage: "ar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable} data-country="SA" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var c=localStorage.getItem('country');if(c==='SA'||c==='KW'||c==='QA'||c==='EG')document.documentElement.setAttribute('data-country',c);}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">تخطي إلى المحتوى</a>
        <CountryProvider>
          <CountrySelector />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </CountryProvider>
      </body>
    </html>
  );
}
