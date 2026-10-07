import { Lang } from "@/lib/site";
import { Breadcrumbs, CtaBand, Eyebrow, SiteShell } from "@/components/site-shell";

const copy = {
  en: {
    eyebrow: "Company overview",
    title: "About Yan Chuen",
    intro: "Company information and third-party coverage are kept here, separate from manufacturing and process content.",
    history: "Company record",
    historyTitle: "A Hong Kong company profile with a documented history",
    historyBody: "The Hong Kong Trade Development Council supplier profile lists Yan Chuen Co., Ltd. as established in 1992 and serving export markets. This demo treats those facts as public-record context—not a claim about customer count or market share.",
    channel: "Industry & channel coverage",
    channelTitle: "A traceable 2024 product introduction",
    channelBody: "Active Components published an article on 27 June 2024 introducing Yan Chuen custom keypads and overlays. It is presented as independent channel coverage, not as a customer testimonial.",
  },
  zh: {
    eyebrow: "公司概覽",
    title: "關於岩泉",
    intro: "公司資料與第三方報導集中放在這裡，與生產工序和製造內容清楚分開。",
    history: "公司資料",
    historyTitle: "有公開檔案可查核的香港公司歷史",
    historyBody: "香港貿發局供應商檔案列明岩泉有限公司成立於 1992 年並面向出口市場。本 Demo 只按公開檔案表述，不延伸為客戶數量或市場份額。",
    channel: "行業與渠道報導",
    channelTitle: "一篇可追溯的 2024 年產品介紹",
    channelBody: "Active Components 於 2024 年 6 月 27 日刊登文章，介紹岩泉的訂製按鍵與覆膜。這裡將其作為渠道報導，不包裝成客戶評價。",
  },
} as const;

export function AboutPage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const isZh = lang === "zh";

  return (
    <SiteShell lang={lang} path="/about">
      <Breadcrumbs lang={lang} items={[{ label: t.title }]} />
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div><Eyebrow>{t.eyebrow}</Eyebrow><h1 className="display-title">{t.title}</h1></div>
          <div className="page-hero-note"><p>{t.intro}</p></div>
        </div>
      </section>
      <section className="section-compact section-white">
        <div className="shell trust-grid">
          <article className="trust-card">
            <Eyebrow>{t.history}</Eyebrow>
            <h2>{t.historyTitle}</h2>
            <p>{t.historyBody}</p>
            <a className="source" href="https://sourcing.hktdc.com/en/Supplier-Store/Profile/Yan-Chuen-Co-Ltd/1X0008MQ" target="_blank" rel="noreferrer">{isZh ? "來源：香港貿發局供應商檔案 ↗" : "Source: HKTDC supplier profile ↗"}</a>
          </article>
          <article className="trust-card">
            <Eyebrow>{t.channel}</Eyebrow>
            <h2>{t.channelTitle}</h2>
            <p>{t.channelBody}</p>
            <a className="source" href="https://www.activecomponents.com/articles/news/1104" target="_blank" rel="noreferrer">{isZh ? "來源：Active Components 報導 ↗" : "Source: Active Components coverage ↗"}</a>
          </article>
        </div>
      </section>
      <CtaBand lang={lang} />
    </SiteShell>
  );
}
