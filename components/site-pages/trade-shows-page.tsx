import { ArrowRight, ArrowUpRight, CalendarDays, MapPin, TicketCheck } from "lucide-react";
import Link from "@/components/site-link";
import { Lang, localPath } from "@/lib/site";
import { Breadcrumbs, CtaBand, Eyebrow, SiteShell } from "@/components/site-shell";

const copy = {
  en: {
    eyebrow: "Exhibitions & meetings",
    title: "Meet Yan Chuen at industry trade shows",
    intro: "A dedicated place for confirmed exhibition plans, booth details and traceable past listings—kept separate from the company profile so visitors can find meeting information quickly.",
    upcoming: "Upcoming exhibition",
    status: "Confirmed public listing",
    event: "electronicAsia 2026",
    date: "13–16 October 2026",
    venue: "Hong Kong Convention and Exhibition Centre",
    booth: "Booth 5B-A01 · Keyboards & Switches",
    body: "Yan Chuen’s Trade Shows page announces the event, and the current HKTDC exhibitor list independently lists Yan Chuen Company Limited at booth 5B-A01.",
    organizer: "Official exhibitor list",
    company: "Yan Chuen Trade Shows",
    prepareEyebrow: "Before the show",
    prepareTitle: "Bring enough context for a useful booth conversation",
    prepareLead: "A short project brief helps move the discussion from a general introduction to practical next steps.",
    prep: [
      ["Application", "What the component will be used for and its working environment."],
      ["Reference", "A drawing, sample, sketch or key dimensions—whichever is available."],
      ["Project stage", "Expected quantity, target timing and whether tooling already exists."],
    ],
    historyEyebrow: "Traceable history",
    historyTitle: "Recent electronicAsia listings",
    historyLead: "These records show exhibition presence only. They do not by themselves verify current production capability, certification or customer relationships.",
    years: [
      ["2025", "5B-A01", "HKTDC fair catalogue", "https://www.hktdc.com/event/electronicasia/wp-content/uploads/sites/25/2025/10/electronicAsia-2025-Fair-Catalogue.pdf"],
      ["2024", "5B-A03", "Yan Chuen public Trade Shows page", "https://www.yanchuen.com/general-5"],
      ["2023", "5B-A01", "Yan Chuen public Trade Shows page", "https://www.yanchuen.com/general-5"],
    ],
    discuss: "Cannot attend the show? Share the project requirements online and the team can continue the discussion directly.",
    discussCta: "Share project requirements",
  },
  zh: {
    eyebrow: "展覽與會面",
    title: "在行業展會與岩泉見面",
    intro: "集中展示已確認的參展安排、展位資訊與可追溯往屆紀錄；與公司介紹分開，讓訪客可以更快找到到訪及會面資料。",
    upcoming: "即將參展",
    status: "已有公開名單可查核",
    event: "electronicAsia 2026",
    date: "2026 年 10 月 13–16 日",
    venue: "香港會議展覽中心",
    booth: "展位 5B-A01 · 鍵盤及開關",
    body: "岩泉 Trade Shows 頁已公布參展安排，香港貿發局現行參展商名單亦獨立列出 Yan Chuen Company Limited 及同一展位。",
    organizer: "查看主辦方參展商名單",
    company: "查看岩泉 Trade Shows",
    prepareEyebrow: "到訪前準備",
    prepareTitle: "帶上足夠背景，讓展位溝通更有效",
    prepareLead: "一份簡短的項目資料，可以讓現場交流由公司介紹直接進入實際需求。",
    prep: [
      ["應用場景", "部件的實際用途、操作方式及預期使用環境。"],
      ["參考資料", "圖紙、樣品、草圖或關鍵尺寸，提供現階段已有的資料即可。"],
      ["項目階段", "預計數量、目標時間，以及目前是否已有模具。"],
    ],
    historyEyebrow: "可追溯紀錄",
    historyTitle: "近年 electronicAsia 參展資料",
    historyLead: "這些資料只用於說明參展紀錄，不等同現行生產能力、認證範圍或客戶關係的證明。",
    years: [
      ["2025", "5B-A01", "香港貿發局展會目錄", "https://www.hktdc.com/event/electronicasia/wp-content/uploads/sites/25/2025/10/electronicAsia-2025-Fair-Catalogue.pdf"],
      ["2024", "5B-A03", "岩泉公開 Trade Shows 頁", "https://www.yanchuen.com/general-5"],
      ["2023", "5B-A01", "岩泉公開 Trade Shows 頁", "https://www.yanchuen.com/general-5"],
    ],
    discuss: "未能到場？可先在線提交項目需求，再由團隊延續討論。",
    discussCta: "提交項目需求",
  },
} as const;

export function TradeShowsPage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const isZh = lang === "zh";

  return (
    <SiteShell lang={lang} path="/trade-shows">
      <Breadcrumbs lang={lang} items={[{ label: isZh ? "展覽信息" : "Trade shows" }]} />
      <section className="page-hero trade-page-hero">
        <div className="shell page-hero-grid">
          <div><Eyebrow>{t.eyebrow}</Eyebrow><h1 className="display-title">{t.title}</h1></div>
          <div className="page-hero-note"><p>{t.intro}</p></div>
        </div>
      </section>

      <section className="section trade-show-section trade-show-page-feature">
        <div className="shell trade-show-grid">
          <article className="trade-show-feature">
            <div className="trade-event-status"><span />{t.status}</div>
            <Eyebrow>{t.upcoming}</Eyebrow>
            <h2>{t.event}</h2>
            <div className="trade-show-meta">
              <strong><CalendarDays size={15} />{t.date}</strong>
              <span><MapPin size={15} />{t.venue}</span>
              <span><TicketCheck size={15} />{t.booth}</span>
            </div>
            <p>{t.body}</p>
            <div className="hero-actions">
              <a className="button button-light" href="https://www.hktdc.com/event/electronicasia/en/exhibitor-list" target="_blank" rel="noreferrer">{t.organizer}<ArrowUpRight size={16}/></a>
              <a className="button button-secondary trade-show-secondary" href="https://www.yanchuen.com/general-5" target="_blank" rel="noreferrer">{t.company}<ArrowUpRight size={16}/></a>
            </div>
          </article>
          <aside className="trade-visit-note">
            <Eyebrow>{t.prepareEyebrow}</Eyebrow>
            <h2>{t.prepareTitle}</h2>
            <p>{t.prepareLead}</p>
          </aside>
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <div className="trade-prep-grid">{t.prep.map(([title, body], index) => <article key={title}><span>0{index + 1}</span><h2>{title}</h2><p>{body}</p></article>)}</div>
        </div>
      </section>

      <section className="section-compact">
        <div className="shell">
          <div className="section-head"><div><Eyebrow>{t.historyEyebrow}</Eyebrow><h2>{t.historyTitle}</h2></div><p>{t.historyLead}</p></div>
          <div className="trade-history-grid">{t.years.map(([year, booth, source, href]) => <article key={year}><strong>{year}</strong><span>electronicAsia</span><b>{booth}</b><a href={href} target="_blank" rel="noreferrer">{source}<ArrowUpRight size={14}/></a></article>)}</div>
          <div className="trade-online-cta"><p>{t.discuss}</p><Link className="text-link" href={localPath(lang, "/request-a-quote")}>{t.discussCta}<ArrowRight size={15}/></Link></div>
        </div>
      </section>
      <CtaBand lang={lang} />
    </SiteShell>
  );
}
