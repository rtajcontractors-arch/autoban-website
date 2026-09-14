"use client";
import { useCountry } from "@/lib/country-context";
import { VisualCard, type VisualRow } from "@/components/VisualCard";
import { toArabicNumber as fmt } from "@/lib/format";

export function InvoiceVisualCard() {
  const { data } = useCountry();
  const base = 50000;
  const tax = Math.round((base * data.taxRatePercent) / 100);
  const total = base + tax;

  const rows: VisualRow[] = [
    { label: "رقم الفاتورة", value: "INV-2026-0412" },
    { label: "المبلغ قبل الضريبة", value: `${fmt(base)} ${data.currencyCode}` },
    data.taxRatePercent > 0
      ? { label: `ضريبة القيمة المضافة ${data.taxLabel}`, value: `${fmt(tax)} ${data.currencyCode}` }
      : { label: "ضريبة القيمة المضافة", value: "لا يوجد" },
    { label: "الإجمالي", value: `${fmt(total)} ${data.currencyCode}`, accent: true },
    { label: `نظام الفوترة: ${data.invoicingSystem}`, badge: data.taxRatePercent > 0 ? "مُرسَلة ✓" : "متاح", green: true },
  ];

  return <VisualCard rows={rows} />;
}

export function PayrollVisualCard() {
  const { data } = useCountry();

  const rows: VisualRow[] = [
    { label: "إجمالي الرواتب", value: `٣٢٠,٠٠٠ ${data.currencyCode}` },
    { label: data.insuranceSystem, value: `٣٦,٨٠٠ ${data.currencyCode}` },
    { label: "عدد الموظفين", value: "٨٥ موظف" },
    data.hasWps
      ? { label: data.payrollLabel, badge: "جاهز للرفع ✓", green: true }
      : { label: data.payrollLabel, badge: "غير مطلوب", yellow: true },
  ];

  return <VisualCard rows={rows} />;
}
