import Image from "next/image";
import Link from "@/components/site-link";
import { ArrowRight, Check, Factory, HeartPulse, Landmark, RadioTower } from "lucide-react";
import { Lang, localPath } from "@/lib/site";
import { CtaBand, Eyebrow, SiteShell } from "@/components/site-shell";

const copy = {
  en: {
    eyebrow: "Custom input components · Hong Kong",
    title: "Custom keypads & rubber components for your next product",
    lead: "Explore silicone and membrane keypad options, rubber components and practical design references. Share your project requirements with Yan Chuen in Hong Kong.",
    quote: "Request a quote",
    guide: "Explore design references",
    rail: [
      ["Project-led discussion", "Options reviewed against your application"],
      ["Drawing optional", "Start with a sketch, sample or requirement"],
      ["Engineering references", "Construction, contact and assembly topics"],
    ],
    voicesEyebrow: "Customer feedback · content pending",
    voicesTitle: "A reserved space for attributable customer voices",
    voicesLead: "No public, attributable customer quotation was found during research. The copy below demonstrates the intended tone only and must be replaced with approved customer wording before launch.",
    voices: [
      "Communication around sample revisions was clear, with engineering questions confirmed item by item.",
      "The discussion covered artwork, tactile feel and assembly constraints in a practical way.",
      "During sample confirmation, feedback stayed specific to the product’s application conditions.",
    ],
    voiceLabel: "Sample copy · not a real testimonial",
    voiceMeta: "To add: customer name · role · company · project type · approval",
    voiceStatus: "Client action required: provide an approved quote and attribution before publication.",
    productsEyebrow: "Product pathways",
    productsTitle: "Start with the part you need to specify",
    productsLead: "The first release goes deepest on silicone keypads, while keeping every verified product family discoverable and connected to a useful request path.",
    explore: "Explore this product",
    discuss: "Discuss this category",
    appsTitle: "Describe the requirement behind the application",
    appsLead: "Public application examples are a starting point—not proof of project certification. Specific performance and compliance requirements need project review.",
    manufacturingTitle: "Manufacturing information, organized around real process photos",
    manufacturingLead: "Yan Chuen's public site identifies rubber production facilities in Wan’an, Jiangxi and membrane production facilities in Huangjiang, Dongguan. Facility ownership and certification scope require client confirmation.",
    rubberFactory: "Rubber factory tour",
    membraneFactory: "Membrane factory tour",
    factorySource: "Process names and photographs are reproduced from Yan Chuen’s public Factory Tour. Facility ownership, current equipment status and certification scope require client confirmation.",
    engineeringTitle: "Turn reference drawings into a working design conversation",
    engineeringBody: "The original site already contains useful construction, conductive-contact, artwork and force/stroke references. This demo makes them readable, searchable and correctly linked to the silicone-keypad topic.",
  },
  zh: {
    eyebrow: "香港 · 訂製輸入組件",
    title: "為設備項目訂製按鍵與橡膠組件",
    lead: "從矽膠按鍵、薄膜按鍵、橡膠零件與實用設計資料開始，向岩泉說明應用、結構與項目階段。",
    quote: "提交項目需求",
    guide: "查看設計資料",
    rail: [
      ["按項目討論", "結合實際應用確認可選工藝"],
      ["未有圖紙也可開始", "可先提供草圖、樣品或需求說明"],
      ["工程參考資料", "涵蓋結構、導電設計與裝配問題"],
    ],
    voicesEyebrow: "客戶評價 · 內容待確認",
    voicesTitle: "為可署名、可授權的真實客戶聲音預留位置",
    voicesLead: "本次資料搜集未找到可公開核實及署名的客戶原話。以下只示範建議語氣，正式上線前必須換成經客戶授權的內容。",
    voices: [
      "打樣修改的溝通清晰，工程問題能夠逐項確認。",
      "從圖稿、觸感到裝配限制，項目討論較為完整。",
      "樣品確認階段能圍繞實際應用條件提供具體回應。",
    ],
    voiceLabel: "示意文案 · 非真實客戶評價",
    voiceMeta: "待補：客戶姓名 · 職務 · 公司 · 項目類型 · 授權",
    voiceStatus: "甲方待辦：正式發布前提供客戶授權原話及署名資料。",
    productsEyebrow: "產品路徑",
    productsTitle: "先從需要說明的部件開始",
    productsLead: "首版重點做深矽膠按鍵，同時保留所有已核實產品組合，並為每一類提供有效的需求入口。",
    explore: "查看產品詳情",
    discuss: "討論此類產品",
    appsTitle: "用應用需求幫助工程溝通",
    appsLead: "公開應用方向只用於幫助描述需求，不代表已滿足某個項目的認證或性能要求；具體條件需按項目確認。",
    manufacturingTitle: "以真實工序照片說明製造資訊",
    manufacturingLead: "岩泉公開網站列出江西萬安橡膠生產設施與東莞黃江薄膜生產設施。設施權屬與認證範圍仍需由甲方確認。",
    rubberFactory: "橡膠工廠導覽",
    membraneFactory: "薄膜工廠導覽",
    factorySource: "工序名稱及照片取自岩泉公開 Factory Tour。設施權屬、設備現況與認證範圍仍需由甲方確認。",
    engineeringTitle: "把參考圖變成可用的設計溝通",
    engineeringBody: "原站已有結構、導電設計、圖稿及力與行程等資料。本 Demo 將它們整理成可閱讀、可定位、且正確關聯矽膠按鍵主題的工程指南。",
  },
} as const;

export function HomePage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const isZh = lang === "zh";
  const products = [
    {
      title: isZh ? "矽膠按鍵" : "Silicone rubber keypads",
      body: isZh ? "圍繞顏色、字樣、導電觸點、雕刻、包膠與表面處理討論訂製需求。" : "Discuss colors, legends, conductive contacts, engraving, overmolding and surface finishes.",
      image: "/assets/silicone-keypad-black.webp",
      alt: isZh ? "黑色多鍵矽膠按鍵樣品" : "Black multi-key silicone keypad sample",
      href: localPath(lang, "/silicone-rubber-keypad"),
      cta: t.explore,
    },
    {
      title: isZh ? "薄膜按鍵" : "Membrane keypads",
      body: isZh ? "適合需要薄型圖形覆膜與電路層配合的介面項目，具體結構按項目評估。" : "For interface projects combining a graphic overlay with a low-profile circuit construction.",
      image: "/assets/membrane-keypad.webp",
      alt: isZh ? "薄膜按鍵樣品" : "Membrane keypad sample",
      href: `${localPath(lang, "/request-a-quote")}?product=membrane-keypad`,
      cta: t.discuss,
    },
    {
      title: isZh ? "橡膠零件" : "Rubber components",
      body: isZh ? "從形狀、裝配、材料環境與項目階段開始，說明模壓橡膠零件需求。" : "Start with geometry, assembly, operating environment and project stage for molded rubber parts.",
      image: "/assets/rubber-components.webp",
      alt: isZh ? "橡膠零件和密封件樣品" : "Rubber component and seal samples",
      href: `${localPath(lang, "/products")}#rubber-parts`,
      cta: t.explore,
    },
  ];
  const applications = [
    [Factory, isZh ? "工業控制" : "Industrial controls", isZh ? "說明安裝結構、操作方式、字樣與預期環境。" : "Describe mounting, operation, legends and expected environment.", "industrial-controls"],
    [Landmark, isZh ? "支付終端" : "Payment terminals", isZh ? "討論鍵位、觸感、字樣與裝配空間。" : "Discuss key layout, tactile feel, legends and assembly space.", "payment-terminals"],
    [HeartPulse, isZh ? "醫療設備" : "Medical equipment", isZh ? "明確項目所需清潔、材料與合規要求，逐項確認。" : "State cleaning, material and compliance needs for project review.", "medical-equipment"],
    [RadioTower, isZh ? "電訊設備" : "Telecom equipment", isZh ? "說明介面配置、導電方式與使用環境。" : "Describe interface layout, contact method and operating environment.", "telecom"],
  ] as const;
  const capabilities = isZh
    ? [["多色基體","按項目確認顏色與結構"],["字樣與圖案","印刷、雕刻與圖稿準備"],["導電設計","導電膠粒與觸點形式"],["包膠組件","塑膠或金屬包膠樣本"],["表面處理","PU、滴膠與其他樣本"]]
    : [["Multi-color bases","Confirm color and construction"],["Legends & graphics","Printing, engraving and artwork"],["Conductive design","Carbon pills and contact formats"],["Overmolded parts","Plastic or metal insert samples"],["Surface finishes","PU, epoxy and other samples"]];
  const rubberFactory = [
    ["/assets/factory-mixing.webp", isZh ? "材料混煉" : "Material mixing / blending"],
    ["/assets/factory-lim.webp", isZh ? "液態矽膠注射成型" : "Liquid injection molding"],
    ["/assets/factory-coating.webp", isZh ? "塗層工序" : "Coating"],
    ["/assets/factory-laser.webp", isZh ? "雷射雕刻" : "Laser etching"],
    ["/assets/factory-tooling.webp", isZh ? "模具車間" : "Tooling workshop"],
    ["/assets/factory-molding.webp", isZh ? "壓縮成型" : "Compression molding"],
    ["/assets/factory-printing.webp", isZh ? "絲網印刷" : "Silkscreen printing"],
    ["/assets/factory-oven.webp", isZh ? "塗層烘爐工段" : "Coating oven section"],
    ["/assets/factory-epoxy.webp", isZh ? "滴膠／環氧塗層" : "Epoxy coating"],
  ] as const;
  const membraneFactory = [
    ["/assets/factory-membrane-printing.webp", isZh ? "薄膜印刷" : "Membrane printing"],
    ["/assets/factory-auto-placement.webp", isZh ? "PET 電路自動貼裝" : "Auto placement on PET circuit"],
    ["/assets/factory-die-cut.webp", isZh ? "模切沖壓" : "Die-cut punching"],
    ["/assets/factory-lamination.webp", isZh ? "膠帶貼合" : "Adhesive lamination"],
    ["/assets/factory-embossing.webp", isZh ? "壓凸成型" : "Embossing"],
    ["/assets/factory-punching.webp", isZh ? "沖壓車間" : "Punching / pressing"],
  ] as const;
  return (
    <SiteShell lang={lang} path="/">
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h1 className="display-title">{t.title}</h1>
            <p className="lead">{t.lead}</p>
            <div className="hero-actions">
              <Link className="button" href={localPath(lang, "/request-a-quote")}>{t.quote}<ArrowRight size={17} /></Link>
              <Link className="button button-secondary" href={localPath(lang, "/design-guides/silicone-rubber-keypad")}>{t.guide}</Link>
            </div>
          </div>
          <figure className="hero-visual">
            <Image src="/assets/hero-keypad-collection.webp" alt={isZh ? "多款矽膠與薄膜按鍵樣品組合" : "Collection of silicone and membrane keypad samples"} fill priority sizes="(max-width: 980px) 100vw, 56vw" />
            <figcaption className="hero-caption"><strong>{isZh ? "岩泉公開網站展示的按鍵樣品組合" : "Keypad samples shown on Yan Chuen's public website"}</strong><span>{isZh ? "產品圖 · 僅作工藝參考" : "Product imagery · process reference"}</span></figcaption>
          </figure>
        </div>
        <div className="shell hero-rail">{t.rail.map(([a,b]) => <div key={a}><strong>{a}</strong><span>{b}</span></div>)}</div>
      </section>

      <section className="voice-preview">
        <div className="shell">
          <div className="voice-head"><div><Eyebrow>{t.voicesEyebrow}</Eyebrow><h2>{t.voicesTitle}</h2></div><p>{t.voicesLead}</p></div>
          <div className="voice-grid">{t.voices.map((quote)=><article className="voice-card" key={quote}><span>{t.voiceLabel}</span><blockquote>“{quote}”</blockquote><p>{t.voiceMeta}</p></article>)}</div>
          <p className="voice-status">{t.voiceStatus}</p>
        </div>
      </section>

      <section className="section shell">
        <div className="section-head"><div><Eyebrow>{t.productsEyebrow}</Eyebrow><h2>{t.productsTitle}</h2></div><p>{t.productsLead}</p></div>
        <div className="product-grid">{products.map((product) => <article className="product-card" key={product.title}><div className="image-wrap"><Image src={product.image} alt={product.alt} fill sizes="(max-width:720px) 100vw, 33vw" /></div><div className="card-copy"><h3>{product.title}</h3><p>{product.body}</p><Link className="text-link" href={product.href}>{product.cta}<ArrowRight size={15} /></Link></div></article>)}</div>
      </section>

      <section className="capability-strip" aria-label={isZh ? "可討論的訂製方向" : "Customization topics"}>
        <div className="capability-marquee">
          {[0,1].map((set) => <div className="capability-grid" aria-hidden={set === 1} key={set}>{capabilities.map(([a,b]) => <div key={`${set}-${a}`}><strong>{a}</strong><span>{b}</span></div>)}</div>)}
        </div>
      </section>

      <section className="section section-white"><div className="shell"><div className="section-head"><h2>{t.appsTitle}</h2><p>{t.appsLead}</p></div><div className="application-grid">{applications.map(([Icon,title,body,value]) => <article className="application-card" key={title}><Icon size={28} strokeWidth={1.7}/><h3>{title}</h3><p>{body}</p><Link className="text-link" href={`${localPath(lang,"/request-a-quote")}?application=${value}`}>{isZh ? "討論此應用" : "Discuss this application"}<ArrowRight size={14}/></Link></article>)}</div></div></section>

      <section id="manufacturing" className="section section-dark"><div className="shell"><div className="section-head"><div><Eyebrow>{isZh ? "公開製造資料" : "Public manufacturing references"}</Eyebrow><h2>{t.manufacturingTitle}</h2></div><p>{t.manufacturingLead}</p></div><div className="manufacturing-grid"><figure className="manufacturing-main"><Image src="/assets/factory-production.webp" alt={isZh ? "公開工廠照片中的生產區域" : "Production area shown in the public factory gallery"} fill sizes="(max-width:980px) 100vw, 65vw"/><figcaption>{isZh ? "生產區域 · 原站公開照片" : "Production area · public-site photograph"}</figcaption></figure><div className="manufacturing-stack"><figure><Image src="/assets/factory-molding.webp" alt={isZh ? "橡膠成型生產區域" : "Rubber molding production area"} fill sizes="(max-width:980px) 100vw, 35vw"/><figcaption>{isZh ? "成型工序" : "Molding process"}</figcaption></figure><figure><Image src="/assets/factory-printing.webp" alt={isZh ? "印刷相關生產設備" : "Printing-related production equipment"} fill sizes="(max-width:980px) 100vw, 35vw"/><figcaption>{isZh ? "印刷工序" : "Printing process"}</figcaption></figure></div></div><div className="factory-tour-head"><h3>{t.rubberFactory}</h3><a href="https://www.yanchuen.com/projects-2" target="_blank" rel="noreferrer">{isZh?"查看原站 Factory Tour ↗":"Open original Factory Tour ↗"}</a></div><div className="factory-tour-grid">{rubberFactory.map(([src,label])=><figure key={src}><Image src={src} alt={label} fill sizes="(max-width:720px) 50vw, 25vw"/><figcaption>{label}</figcaption></figure>)}</div><div className="factory-tour-head"><h3>{t.membraneFactory}</h3></div><div className="factory-tour-grid factory-tour-grid-membrane">{membraneFactory.map(([src,label])=><figure key={src}><Image src={src} alt={label} fill sizes="(max-width:720px) 50vw, 25vw"/><figcaption>{label}</figcaption></figure>)}</div><p className="factory-source-note">{t.factorySource}</p></div></section>

      <section className="section section-white"><div className="shell engineering-feature"><div className="engineering-visual"><Image src="/assets/guide-construction.webp" alt={isZh ? "矽膠按鍵基本結構參考圖" : "Reference illustration of silicone keypad construction"} width={981} height={828}/></div><div className="engineering-copy"><Eyebrow>{isZh ? "設計資料" : "Design reference"}</Eyebrow><h2>{t.engineeringTitle}</h2><p>{t.engineeringBody}</p><ul className="check-list">{(isZh ? ["本頁正確章節錨點，不再誤連薄膜指南","保留原始技術圖，正文可選擇與閱讀","每節說明買家應準備的項目資料"] : ["Correct in-page anchors for the silicone guide","Original diagrams paired with selectable text","A practical preparation prompt in every section"]).map(i => <li key={i}><Check size={18}/><span>{i}</span></li>)}</ul><Link className="button" href={localPath(lang,"/design-guides/silicone-rubber-keypad")}>{isZh ? "進入矽膠設計指南" : "Open the silicone design guide"}<ArrowRight size={16}/></Link></div></div></section>

      <CtaBand lang={lang}/>
    </SiteShell>
  );
}
