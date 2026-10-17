"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Languages } from "lucide-react";

type Lang = "en" | "ur";
const copy = {
  en: {
    back: "Back to home", eyebrow: "YOUR PRIVACY", title: "Privacy notice",
    updated: "Last reviewed: 17 October 2026",
    intro: "This notice explains, in plain language, what to keep in mind when using the Ahmed Homeocare website.",
    headings: ["Information you submit", "WhatsApp and external services", "Health information and confidentiality", "Website use", "Changes and contact"],
    bodies: [
      "This website does not currently provide an account, booking form, or patient portal. If you choose to contact the clinic, you may share information voluntarily in your message. Please only share what is necessary to ask about an appointment.",
      "The appointment link opens WhatsApp, a service operated by a third party. WhatsApp may process your message and related information under its own terms and privacy policy. The clinic does not control that service.",
      "Health information can be highly sensitive. Avoid sending detailed medical histories, identity documents, reports, or other sensitive records through an ordinary messaging link unless you have considered the privacy risks and the clinic has explained an appropriate way to share them. Do not post another person's information without permission.",
      "We do not intentionally ask visitors to submit health records through this website. The website is hosted by a third-party provider, which may process technical information needed to deliver and secure the site. This notice does not make claims about data retained by hosting, browser, or messaging providers.",
      "This notice may be updated if website features change. For questions about contacting the clinic, use the WhatsApp link on the home page. Please do not use that link for emergencies."
    ],
    noteTitle: "Important", note: "This page is a general privacy notice, not legal advice. Before adding analytics, forms, patient accounts, or other data collection, the clinic should review the notice and applicable privacy requirements.",
    contact: "Contact the clinic"
  },
  ur: {
    back: "مرکزی صفحے پر واپس", eyebrow: "آپ کی رازداری", title: "رازداری سے متعلق نوٹس",
    updated: "آخری جائزہ: 17 اکتوبر 2026",
    intro: "یہ نوٹس آسان زبان میں بتاتا ہے کہ احمد ہوم کیئر کی ویب سائٹ استعمال کرتے وقت کن باتوں کا خیال رکھنا چاہیے۔",
    headings: ["آپ کی فراہم کردہ معلومات", "واٹس ایپ اور بیرونی خدمات", "طبی معلومات اور رازداری", "ویب سائٹ کا استعمال", "تبدیلیاں اور رابطہ"],
    bodies: [
      "اس وقت ویب سائٹ پر اکاؤنٹ، بکنگ فارم یا مریضوں کا پورٹل موجود نہیں۔ اگر آپ کلینک سے رابطہ کرتے ہیں تو اپنے پیغام میں رضاکارانہ طور پر معلومات دے سکتے ہیں۔ اپائنٹمنٹ پوچھنے کے لیے صرف ضروری معلومات شیئر کریں۔",
      "اپائنٹمنٹ کا لنک ایک بیرونی سروس واٹس ایپ کھولتا ہے۔ واٹس ایپ اپنے شرائط اور رازداری کی پالیسی کے تحت آپ کے پیغام اور متعلقہ معلومات پر کارروائی کر سکتا ہے۔ کلینک اس سروس کو کنٹرول نہیں کرتا۔",
      "طبی معلومات بہت حساس ہو سکتی ہیں۔ عام پیغام رسانی کے ذریعے تفصیلی طبی تاریخ، شناختی دستاویزات، رپورٹس یا دیگر حساس ریکارڈ بھیجنے سے گریز کریں، جب تک رازداری کے خطرات سمجھ نہ لیں اور کلینک محفوظ طریقۂ ارسال واضح نہ کرے۔ کسی دوسرے شخص کی معلومات اس کی اجازت کے بغیر شیئر نہ کریں۔",
      "ہم اس ویب سائٹ کے ذریعے طبی ریکارڈ جمع کرانے کا تقاضا نہیں کرتے۔ ویب سائٹ ایک بیرونی فراہم کنندہ پر ہوسٹ ہے جو سائٹ کی فراہمی اور حفاظت کے لیے ضروری تکنیکی معلومات پر کارروائی کر سکتا ہے۔ یہ نوٹس ہوسٹنگ، براؤزر یا پیغام رسانی فراہم کنندگان کے محفوظ کردہ ڈیٹا کے بارے میں کوئی غیر مصدقہ دعویٰ نہیں کرتا۔",
      "ویب سائٹ کی خصوصیات تبدیل ہونے پر یہ نوٹس اپ ڈیٹ کیا جا سکتا ہے۔ کلینک سے رابطے کے لیے مرکزی صفحے کا واٹس ایپ لنک استعمال کریں۔ ہنگامی صورت میں اس لنک پر انحصار نہ کریں۔"
    ],
    noteTitle: "اہم", note: "یہ عمومی رازداری نوٹس ہے، قانونی مشورہ نہیں۔ تجزیاتی ٹولز، فارم، مریضوں کے اکاؤنٹس یا ڈیٹا جمع کرنے کی دیگر سہولتیں شامل کرنے سے پہلے کلینک کو اس نوٹس اور متعلقہ رازداری کے تقاضوں کا جائزہ لینا چاہیے۔",
    contact: "کلینک سے رابطہ کریں"
  }
};
export default function PrivacyPage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = copy[lang];
  const rtl = lang === "ur";
  return <main dir={rtl ? "rtl" : "ltr"} style={{ minHeight: "100vh", background: "#f7f7f2", color: "#18372f" }}>
    <header style={{ maxWidth: 900, margin: "0 auto", padding: "24px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
      <Link href="/" style={{ color: "inherit", textDecoration: "none", fontWeight: 700 }}>ahmed<span style={{ color: "#6b8d64" }}>homeocare</span></Link>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <button onClick={() => setLang(rtl ? "en" : "ur")} style={{ border: "1px solid #cbd5cc", borderRadius: 999, padding: "9px 13px", background: "transparent", color: "inherit", cursor: "pointer", display: "flex", gap: 7, alignItems: "center" }}><Languages size={16}/>{rtl ? "English" : "اردو"}</button>
        <Link href="/" style={{ color: "inherit", textDecoration: "none", display: "flex", gap: 7, alignItems: "center" }}><ArrowLeft size={16}/>{t.back}</Link>
      </div>
    </header>
    <div style={{ maxWidth: 780, margin: "0 auto", padding: "30px 22px 72px" }}>
      <p style={{ color: "#6b8d64", fontWeight: 700, letterSpacing: ".12em", fontSize: 12 }}>{t.eyebrow}</p>
      <h1 style={{ fontSize: "clamp(36px, 6vw, 56px)", lineHeight: 1.1, margin: "14px 0" }}>{t.title}</h1>
      <p style={{ color: "#52665d", lineHeight: 1.9, fontSize: 17 }}>{t.intro}</p><p style={{ color: "#6b8d64", fontSize: 13 }}>{t.updated}</p>
      <div style={{ marginTop: 32, display: "grid", gap: 24 }}>
        {t.headings.map((heading, i) => <section key={heading}><h2 style={{ fontSize: 22 }}>{heading}</h2><p style={{ color: "#52665d", lineHeight: 1.9 }}>{t.bodies[i]}</p></section>)}
      </div>
      <aside style={{ marginTop: 30, background: "#eaf0e7", padding: 22, borderRadius: 16 }}><h2 style={{ marginTop: 0 }}>{t.noteTitle}</h2><p style={{ lineHeight: 1.8 }}>{t.note}</p><Link href="/#visit" style={{ color: "#18372f", fontWeight: 700 }}>{t.contact} →</Link></aside>
    </div>
  </main>;
}
