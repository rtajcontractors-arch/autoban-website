import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا — أوتوبان",
  description: "تواصل مع فريق أوتوبان عبر الواتساب أو البريد الإلكتروني، أو احجز عرضاً توضيحياً مباشراً لفريقك — دعم متساوٍ لجميع المشتركين.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
