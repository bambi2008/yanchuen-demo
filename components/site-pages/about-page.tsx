import { ArrowUpRight, Check } from "lucide-react";
import { Lang } from "@/lib/site";
import { Breadcrumbs, CtaBand, Eyebrow, SiteShell } from "@/components/site-shell";

const copy = {
  en: {
    eyebrow: "Company overview", title: "About Yan Chuen",
    intro: "A Hong Kong supplier profile built from the company’s public information, HKTDC records and traceable industry coverage. Items requiring current certificates or client confirmation are clearly marked.",
    stats: [["1992", "Established, according to HKTDC"], ["Since 1996", "Advertising with HKTDC"], ["Hong Kong", "Exporter and manufacturer"], ["Custom", "Input and rubber-component projects"]],
    capabilityEyebrow: "Public capability profile", capabilityTitle: "What the available records show",
    capabilityLead: "A useful buyer overview without turning source material into unsupported performance promises.",
    capabilities: [
      ["A focused component range", "The official catalogue lists silicone rubber keypads, membrane keypads, rubber parts, keypad kit-sets, elastomer connectors and silicone rubber tubing.", "Official product catalogue", "https://www.yanchuen.com/products"],
      ["Process coverage shown publicly", "The factory tour shows rubber mixing, molding, printing, laser etching, coating and epoxy work, plus membrane printing, placement, die-cutting, lamination and embossing.", "Official factory tour", "https://www.yanchuen.com/projects-2"],
      ["Multiple application directions", "The company website names telecom, security, medical, machinery, home-appliance and toy applications. These are directions—not proof of a current customer or project approval.", "Official company website", "https://www.yanchuen.com/"],
      ["Management-system claims to verify", "The official site displays ISO 9001 / IATF 16949, ISO 14001 and ISO 13485 claims. Buyers should request current certificates and confirm the entity, facility and scope.", "Official company website", "https://www.yanchuen.com/"],
    ],
    evidenceEyebrow: "Independent references", evidenceTitle: "Records a buyer can open and check",
    evidence: [
      ["Company record", "A documented Hong Kong company history", "HKTDC lists Yan Chuen Co., Ltd. as a Hong Kong exporter and manufacturer established in 1992. The profile was updated in November 2025 and says it has advertised with HKTDC since September 1996.", "HKTDC company verification", "https://sourcing.hktdc.com/en/Supplier-Store/Company-Verification/Yan-Chuen-Co-Ltd/1X0008MQ"],
      ["Industry coverage", "A traceable 2024 product introduction", "Active Components published an article on 27 June 2024 introducing Yan Chuen custom keypads and overlays. It is channel coverage, not a customer testimonial.", "Active Components coverage", "https://www.activecomponents.com/articles/news/1104"],
    ],
    boundaryTitle: "Before placing an order",
    boundaryItems: ["Request current certificates and verify their legal entity, site and product scope.", "Confirm materials, tolerances, tooling, inspection and compliance against the actual project.", "Treat public application examples as discussion context, not an approval for a regulated use."],
  },
  zh: {
    eyebrow: "公司概覽", title: "關於岩泉",
    intro: "以岩泉公開資料、香港貿發局檔案及可追溯行業報導，整理一份較完整的香港供應商概覽；仍需核對證書或由甲方確認的內容，會明確標示邊界。",
    stats: [["1992", "香港貿發局所列成立年份"], ["自 1996", "於貿發局刊登資料"], ["香港", "列為出口商及製造商"], ["訂製", "輸入與橡膠組件項目"]],
    capabilityEyebrow: "公開能力輪廓", capabilityTitle: "現有資料能夠說明甚麼",
    capabilityLead: "幫助採購方了解公司的公開足跡，同時不把來源資料延伸成未經證實的性能承諾。",
    capabilities: [
      ["聚焦輸入與橡膠組件", "官方產品目錄列出矽膠按鍵、薄膜按鍵、橡膠零件、按鍵組件、彈性體連接器及矽膠管。", "官方產品目錄", "https://www.yanchuen.com/products"],
      ["公開展示多項工序", "工廠導覽展示混煉、成型、印刷、雷射雕刻、塗層及滴膠，以及薄膜印刷、元件貼裝、模切、貼合與壓凸等工序。", "官方工廠導覽", "https://www.yanchuen.com/projects-2"],
      ["覆蓋多類應用方向", "公司網站列出電訊、保安、醫療、機械、家電及玩具等應用。這些是應用方向，不代表現有客戶關係或項目認可。", "公司官方網站", "https://www.yanchuen.com/zh"],
      ["管理體系資訊需再核實", "官方網站展示 ISO 9001／IATF 16949、ISO 14001 及 ISO 13485 等資訊。採購前應索取現行證書，核對法律實體、廠址及適用範圍。", "公司官方網站", "https://www.yanchuen.com/zh"],
    ],
    evidenceEyebrow: "第三方參考", evidenceTitle: "採購方可直接開啟查核的紀錄",
    evidence: [
      ["公司檔案", "有公開檔案可查核的香港公司歷史", "香港貿發局將岩泉有限公司列為香港出口商及製造商，成立年份為 1992。檔案於 2025 年 11 月更新，並列明自 1996 年 9 月起於貿發局刊登資料。", "香港貿發局公司核實資料", "https://sourcing.hktdc.com/en/Supplier-Store/Company-Verification/Yan-Chuen-Co-Ltd/1X0008MQ"],
      ["行業報導", "一篇可追溯的 2024 年產品介紹", "Active Components 於 2024 年 6 月 27 日刊登文章，介紹岩泉的訂製按鍵與覆膜。這裡將其作為渠道報導，不包裝成客戶評價。", "Active Components 報導", "https://www.activecomponents.com/articles/news/1104"],
    ],
    boundaryTitle: "落單前仍需確認",
    boundaryItems: ["索取現行證書，核對法律實體、廠址與產品適用範圍。", "按實際項目確認材料、公差、模具、檢驗及合規要求。", "把公開應用案例視為溝通背景，而非受監管用途的認可。"],
  },
} as const;

export function AboutPage({ lang }: { lang: Lang }) {
  const t = copy[lang]; const isZh = lang === "zh";
  return <SiteShell lang={lang} path="/about">
    <Breadcrumbs lang={lang} items={[{ label: t.title }]} />
    <section className="page-hero about-hero"><div className="shell page-hero-grid"><div><Eyebrow>{t.eyebrow}</Eyebrow><h1 className="display-title">{t.title}</h1></div><div className="page-hero-note"><p>{t.intro}</p></div></div><div className="shell about-stat-grid">{t.stats.map(([value,label])=><div className="about-stat" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section>
    <section className="section section-white"><div className="shell"><div className="section-head"><div><Eyebrow>{t.capabilityEyebrow}</Eyebrow><h2>{t.capabilityTitle}</h2></div><p>{t.capabilityLead}</p></div><div className="about-capability-grid">{t.capabilities.map(([title,body,source,href],i)=><article className="about-capability-card" key={title}><span className="about-index">0{i+1}</span><h3>{title}</h3><p>{body}</p><a className="source" href={href} target="_blank" rel="noreferrer">{isZh?`來源：${source}`:`Source: ${source}`} <ArrowUpRight size={14}/></a></article>)}</div></div></section>
    <section className="section-compact"><div className="shell"><div className="section-head"><div><Eyebrow>{t.evidenceEyebrow}</Eyebrow><h2>{t.evidenceTitle}</h2></div></div><div className="about-evidence-grid about-evidence-grid-two">{t.evidence.map(([eyebrow,title,body,source,href])=><article className="trust-card" key={title}><Eyebrow>{eyebrow}</Eyebrow><h3>{title}</h3><p>{body}</p><a className="source" href={href} target="_blank" rel="noreferrer">{isZh?`來源：${source}`:`Source: ${source}`} ↗</a></article>)}</div><aside className="about-boundary"><h3>{t.boundaryTitle}</h3><ul>{t.boundaryItems.map(item=><li key={item}><Check size={18}/><span>{item}</span></li>)}</ul></aside></div></section>
    <CtaBand lang={lang}/>
  </SiteShell>;
}
