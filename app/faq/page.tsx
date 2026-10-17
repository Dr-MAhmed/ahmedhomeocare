"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronDown, Languages, MessageCircle } from "lucide-react";

type Lang = "en" | "ur";
const copy = {
  en: {
    back: "Back to home", eyebrow: "HELP & INFORMATION", title: "Frequently asked questions",
    intro: "A few practical answers to help you plan a visit and make informed health decisions.",
    items: [
      ["What are the clinic hours?", "The listed hours are Monday to Saturday, 7:00 PM–10:00 PM. Sunday is listed as closed. Please message the clinic to confirm availability before travelling."],
      ["How do I ask about an appointment?", "Use the WhatsApp contact button on this website to ask about availability and visit details. Please confirm the exact address and appointment time directly with the clinic."],
      ["Where is the clinic located?", "The current listing says Saddar Bazar / Mansoorabad, Faisalabad, Pakistan. This is a general area, not a verified street address, so please confirm the exact location before setting out."],
      ["What should I bring to a consultation?", "You may wish to bring a list of symptoms, current medicines and supplements, allergies, and relevant test results. Share your complete treatment history with your qualified healthcare professionals."],
      ["Can this website diagnose a condition or recommend treatment?", "No. Website content is general education only and cannot assess your individual health. Please consult a qualified healthcare professional for personal medical advice."],
      ["Is homeopathy a replacement for conventional medical care?", "No. Reliable scientific evidence supporting homeopathy for treating health conditions is limited. Do not stop prescribed medicines, delay recommended care, or avoid urgent medical attention because of information on this website."],
      ["Are patient stories or videos available now?", "The library includes a section reserved for future educational videos and patient experiences. Content should only be published after review and, for patient stories, appropriate informed consent."]
    ],
    safetyTitle: "Medical safety", safety: "For severe or rapidly worsening symptoms, seek urgent medical care. Do not use this website to manage an emergency.",
    contact: "Ask the clinic on WhatsApp"
  },
  ur: {
    back: "مرکزی صفحے پر واپس", eyebrow: "مدد اور معلومات", title: "اکثر پوچھے جانے والے سوالات",
    intro: "کلینک آنے کی تیاری اور صحت سے متعلق باخبر فیصلوں کے لیے چند عملی جوابات۔",
    items: [
      ["کلینک کے اوقات کیا ہیں؟", "درج اوقات پیر سے ہفتہ شام 7 بجے سے رات 10 بجے تک ہیں۔ اتوار کو کلینک بند درج ہے۔ سفر سے پہلے واٹس ایپ پر دستیابی کی تصدیق کریں۔"],
      ["اپائنٹمنٹ کے بارے میں کیسے پوچھوں؟", "دستیابی اور دورے کی تفصیلات پوچھنے کے لیے ویب سائٹ پر واٹس ایپ بٹن استعمال کریں۔ وقت اور مکمل پتہ براہِ راست کلینک سے ضرور کنفرم کریں۔"],
      ["کلینک کہاں واقع ہے؟", "موجودہ معلومات میں صدر بازار / منصورآباد، فیصل آباد درج ہے۔ یہ عمومی علاقہ ہے، تصدیق شدہ مکمل پتہ نہیں؛ روانگی سے پہلے درست مقام معلوم کر لیں۔"],
      ["معائنے کے لیے کیا ساتھ لاؤں؟", "آپ علامات، استعمال ہونے والی ادویات اور سپلیمنٹس، الرجی اور متعلقہ ٹیسٹ رپورٹس کی فہرست ساتھ لا سکتے ہیں۔ اپنی مکمل طبی تاریخ مستند طبی ماہرین کو بتائیں۔"],
      ["کیا ویب سائٹ بیماری کی تشخیص یا علاج تجویز کرتی ہے؟", "نہیں۔ ویب سائٹ کا مواد صرف عمومی آگاہی کے لیے ہے اور آپ کی انفرادی صحت کا جائزہ نہیں لے سکتا۔ ذاتی طبی مشورے کے لیے مستند طبی ماہر سے رجوع کریں۔"],
      ["کیا ہومیوپیتھی روایتی طبی علاج کا متبادل ہے؟", "نہیں۔ بیماریوں کے علاج میں ہومیوپیتھی کی افادیت کے حق میں قابلِ اعتماد سائنسی شواہد محدود ہیں۔ ویب سائٹ کی معلومات کی وجہ سے تجویز کردہ دوا بند نہ کریں، ضروری علاج میں تاخیر نہ کریں اور فوری طبی مدد سے گریز نہ کریں۔"],
      ["کیا مریضوں کی کہانیاں یا ویڈیوز ابھی دستیاب ہیں؟", "لائبریری میں آئندہ تعلیمی ویڈیوز اور مریضوں کے تجربات کے لیے جگہ رکھی گئی ہے۔ مواد جائزے کے بعد اور مریضوں کے تجربات مناسب باخبر رضامندی کے ساتھ ہی شائع کیے جانے چاہئیں۔"]
    ],
    safetyTitle: "طبی حفاظت", safety: "شدید یا تیزی سے بگڑتی علامات کی صورت میں فوری طبی مدد حاصل کریں۔ ہنگامی حالت میں اس ویب سائٹ پر انحصار نہ کریں۔",
    contact: "واٹس ایپ پر کلینک سے پوچھیں"
  }
};
export default function FAQPage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];
  const rtl = lang === "ur";
  return <main dir={rtl ? "rtl" : "ltr"} style={{ minHeight: "100vh", background: "#f7f7f2", color: "#18372f" }}>
    <header style={{ maxWidth: 960, margin: "0 auto", padding: "24px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
      <Link href="/" style={{ color: "inherit", textDecoration: "none", fontWeight: 700 }}>ahmed<span style={{ color: "#6b8d64" }}>homeocare</span></Link>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <button onClick={() => setLang(rtl ? "en" : "ur")} style={{ border: "1px solid #cbd5cc", borderRadius: 999, padding: "9px 13px", background: "transparent", color: "inherit", cursor: "pointer", display: "flex", gap: 7, alignItems: "center" }}><Languages size={16}/>{rtl ? "English" : "اردو"}</button>
        <Link href="/" style={{ color: "inherit", textDecoration: "none", display: "flex", gap: 7, alignItems: "center" }}><ArrowLeft size={16}/>{t.back}</Link>
      </div>
    </header>
    <div style={{ maxWidth: 820, margin: "0 auto", padding: "30px 22px 72px" }}>
      <p style={{ color: "#6b8d64", fontWeight: 700, letterSpacing: ".12em", fontSize: 12 }}>{t.eyebrow}</p>
      <h1 style={{ fontSize: "clamp(36px, 6vw, 56px)", lineHeight: 1.1, margin: "14px 0" }}>{t.title}</h1>
      <p style={{ color: "#52665d", lineHeight: 1.9, fontSize: 17 }}>{t.intro}</p>
      <div style={{ marginTop: 30, display: "grid", gap: 12 }}>
        {t.items.map(([q,a]) => <details key={q} style={{ background: "#fff", border: "1px solid #e2e7df", borderRadius: 14, padding: "18px 20px" }}><summary style={{ cursor: "pointer", fontWeight: 700, display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", listStyle: "none" }}>{q}<ChevronDown size={18} style={{ flexShrink: 0 }}/></summary><p style={{ color: "#52665d", lineHeight: 1.9, marginBottom: 0 }}>{a}</p></details>)}
      </div>
      <aside style={{ marginTop: 24, padding: 22, background: "#eaf0e7", borderRadius: 16 }}><h2 style={{ marginTop: 0 }}>{t.safetyTitle}</h2><p style={{ lineHeight: 1.8 }}>{t.safety}</p><a href="https://wa.me/923035577306" target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#18372f", fontWeight: 700, marginTop: 8 }}><MessageCircle size={17}/>{t.contact}</a></aside>
      <p style={{ marginTop: 26 }}><Link href="/resources" style={{ color: "#18372f" }}>{rtl ? "صحت کی معلومات دیکھیں" : "Explore the health library"} →</Link></p>
    </div>
  </main>;
}
