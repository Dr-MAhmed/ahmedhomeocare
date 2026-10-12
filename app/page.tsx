"use client";

import { useState } from "react";
import {
  ArrowDownRight, ArrowRight, CalendarDays, Check, ChevronDown,
  Clock3, HeartHandshake, Leaf, MapPin, Menu, MessageCircle, Play,
  ShieldCheck, Sparkles, Stethoscope, Video, X,
} from "lucide-react";

type Language = "en" | "ur";

const copy = {
  en: {
    eyebrow: "AHMED HOMEOPATHIC CLINIC · FAISALABAD",
    nav: ["Our doctors", "Our approach", "Health library", "Visit us"],
    book: "Ask about an appointment",
    kicker: "CARE THAT STARTS WITH LISTENING",
    headlineA: "Your story matters.",
    headlineB: "Your care should feel personal.",
    intro: "Meet a family of practitioners committed to listening carefully, explaining clearly, and helping you make informed decisions about your health.",
    primary: "Meet our doctors",
    secondary: "Explore health library",
    trust1: "Personal conversations", trust2: "Clear information", trust3: "Care with respect",
    note: "A welcoming place to ask questions and understand your options.",
    sectionLabel: "A MORE PERSONAL EXPERIENCE",
    sectionTitle: "Good care begins with a good conversation.",
    sectionIntro: "We want every visitor to feel heard, respected, and better informed. Explore the clinic, learn about our practitioners, and find useful educational resources at your own pace.",
    cards: [
      { title: "Meet your practitioners", text: "Learn about the people behind the clinic, their training, experience, and approach to patient conversations.", action: "Meet the doctors" },
      { title: "Learn at your own pace", text: "Browse accessible articles and educational videos designed to help you ask better-informed health questions.", action: "Explore resources" },
      { title: "Plan your visit", text: "Find clinic details and contact us to ask about appointment availability before you travel.", action: "Contact the clinic" },
    ],
    doctorsLabel: "THE PEOPLE YOU'LL MEET",
    doctorsTitle: "Experience built around listening.",
    doctorsIntro: "Get to know our practitioners and the experience they bring to each conversation.",
    doctor1Role: "Homeopathic practitioner", doctor1Name: "Dr. Muhammad Sohail", doctor1Exp: "30 years of practice*",
    doctor2Role: "Homeopathic practitioner", doctor2Name: "Dr. Muhammad Ahmed", doctor2Exp: "6 years of practice*",
    doctorDisclaimer: "*Experience figures are provided by the clinic and should be verified alongside qualifications and registration details before publication.",
    libraryLabel: "THE AHMED HOMECARE LIBRARY", libraryTitle: "Information you can return to.", libraryIntro: "Health education should be clear, measured, and easy to explore. Our growing library will bring together articles and videos from our practitioners.",
    article: "Articles & explainers", videos: "Doctor videos", stories: "Patient experiences",
    articleText: "Plain-language reading to help you prepare questions for a qualified health professional.",
    videoText: "Educational conversations about health topics and the clinic's approach.",
    storiesText: "Shared only with explicit permission, with respect for each person's privacy and experience.",
    visitLabel: "PLAN A VISIT", visitTitle: "We're here to answer your questions.",
    visitIntro: "Contact the clinic to confirm availability, timings, and any details you need before visiting.",
    hoursLabel: "Clinic hours", hours: "Monday–Saturday · 7:00 PM–10:00 PM", sunday: "Sunday · Closed",
    addressLabel: "Clinic location", address: "Saddar Bazar / Mansoorabad, Faisalabad, Pakistan", addressNote: "Please confirm the exact address before your visit.",
    contact: "Contact on WhatsApp", footer: "Thoughtful conversations. Clear information. Respect for every person.",
    disclaimer: "Website information is educational and does not replace assessment or treatment from a qualified healthcare professional. Homeopathy has limited reliable evidence for treating health conditions. Do not delay or stop evidence-based medical care. For emergencies, contact local emergency services.",
  },
  ur: {
    eyebrow: "احمد ہومیوپیتھک کلینک · فیصل آباد",
    nav: ["ہمارے ڈاکٹرز", "ہمارا طریقۂ کار", "صحت کی معلومات", "کلینک تشریف لائیں"],
    book: "اپائنٹمنٹ کے بارے میں پوچھیں",
    kicker: "دیکھ بھال کا آغاز توجہ سے سننے سے",
    headlineA: "آپ کی بات اہم ہے۔",
    headlineB: "آپ کی دیکھ بھال ذاتی ہونی چاہیے۔",
    intro: "ہم سے ملیے—ایک ایسا خاندان جو آپ کی بات توجہ سے سننے، واضح معلومات دینے اور صحت سے متعلق باخبر فیصلوں میں مدد کرنے کے لیے پُرعزم ہے۔",
    primary: "ہمارے ڈاکٹرز سے ملیے",
    secondary: "صحت کی معلومات دیکھیں",
    trust1: "ذاتی گفتگو", trust2: "واضح معلومات", trust3: "احترام کے ساتھ دیکھ بھال",
    note: "سوالات پوچھنے اور اپنے اختیارات سمجھنے کے لیے ایک خوش آمدیدی جگہ۔",
    sectionLabel: "ایک زیادہ ذاتی تجربہ",
    sectionTitle: "اچھی دیکھ بھال کی ابتدا اچھی گفتگو سے ہوتی ہے۔",
    sectionIntro: "ہم چاہتے ہیں کہ ہر آنے والا خود کو سنا گیا، محترم اور بہتر طور پر باخبر محسوس کرے۔ کلینک، ہمارے معالجین اور تعلیمی معلومات کے بارے میں اپنی سہولت سے جانیے۔",
    cards: [
      { title: "اپنے معالجین سے ملیے", text: "کلینک کے معالجین، ان کی تعلیم، تجربے اور مریضوں سے گفتگو کے انداز کے بارے میں جانیے۔", action: "ڈاکٹرز سے ملیے" },
      { title: "اپنی رفتار سے معلومات حاصل کریں", text: "صحت سے متعلق مضامین اور تعلیمی ویڈیوز دیکھیے تاکہ آپ بہتر سوالات پوچھ سکیں۔", action: "معلومات دیکھیں" },
      { title: "اپنے دورے کی تیاری کریں", text: "کلینک کی تفصیلات دیکھیں اور روانہ ہونے سے پہلے وقت کی دستیابی معلوم کریں۔", action: "کلینک سے رابطہ کریں" },
    ],
    doctorsLabel: "آپ کن سے ملیں گے", doctorsTitle: "توجہ سے سننے کے تجربے کے ساتھ۔", doctorsIntro: "ہمارے معالجین اور ان کے تجربے کے بارے میں جانیے۔",
    doctor1Role: "ہومیوپیتھک معالج", doctor1Name: "ڈاکٹر محمد سہیل", doctor1Exp: "30 سالہ پریکٹس*",
    doctor2Role: "ہومیوپیتھک معالج", doctor2Name: "ڈاکٹر محمد احمد", doctor2Exp: "6 سالہ پریکٹس*",
    doctorDisclaimer: "*تجربے کے یہ اعداد کلینک کی فراہم کردہ معلومات ہیں۔ اشاعت سے پہلے اسناد اور رجسٹریشن کی تفصیلات کی تصدیق ضروری ہے۔",
    libraryLabel: "احمد ہوم کیئر لائبریری", libraryTitle: "ایسی معلومات جن کی طرف آپ دوبارہ آ سکیں۔", libraryIntro: "صحت کی معلومات واضح، متوازن اور آسان ہونی چاہئیں۔ ہماری لائبریری میں مضامین اور معالجین کی ویڈیوز شامل کی جائیں گی۔",
    article: "مضامین اور وضاحتیں", videos: "ڈاکٹرز کی ویڈیوز", stories: "مریضوں کے تجربات",
    articleText: "آسان زبان میں معلومات جو آپ کو مستند طبی ماہر سے سوالات تیار کرنے میں مدد دیں۔", videoText: "صحت کے موضوعات اور کلینک کے طریقۂ کار پر تعلیمی گفتگو۔", storiesText: "صرف واضح اجازت کے ساتھ، ہر فرد کی رازداری اور تجربے کا احترام کرتے ہوئے۔",
    visitLabel: "کلینک آنے کی تیاری", visitTitle: "آپ کے سوالات کے جواب دینے کے لیے ہم موجود ہیں۔", visitIntro: "آنے سے پہلے دستیابی، اوقات اور ضروری تفصیلات کی تصدیق کے لیے رابطہ کریں۔",
    hoursLabel: "کلینک کے اوقات", hours: "پیر تا ہفتہ · شام 7 بجے سے 10 بجے", sunday: "اتوار · بند",
    addressLabel: "کلینک کا مقام", address: "صدر بازار / منصورآباد، فیصل آباد، پاکستان", addressNote: "آنے سے پہلے مکمل پتے کی تصدیق کر لیں۔", contact: "واٹس ایپ پر رابطہ کریں",
    footer: "توجہ سے گفتگو۔ واضح معلومات۔ ہر فرد کا احترام۔",
    disclaimer: "ویب سائٹ کی معلومات صرف آگاہی کے لیے ہیں اور مستند طبی ماہر کی تشخیص یا علاج کا متبادل نہیں۔ بیماریوں کے علاج میں ہومیوپیتھی کے مؤثر ہونے کے شواہد محدود ہیں۔ ثابت شدہ طبی علاج میں تاخیر نہ کریں اور نہ ہی اسے بند کریں۔ ہنگامی صورت میں مقامی ایمرجنسی سروس سے رابطہ کریں۔",
  },
} as const;

const WHATSAPP_NUMBER = "92XXXXXXXXXX"; // Replace with the clinic's verified number (country code, digits only).

export default function HomePage() {
  const [lang, setLang] = useState<Language>("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = copy[lang];
  const rtl = lang === "ur";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(rtl ? "السلام علیکم، میں اپائنٹمنٹ کے بارے میں معلومات چاہتا/چاہتی ہوں۔" : "Hello, I would like to ask about an appointment.")}`;

  return (
    <main dir={rtl ? "rtl" : "ltr"} className={rtl ? "site urdu" : "site"}>
      <div className="announcement"><span className="announcement-dot" />{t.eyebrow}<span className="announcement-right"><MapPin size={14} /> Faisalabad, Pakistan</span></div>
      <header className="header wrap">
        <a href="#home" className="brand" aria-label="Ahmed Homeopathic Clinic home">
          <span className="brand-mark"><Leaf size={23} strokeWidth={1.7} /></span>
          <span className="brand-copy"><strong>ahmed<span>homeocare</span></strong><small>AHMED HOMEOPATHIC CLINIC</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#doctors">{t.nav[0]}</a><a href="#approach">{t.nav[1]}</a><a href="#library">{t.nav[2]}</a><a href="#visit">{t.nav[3]}</a>
        </nav>
        <div className="header-actions">
          <button className="language-toggle" onClick={() => setLang(rtl ? "en" : "ur")} aria-label="Switch language">{rtl ? "EN" : "اردو"}<ChevronDown size={13} /></button>
          <a className="button button-dark header-cta" href="#visit">{t.book}<ArrowRight size={15} /></a>
          <button className="menu-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X /> : <Menu />}</button>
        </div>
      </header>
      {mobileOpen && <nav className="mobile-nav wrap"><a onClick={() => setMobileOpen(false)} href="#doctors">{t.nav[0]}</a><a onClick={() => setMobileOpen(false)} href="#approach">{t.nav[1]}</a><a onClick={() => setMobileOpen(false)} href="#library">{t.nav[2]}</a><a onClick={() => setMobileOpen(false)} href="#visit">{t.nav[3]}</a></nav>}

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" />{t.kicker}</div>
          <h1>{t.headlineA}<br /><em>{t.headlineB}</em></h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions"><a className="button button-green" href="#doctors">{t.primary}<ArrowRight size={16} /></a><a className="text-link" href="#library">{t.secondary}<ArrowDownRight size={16} /></a></div>
          <div className="hero-proof"><div className="proof-icon"><HeartHandshake size={19} /></div><div><strong>{t.trust1}</strong><span>{t.note}</span></div></div>
        </div>
        <div className="hero-art" aria-label="Illustration representing a calm, welcoming healthcare space">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-window"><div className="window-sun" /><div className="window-pane pane-one" /><div className="window-pane pane-two" /><div className="window-sill" /></div>
          <div className="art-plant plant-back"><span /><i /><b /></div><div className="art-table"><div className="table-top" /><div className="table-leg" /></div>
          <div className="art-vase"><div className="vase-stem stem-one" /><div className="vase-stem stem-two" /><div className="vase-leaf leaf-one" /><div className="vase-leaf leaf-two" /><div className="vase-body" /></div>
          <div className="art-card"><div className="art-card-icon"><ShieldCheck size={19} /></div><div><strong>{t.trust2}</strong><span>{t.trust3}</span></div><Check size={17} className="art-check" /></div>
          <div className="art-caption"><Sparkles size={14} /> A thoughtful approach to every conversation</div>
        </div>
      </section>
      <div className="trust-strip"><div className="wrap trust-inner"><span><Check size={15} />{t.trust1}</span><span><Check size={15} />{t.trust2}</span><span><Check size={15} />{t.trust3}</span></div></div>

      <section className="section wrap" id="approach"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />{t.sectionLabel}</div><h2>{t.sectionTitle}</h2></div><p>{t.sectionIntro}</p></div>
        <div className="feature-grid">{t.cards.map((card, i) => <article className="feature-card" key={card.title}><div className={`feature-icon feature-icon-${i}`} >{i === 0 ? <Stethoscope /> : i === 1 ? <Sparkles /> : <CalendarDays />}</div><span className="feature-number">0{i + 1}</span><h3>{card.title}</h3><p>{card.text}</p><a href={i === 0 ? "#doctors" : i === 1 ? "#library" : "#visit"}>{card.action}<ArrowRight size={15} /></a></article>)}</div>
      </section>

      <section className="doctors-section" id="doctors"><div className="wrap section"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />{t.doctorsLabel}</div><h2>{t.doctorsTitle}</h2></div><p>{t.doctorsIntro}</p></div>
        <div className="doctor-grid"><article className="doctor-card"><div className="doctor-portrait portrait-one"><div className="portrait-halo"/><div className="portrait-person"><div className="portrait-head"/><div className="portrait-neck"/><div className="portrait-coat"/><div className="portrait-shirt"/></div><span className="portrait-stamp"><Leaf size={20}/></span></div><div className="doctor-info"><span className="doctor-role">{t.doctor1Role}</span><h3>{t.doctor1Name}</h3><div className="doctor-exp"><Clock3 size={14}/>{t.doctor1Exp}</div></div></article>
        <article className="doctor-card"><div className="doctor-portrait portrait-two"><div className="portrait-halo"/><div className="portrait-person"><div className="portrait-head"/><div className="portrait-neck"/><div className="portrait-coat"/><div className="portrait-shirt"/></div><span className="portrait-stamp"><Stethoscope size={20}/></span></div><div className="doctor-info"><span className="doctor-role">{t.doctor2Role}</span><h3>{t.doctor2Name}</h3><div className="doctor-exp"><Clock3 size={14}/>{t.doctor2Exp}</div></div></article></div><p className="small-note">{t.doctorDisclaimer}</p>
      </div></section>

      <section className="section wrap" id="library"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />{t.libraryLabel}</div><h2>{t.libraryTitle}</h2></div><p>{t.libraryIntro}</p></div><div className="library-grid">
        <a className="library-card library-articles" href="#visit"><div className="library-visual"><div className="paper paper-back"/><div className="paper paper-front"><span/><span/><span/><i/></div><span className="visual-spark"><Sparkles size={18}/></span></div><div className="library-card-copy"><span className="library-tag">READ & LEARN</span><h3>{t.article}</h3><p>{t.articleText}</p><span className="card-arrow"><ArrowRight size={17}/></span></div></a>
        <a className="library-card library-videos" href="#visit"><div className="library-visual"><div className="video-screen"><div className="video-sun"/><div className="video-plant"/><div className="play-circle"><Play size={18} fill="currentColor"/></div></div><span className="video-badge"><Video size={17}/></span></div><div className="library-card-copy"><span className="library-tag">WATCH & EXPLORE</span><h3>{t.videos}</h3><p>{t.videoText}</p><span className="card-arrow"><ArrowRight size={17}/></span></div></a>
        <a className="library-card library-stories" href="#visit"><div className="library-visual"><div className="quote-mark">“</div><div className="quote-lines"><span/><span/><span/></div><div className="quote-people"><i/><i/><i/></div><span className="story-heart"><HeartHandshake size={19}/></span></div><div className="library-card-copy"><span className="library-tag">SHARED WITH PERMISSION</span><h3>{t.stories}</h3><p>{t.storiesText}</p><span className="card-arrow"><ArrowRight size={17}/></span></div></a>
      </div></section>

      <section className="visit-section" id="visit"><div className="wrap visit-wrap"><div className="visit-copy"><div className="eyebrow eyebrow-light"><span className="eyebrow-line" />{t.visitLabel}</div><h2>{t.visitTitle}</h2><p>{t.visitIntro}</p><a className="button button-cream" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17}/>{t.contact}<ArrowRight size={15}/></a><span className="visit-small"><ShieldCheck size={15}/> We’ll help you confirm the details before you visit.</span></div><div className="visit-details"><div className="detail-card"><div className="detail-icon"><Clock3 size={19}/></div><div><h3>{t.hoursLabel}</h3><p>{t.hours}</p><span>{t.sunday}</span></div></div><div className="detail-card"><div className="detail-icon"><MapPin size={19}/></div><div><h3>{t.addressLabel}</h3><p>{t.address}</p><span>{t.addressNote}</span></div></div></div></div></section>

      <footer className="footer"><div className="wrap"><div className="footer-top"><a href="#home" className="brand brand-footer"><span className="brand-mark"><Leaf size={23}/></span><span className="brand-copy"><strong>ahmed<span>homeocare</span></strong><small>AHMED HOMEOPATHIC CLINIC</small></span></a><p>{t.footer}</p><a className="back-top" href="#home">Back to top <ArrowRight size={15}/></a></div><div className="footer-disclaimer">{t.disclaimer}</div><div className="footer-bottom"><span>© {new Date().getFullYear()} Ahmed Homeopathic Clinic</span><span>Made with care in Faisalabad, Pakistan</span></div></div></footer>
    </main>
  );
}
