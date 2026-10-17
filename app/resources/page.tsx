"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, HeartHandshake, Languages, ShieldCheck, Video } from "lucide-react";

type Lang = "en" | "ur";

const content = {
  en: {
    back: "Back to home", label: "AHMED HOMECARE LIBRARY", title: "Clear information for better conversations.",
    intro: "Use these general educational notes to prepare questions for a qualified healthcare professional. They are not a diagnosis or a substitute for medical advice.",
    articles: "Articles & explainers", a1: "Prepare for a health appointment", a1p: "Write down your symptoms, when they began, medicines and supplements you use, allergies, and the questions you want answered. Bring relevant test results if you have them.",
    a2: "Ask about evidence and safety", a2p: "Ask what a treatment is expected to do, what evidence supports it, what risks or interactions are known, and when you should seek further care. Be cautious of guarantees or claims of a certain cure.",
    a3: "Keep your care team informed", a3p: "Tell every healthcare professional about all treatments you are using. Do not stop prescribed medicines or delay recommended care without discussing it with the clinician responsible for your treatment.",
    videos: "Doctor videos", vtitle: "Educational videos will be added here", vp: "We will publish videos when they are ready for review. Information will be educational and will not replace individual assessment by a qualified professional.",
    experiences: "Patient experiences", etitle: "Respect, privacy and informed consent", ep: "Patient stories or testimonials will only be published with appropriate informed consent and respect for privacy. No individual story can guarantee another person's outcome.",
    safety: "Important health information", safetyText: "Homeopathy has limited reliable scientific evidence of effectiveness for treating health conditions. Do not use this website to diagnose yourself, delay urgent care, or replace evidence-based treatment. For urgent or emergency symptoms, contact local emergency services or seek immediate medical care.",
    contact: "Ask the clinic a question"
  },
  ur: {
    back: "مرکزی صفحے پر واپس", label: "احمد ہوم کیئر لائبریری", title: "بہتر گفتگو کے لیے واضح معلومات۔",
    intro: "یہ عمومی تعلیمی معلومات کسی مستند طبی ماہر سے سوالات کرنے کی تیاری میں مدد دے سکتی ہیں۔ یہ تشخیص یا طبی مشورے کا متبادل نہیں ہیں۔",
    articles: "مضامین اور رہنما معلومات", a1: "طبی معائنے کی تیاری کریں", a1p: "اپنی علامات، ان کے آغاز کا وقت، استعمال ہونے والی ادویات اور سپلیمنٹس، الرجی، اور سوالات لکھ لیں۔ اگر دستیاب ہوں تو متعلقہ ٹیسٹ رپورٹس بھی ساتھ رکھیں۔",
    a2: "علاج کے شواہد اور حفاظت پوچھیں", a2p: "پوچھیں کہ علاج سے کیا توقع ہے، اس کے حق میں کیا شواہد ہیں، ممکنہ خطرات یا دواؤں کے باہمی اثرات کیا ہیں، اور مزید طبی مدد کب لینی چاہیے۔ یقینی شفا کے دعووں سے محتاط رہیں۔",
    a3: "اپنی طبی ٹیم کو آگاہ رکھیں", a3p: "ہر طبی ماہر کو ان تمام علاجوں کے بارے میں بتائیں جو آپ استعمال کر رہے ہیں۔ متعلقہ ڈاکٹر سے مشورہ کیے بغیر تجویز کردہ دوا بند نہ کریں اور ضروری علاج میں تاخیر نہ کریں۔",
    videos: "ڈاکٹرز کی ویڈیوز", vtitle: "تعلیمی ویڈیوز یہاں شامل کی جائیں گی", vp: "ویڈیوز مناسب جائزے کے بعد شائع کی جائیں گی۔ ان کا مقصد عمومی معلومات دینا ہوگا، ذاتی طبی معائنے کا متبادل بننا نہیں۔",
    experiences: "مریضوں کے تجربات", etitle: "احترام، رازداری اور باخبر رضامندی", ep: "مریضوں کے تجربات یا تاثرات صرف مناسب باخبر رضامندی اور رازداری کے احترام کے ساتھ شائع کیے جائیں گے۔ کسی ایک شخص کا تجربہ دوسرے شخص کے نتیجے کی ضمانت نہیں۔",
    safety: "صحت سے متعلق اہم معلومات", safetyText: "بیماریوں کے علاج میں ہومیوپیتھی کی افادیت کے حق میں قابلِ اعتماد سائنسی شواہد محدود ہیں۔ اس ویب سائٹ کی معلومات سے خود تشخیص نہ کریں، فوری طبی مدد میں تاخیر نہ کریں، اور شواہد پر مبنی علاج کا متبادل نہ بنائیں۔ ہنگامی علامات کی صورت میں فوری طبی مدد حاصل کریں۔",
    contact: "کلینک سے سوال کریں"
  }
};

export default function ResourcesPage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];
  const rtl = lang === "ur";
  return (
    <main dir={rtl ? "rtl" : "ltr"} style={{ minHeight: "100vh", background: "#f7f7f2", color: "#18372f", fontFamily: "inherit" }}>
      <header style={{ maxWidth: 1000, margin: "0 auto", padding: "24px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <Link href="/" style={{ color: "inherit", textDecoration: "none", fontWeight: 700 }}>ahmed<span style={{ color: "#6b8d64" }}>homeocare</span></Link>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button onClick={() => setLang(rtl ? "en" : "ur")} style={{ border: "1px solid #cbd5cc", borderRadius: 999, padding: "9px 13px", background: "transparent", color: "inherit", cursor: "pointer", display: "flex", alignItems: "center", gap: 7 }}><Languages size={16}/>{rtl ? "English" : "اردو"}</button>
          <Link href="/" style={{ color: "inherit", display: "flex", alignItems: "center", gap: 7, textDecoration: "none" }}><ArrowLeft size={16}/>{t.back}</Link>
        </div>
      </header>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "30px 22px 70px" }}>
        <p style={{ color: "#6b8d64", fontWeight: 700, letterSpacing: ".12em", fontSize: 12 }}>{t.label}</p>
        <h1 style={{ fontSize: "clamp(34px, 6vw, 58px)", lineHeight: 1.1, maxWidth: 780, margin: "14px 0" }}>{t.title}</h1>
        <p style={{ maxWidth: 720, color: "#52665d", lineHeight: 1.8, fontSize: 17 }}>{t.intro}</p>
        <section id="articles" style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 28, marginBottom: 18, display: "flex", alignItems: "center", gap: 10 }}><BookOpen size={23}/>{t.articles}</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: 16 }}>
            {[[t.a1,t.a1p],[t.a2,t.a2p],[t.a3,t.a3p]].map(([title, body]) => <article key={title} style={{ background: "#fff", border: "1px solid #e2e7df", borderRadius: 18, padding: 24 }}><h3 style={{ fontSize: 20, marginTop: 0 }}>{title}</h3><p style={{ color: "#52665d", lineHeight: 1.8, marginBottom: 0 }}>{body}</p></article>)}
          </div>
        </section>
        <section id="videos" style={{ marginTop: 48, background: "#eaf0e7", borderRadius: 20, padding: 26 }}>
          <h2 style={{ fontSize: 26, display: "flex", alignItems: "center", gap: 10 }}><Video size={23}/>{t.videos}</h2><h3>{t.vtitle}</h3><p style={{ lineHeight: 1.8, color: "#52665d" }}>{t.vp}</p>
        </section>
        <section id="experiences" style={{ marginTop: 22, background: "#fff", border: "1px solid #e2e7df", borderRadius: 20, padding: 26 }}>
          <h2 style={{ fontSize: 26, display: "flex", alignItems: "center", gap: 10 }}><HeartHandshake size={23}/>{t.experiences}</h2><h3>{t.etitle}</h3><p style={{ lineHeight: 1.8, color: "#52665d" }}>{t.ep}</p>
        </section>
        <aside style={{ marginTop: 24, border: "1px solid #c8d7c8", borderRadius: 18, padding: 22, display: "flex", gap: 14, alignItems: "flex-start" }}><ShieldCheck size={22} style={{ flexShrink: 0, marginTop: 3 }}/><div><h2 style={{ fontSize: 20, marginTop: 0 }}>{t.safety}</h2><p style={{ color: "#52665d", lineHeight: 1.8, marginBottom: 0 }}>{t.safetyText}</p></div></aside>
        <p style={{ marginTop: 28 }}><Link href="/#visit" style={{ color: "#18372f", fontWeight: 700 }}>{t.contact} →</Link></p>
      </div>
    </main>
  );
}
