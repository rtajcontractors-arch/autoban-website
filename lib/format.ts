const easternDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

// يحوّل رقماً لصيغة "٥٠,٠٠٠" (أرقام هندية شرقية بفواصل الآلاف) لمطابقة بقية نصوص الموقع،
// بدل الاعتماد على toLocaleString('ar') الذي يعطي نتائج مختلفة حسب بيانات ICU في كل بيئة تشغيل.
export function toArabicNumber(n: number): string {
  return n.toLocaleString("en-US").replace(/[0-9]/g, d => easternDigits[Number(d)]);
}
