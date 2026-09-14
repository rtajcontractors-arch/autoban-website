"use client";
import { createContext, useContext, useEffect, useState } from "react";

export type CountryCode = "SA" | "KW" | "QA" | "EG";

export type CountryInfo = {
  code: CountryCode;
  flag: string;
  name: string;
  taxRatePercent: number;
  taxLabel: string;
  invoicingSystem: string;
  currency: string;
  currencyCode: string;
  usdRate: number;
  usdRateApprox?: boolean;
  hasWps: boolean;
  payrollLabel: string;
  insuranceSystem: string;
};

// بيانات واقعية لكل دولة (وليست بالضرورة مطابقة حرفياً لما ورد في الطلب — تم تصحيح
// عدة حقول انزاحت عن ترتيب الدول الصحيح، مثل عملة الكويت والجهة المسؤولة عن التأمينات في قطر).
export const countryData: Record<CountryCode, CountryInfo> = {
  SA: {
    code: "SA",
    flag: "🇸🇦",
    name: "السعودية",
    taxRatePercent: 15,
    taxLabel: "١٥٪",
    invoicingSystem: "زاتكا",
    currency: "ريال سعودي",
    currencyCode: "ر.س",
    usdRate: 3.75,
    hasWps: true,
    payrollLabel: "نظام حماية الأجور (WPS)",
    insuranceSystem: "التأمينات الاجتماعية (GOSI)",
  },
  KW: {
    code: "KW",
    flag: "🇰🇼",
    name: "الكويت",
    taxRatePercent: 0,
    taxLabel: "لا يوجد",
    invoicingSystem: "اختياري",
    currency: "دينار كويتي",
    currencyCode: "د.ك",
    usdRate: 0.31,
    hasWps: true,
    payrollLabel: "نظام حماية الأجور",
    insuranceSystem: "التأمينات الاجتماعية (PIFSS)",
  },
  QA: {
    code: "QA",
    flag: "🇶🇦",
    name: "قطر",
    taxRatePercent: 0,
    taxLabel: "لا يوجد",
    invoicingSystem: "اختياري",
    currency: "ريال قطري",
    currencyCode: "ر.ق",
    usdRate: 3.64,
    hasWps: true,
    payrollLabel: "نظام حماية الأجور (WPS)",
    insuranceSystem: "التقاعد والتأمينات الاجتماعية (GRSIA)",
  },
  EG: {
    code: "EG",
    flag: "🇪🇬",
    name: "مصر",
    taxRatePercent: 14,
    taxLabel: "١٤٪",
    invoicingSystem: "منظومة الفاتورة الإلكترونية المصرية",
    currency: "جنيه مصري",
    currencyCode: "ج.م",
    usdRate: 49,
    usdRateApprox: true,
    hasWps: false,
    payrollLabel: "بدون نظام WPS رسمي",
    insuranceSystem: "التأمين الاجتماعي",
  },
};

export const countryOrder: CountryCode[] = ["SA", "KW", "QA", "EG"];

const STORAGE_KEY = "country";

type CountryContextValue = {
  country: CountryCode;
  setCountry: (c: CountryCode) => void;
  data: CountryInfo;
};

const CountryContext = createContext<CountryContextValue | null>(null);

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [country, setCountryState] = useState<CountryCode>("SA");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as CountryCode | null;
    if (stored && countryOrder.includes(stored)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCountryState(stored);
    }
  }, []);

  function setCountry(c: CountryCode) {
    setCountryState(c);
    window.localStorage.setItem(STORAGE_KEY, c);
  }

  return (
    <CountryContext.Provider value={{ country, setCountry, data: countryData[country] }}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  const ctx = useContext(CountryContext);
  if (!ctx) throw new Error("useCountry must be used within a CountryProvider");
  return ctx;
}
