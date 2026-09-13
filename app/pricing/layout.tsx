import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الأسعار — أوتوبان",
  description: "باقات واضحة بدون مفاجآت — جميع الباقات تشمل البرنامج المحاسبي الكامل المخصص للمقاولين، والفرق فقط في الخدمات الإضافية. شهر تجربة مجاني بدون بطاقة.",
  alternates: { canonical: "/pricing" },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
