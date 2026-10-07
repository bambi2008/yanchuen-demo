import Image from "next/image";
import Link from "next/link";
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
    productsEyebrow: "Product pathways",
    productsTitle: "Start with the part you need to specify",
    productsLead: "The first release goes deepest on silicone keypads, while keeping every verified product family discoverable and connected to a useful request path.",
    explore: "Explore this product",
    discuss: "Discuss this category",
    appsTitle: "Describe the requirement behind the application",
    appsLead: "Public application examples are a starting point—not proof of project certification. Specific performance and compliance requirements need project review.",
    manufacturingTitle: "Manufacturing information, organized around real process photos",
    manufacturingLead: "Yan Chuen's public site identifies rubber production facilities in Wan’an, Jiangxi and membrane production facilities in Huangjiang, Dongguan. Facility ownership and certification scope require client confirmation.",
    engineeringTitle: "Turn reference drawings into a working design conversation",
    engineeringBody: "The original site already contains useful construction, conductive-contact, artwork and force/stroke references. This demo makes them readable, searchable and correctly linked to the silicone-keypad topic.",
    history: "Company record",
    historyTitle: "A Hong Kong company profile with a documented history",
    historyBody: "The Hong Kong Trade Development Council supplier profile lists Yan Chuen Co., Ltd. as established in 1992 and serving export markets. This demo treats those facts as public-record context—not a claim about customer count or market share.",
    channel: "Industry & channel coverage",
    channelTitle: "A traceable 2024 product introduction",
    channelBody: "Active Components published an article on 27 June 2024 introducing Yan Chuen custom keypads and overlays. It is presented as independent channel coverage, not as a customer testimonial.",
  },
  zh: {
    eyebrow: "香港 · 定制输入组件",
    title: "为设备项目定制按键与橡胶组件",
    lead: "从硅胶按键、薄膜按键、橡胶零件与实用设计资料开始，向岩泉说明应用、结构与项目阶段。",
    quote: "提交项目需求",
    guide: "查看设计资料",
    rail: [
      ["按项目讨论", "结合实际应用确认可选工艺"],
      ["没有图纸也可开始", "可先提供草图、样品或需求说明"],
      ["工程参考资料", "涵盖结构、导电设计与装配问题"],
    ],
    productsEyebrow: "产品路径",
    productsTitle: "先从需要说明的部件开始",
    productsLead: "首版重点做深硅胶按键，同时保留所有已核实产品组合，并为每一类提供有效的需求入口。",
    explore: "查看产品详情",
    discuss: "讨论此类产品",
    appsTitle: "用应用需求帮助工程沟通",
    appsLead: "公开应用方向只用于帮助描述需求，不代表已满足某个项目的认证或性能要求；具体条件需按项目确认。",
    manufacturingTitle: "以真实工序照片说明制造信息",
    manufacturingLead: "岩泉公开网站列出江西万安橡胶生产设施与东莞黄江薄膜生产设施。设施权属与认证范围仍需由甲方确认。",
    engineeringTitle: "把参考图变成可用的设计沟通",
    engineeringBody: "原站已有结构、导电设计、图稿及力与行程等资料。本 Demo 将它们整理成可阅读、可定位、且正确关联硅胶按键主题的工程指南。",
    history: "公司资料",
    historyTitle: "有公开档案可复查的香港公司历史",
    historyBody: "香港贸发局供应商档案列明岩泉有限公司成立于 1992 年并面向出口市场。本 Demo 只按公开档案表述，不延伸为客户数量或市场份额。",
    channel: "行业与渠道报道",
    channelTitle: "一篇可追溯的 2024 年产品介绍",
    channelBody: "Active Components 于 2024 年 6 月 27 日发布文章，介绍岩泉的定制按键与覆膜。这里将其作为渠道报道，不包装成客户评价。",
  },
} as const;

export function HomePage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const isZh = lang === "zh";
  const products = [
    {
      title: isZh ? "硅胶按键" : "Silicone rubber keypads",
      body: isZh ? "围绕颜色、字符、导电触点、雕刻、包胶与表面处理讨论定制需求。" : "Discuss colors, legends, conductive contacts, engraving, overmolding and surface finishes.",
      image: "/assets/silicone-keypad-black.webp",
      alt: isZh ? "黑色多键硅胶按键样品" : "Black multi-key silicone keypad sample",
      href: localPath(lang, "/silicone-rubber-keypad"),
      cta: t.explore,
    },
    {
      title: isZh ? "薄膜按键" : "Membrane keypads",
      body: isZh ? "用于需要薄型图形覆膜与电路层配合的界面项目，具体结构按项目评估。" : "For interface projects combining a graphic overlay with a low-profile circuit construction.",
      image: "/assets/membrane-keypad.webp",
      alt: isZh ? "薄膜按键样品" : "Membrane keypad sample",
      href: `${localPath(lang, "/request-a-quote")}?product=membrane-keypad`,
      cta: t.discuss,
    },
    {
      title: isZh ? "橡胶零件" : "Rubber components",
      body: isZh ? "从形状、装配、材料环境与项目阶段开始，说明模压橡胶零件需求。" : "Start with geometry, assembly, operating environment and project stage for molded rubber parts.",
      image: "/assets/rubber-components.webp",
      alt: isZh ? "橡胶零件和密封件样品" : "Rubber component and seal samples",
      href: `${localPath(lang, "/products")}#rubber-parts`,
      cta: t.explore,
    },
  ];
  const applications = [
    [Factory, isZh ? "工业控制" : "Industrial controls", isZh ? "说明安装结构、操作方式、字符与预期环境。" : "Describe mounting, operation, legends and expected environment.", "industrial-controls"],
    [Landmark, isZh ? "支付终端" : "Payment terminals", isZh ? "讨论键位、触感、字符与装配空间。" : "Discuss key layout, tactile feel, legends and assembly space.", "payment-terminals"],
    [HeartPulse, isZh ? "医疗设备" : "Medical equipment", isZh ? "明确项目所需清洁、材料与合规要求，逐项确认。" : "State cleaning, material and compliance needs for project review.", "medical-equipment"],
    [RadioTower, isZh ? "电信设备" : "Telecom equipment", isZh ? "说明界面布局、导电方式与使用环境。" : "Describe interface layout, contact method and operating environment.", "telecom"],
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
            <Image src="/assets/hero-keypad-collection.webp" alt={isZh ? "多款硅胶与薄膜按键样品组合" : "Collection of silicone and membrane keypad samples"} fill priority sizes="(max-width: 980px) 100vw, 56vw" />
            <figcaption className="hero-caption"><strong>{isZh ? "岩泉公开网站展示的按键样品组合" : "Keypad samples shown on Yan Chuen's public website"}</strong><span>{isZh ? "产品图 · 仅作工艺参考" : "Product imagery · process reference"}</span></figcaption>
          </figure>
        </div>
        <div className="shell hero-rail">{t.rail.map(([a,b]) => <div key={a}><strong>{a}</strong><span>{b}</span></div>)}</div>
      </section>

      <section className="section shell">
        <div className="section-head"><div><Eyebrow>{t.productsEyebrow}</Eyebrow><h2>{t.productsTitle}</h2></div><p>{t.productsLead}</p></div>
        <div className="product-grid">{products.map((product) => <article className="product-card" key={product.title}><div className="image-wrap"><Image src={product.image} alt={product.alt} fill sizes="(max-width:720px) 100vw, 33vw" /></div><div className="card-copy"><h3>{product.title}</h3><p>{product.body}</p><Link className="text-link" href={product.href}>{product.cta}<ArrowRight size={15} /></Link></div></article>)}</div>
      </section>

      <section className="capability-strip"><div className="shell capability-grid">{(isZh ? [["多色基体","按项目确认颜色与结构"],["字符与图案","印刷、雕刻与图稿准备"],["导电设计","导电胶粒与触点形式"],["包胶组件","塑料或金属包胶样本"],["表面处理","PU、滴胶与其他样本"]] : [["Multi-color bases","Confirm color and construction"],["Legends & graphics","Printing, engraving and artwork"],["Conductive design","Carbon pills and contact formats"],["Overmolded parts","Plastic or metal insert samples"],["Surface finishes","PU, epoxy and other samples"]]).map(([a,b]) => <div key={a}><strong>{a}</strong><span>{b}</span></div>)}</div></section>

      <section className="section section-white"><div className="shell"><div className="section-head"><h2>{t.appsTitle}</h2><p>{t.appsLead}</p></div><div className="application-grid">{applications.map(([Icon,title,body,value]) => <article className="application-card" key={title}><Icon size={28} strokeWidth={1.7}/><h3>{title}</h3><p>{body}</p><Link className="text-link" href={`${localPath(lang,"/request-a-quote")}?application=${value}`}>{isZh ? "讨论此应用" : "Discuss this application"}<ArrowRight size={14}/></Link></article>)}</div></div></section>

      <section id="manufacturing" className="section section-dark"><div className="shell"><div className="section-head"><div><Eyebrow>{isZh ? "公开制造资料" : "Public manufacturing references"}</Eyebrow><h2>{t.manufacturingTitle}</h2></div><p>{t.manufacturingLead}</p></div><div className="manufacturing-grid"><figure className="manufacturing-main"><Image src="/assets/factory-production.webp" alt={isZh ? "公开工厂照片中的生产区域" : "Production area shown in the public factory gallery"} fill sizes="(max-width:980px) 100vw, 65vw"/><figcaption>{isZh ? "生产区域 · 原站公开照片" : "Production area · public-site photograph"}</figcaption></figure><div className="manufacturing-stack"><figure><Image src="/assets/factory-molding.webp" alt={isZh ? "橡胶成型生产区域" : "Rubber molding production area"} fill sizes="(max-width:980px) 100vw, 35vw"/><figcaption>{isZh ? "成型工序" : "Molding process"}</figcaption></figure><figure><Image src="/assets/factory-printing.webp" alt={isZh ? "印刷相关生产设备" : "Printing-related production equipment"} fill sizes="(max-width:980px) 100vw, 35vw"/><figcaption>{isZh ? "印刷工序" : "Printing process"}</figcaption></figure></div></div></div></section>

      <section className="section section-white"><div className="shell engineering-feature"><div className="engineering-visual"><Image src="/assets/guide-construction.webp" alt={isZh ? "硅胶按键基本结构参考图" : "Reference illustration of silicone keypad construction"} width={981} height={828}/></div><div className="engineering-copy"><Eyebrow>{isZh ? "设计资料" : "Design reference"}</Eyebrow><h2>{t.engineeringTitle}</h2><p>{t.engineeringBody}</p><ul className="check-list">{(isZh ? ["本页正确章节锚点，不再误连薄膜指南","保留原始技术图，正文可选择与阅读","每节说明买家应准备的项目资料"] : ["Correct in-page anchors for the silicone guide","Original diagrams paired with selectable text","A practical preparation prompt in every section"]).map(i => <li key={i}><Check size={18}/><span>{i}</span></li>)}</ul><Link className="button" href={localPath(lang,"/design-guides/silicone-rubber-keypad")}>{isZh ? "进入硅胶设计指南" : "Open the silicone design guide"}<ArrowRight size={16}/></Link></div></div></section>

      <section id="about" className="section shell"><div className="section-head"><div><Eyebrow>{isZh ? "可追溯的信任信息" : "Traceable trust signals"}</Eyebrow><h2>{isZh ? "用来源代替口号" : "Use sources instead of slogans"}</h2></div><p>{isZh ? "只展示能从公司网站、平台档案或报道核查的内容；未核实的认证范围、客户评价与增长数字不会出现在采购页面。" : "Only information traceable to company pages, public profiles or published coverage appears here. Unverified certification scope, testimonials and growth claims stay out."}</p></div><div className="trust-grid"><article className="trust-card"><Eyebrow>{t.history}</Eyebrow><h3>{t.historyTitle}</h3><p>{t.historyBody}</p><a className="source" href="https://sourcing.hktdc.com/en/Supplier-Store/Profile/Yan-Chuen-Co-Ltd/1X0008MQ" target="_blank" rel="noreferrer">{isZh ? "来源：香港贸发局供应商档案 ↗" : "Source: HKTDC supplier profile ↗"}</a></article><article className="trust-card"><Eyebrow>{t.channel}</Eyebrow><h3>{t.channelTitle}</h3><p>{t.channelBody}</p><a className="source" href="https://www.activecomponents.com/articles/news/1104" target="_blank" rel="noreferrer">{isZh ? "来源：Active Components 报道 ↗" : "Source: Active Components coverage ↗"}</a></article></div></section>
      <CtaBand lang={lang}/>
    </SiteShell>
  );
}
