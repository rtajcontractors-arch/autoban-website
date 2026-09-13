import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "قائمة الانتظار — أوتوبان",
  description: "سجّل رقم جوالك للانضمام لقائمة انتظار أوتوبان وكن من أوائل من يجرّب المنصة عند الإطلاق.",
  alternates: { canonical: "/waitlist" },
};

export default function WaitlistLayout({ children }: { children: React.ReactNode }) {
  return children;
}
