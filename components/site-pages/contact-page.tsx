import Link from "@/components/site-link";
import { ArrowRight, Building2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Lang, localPath } from "@/lib/site";
import { Breadcrumbs, Eyebrow, SiteShell } from "@/components/site-shell";

export function ContactPage({ lang }: { lang: Lang }) {
  const z = lang === "zh";
  const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL;
  const copy = z ? {
    title: "聯絡岩泉", eyebrow: "香港聯絡方式",
    intro: "可直接電郵或致電香港辦事處；如需報價，可先整理應用、部件類型與現有參考資料。",
    email: "電郵", phone: "電話", fax: "傳真", address: "地址", whatsapp: "WhatsApp",
    emailAction: "一鍵撰寫電郵", callAction: "一鍵致電", whatsappAction: whatsappUrl ? "開啟 WhatsApp" : "WhatsApp 演示入口",
    demo: "演示狀態：公開資料未能確認此電話已啟用 WhatsApp，因此入口尚未連接。甲方提供已啟用號碼或 wa.me 連結後，可透過 NEXT_PUBLIC_WHATSAPP_URL 直接啟用。",
    prepare: "詢盤前可先準備", items: ["產品類型與使用場景", "圖紙、相片、樣品或尺寸", "預計數量與項目階段", "目標時間及需核對的合規要求"],
    formTitle: "需要較完整地說明項目？", formBody: "使用需求頁整理產品、應用、數量、時間與附件。現階段為私人 Demo，不會真正傳送。", formAction: "前往需求頁",
    source: "聯絡資料來源：岩泉官方網站",
  } : {
    title: "Contact Yan Chuen", eyebrow: "Hong Kong contact",
    intro: "Email or call the Hong Kong office directly. For a quotation, begin with the application, component type and any reference material you already have.",
    email: "Email", phone: "Phone", fax: "Fax", address: "Address", whatsapp: "WhatsApp",
    emailAction: "Compose an email", callAction: "Call now", whatsappAction: whatsappUrl ? "Open WhatsApp" : "WhatsApp demo entry",
    demo: "Demo status: public information does not confirm that the listed phone is WhatsApp-enabled, so this entry is not connected. It can be enabled through NEXT_PUBLIC_WHATSAPP_URL when the client supplies an active number or wa.me link.",
    prepare: "Useful details to prepare", items: ["Product type and use case", "Drawing, photo, sample or dimensions", "Estimated quantity and project stage", "Target timing and compliance points to review"],
    formTitle: "Need to explain a fuller project?", formBody: "Use the request page to organize product, application, quantity, timing and attachments. The current private demo does not send data.", formAction: "Open request page",
    source: "Contact details source: official Yan Chuen website",
  };
  return <SiteShell lang={lang} path="/contact">
    <Breadcrumbs lang={lang} items={[{ label: copy.title }]} />
    <section className="page-hero"><div className="shell page-hero-grid"><div><Eyebrow>{copy.eyebrow}</Eyebrow><h1 className="display-title">{copy.title}</h1></div><div className="page-hero-note"><p>{copy.intro}</p></div></div></section>
    <section className="section-compact section-white"><div className="shell contact-grid">
      <article className="contact-card contact-card-primary"><Mail size={25}/><span>{copy.email}</span><h2>sales@yanchuen.com</h2><a className="button button-light" href="mailto:sales@yanchuen.com?subject=Project%20enquiry%20for%20Yan%20Chuen">{copy.emailAction}<ArrowRight size={16}/></a></article>
      <article className="contact-card"><Phone size={25}/><span>{copy.phone}</span><h2>+852 2688 5011</h2><a className="button" href="tel:+85226885011">{copy.callAction}<ArrowRight size={16}/></a><p>{copy.fax}: +852 2688 5625</p></article>
      <article className="contact-card"><MessageCircle size={25}/><span>{copy.whatsapp}</span><h2>{whatsappUrl ? "+852" : "Demo"}</h2><a className="button button-secondary" href={whatsappUrl || "#whatsapp-demo-note"} target={whatsappUrl ? "_blank" : undefined} rel={whatsappUrl ? "noreferrer" : undefined}>{copy.whatsappAction}<ArrowRight size={16}/></a></article>
      <article className="contact-card contact-address"><MapPin size={25}/><span>{copy.address}</span><h2>Yan Chuen Co., Ltd.</h2><p>Flat 1404, 14/F, Fo Tan Industrial Centre<br/>26–28 Au Pui Wan Street<br/>Fo Tan, Shatin, Hong Kong</p><a className="source" href="https://www.google.com/maps/search/?api=1&query=Fo+Tan+Industrial+Centre+26-28+Au+Pui+Wan+Street+Hong+Kong" target="_blank" rel="noreferrer">Google Maps ↗</a></article>
    </div><div className="shell contact-demo-note" id="whatsapp-demo-note"><MessageCircle size={22}/><p>{copy.demo}</p></div></section>
    <section className="section"><div className="shell contact-next-grid"><div><Eyebrow>{copy.prepare}</Eyebrow><ul className="contact-checklist">{copy.items.map(item=><li key={item}><Building2 size={18}/><span>{item}</span></li>)}</ul></div><aside><Eyebrow>{z?"項目需求":"Project request"}</Eyebrow><h2>{copy.formTitle}</h2><p>{copy.formBody}</p><Link className="button" href={localPath(lang,"/request-a-quote")}>{copy.formAction}<ArrowRight size={16}/></Link></aside></div><div className="shell contact-source"><a href="https://www.yanchuen.com/" target="_blank" rel="noreferrer">{copy.source} ↗</a></div></section>
  </SiteShell>;
}
