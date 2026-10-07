import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { Lang, localPath, otherLanguagePath, pageCopy } from "@/lib/site";

type ShellProps = {
  lang: Lang;
  path: string;
  children: React.ReactNode;
  quietNav?: boolean;
};

export function SiteShell({ lang, path, children, quietNav = false }: ShellProps) {
  const t = pageCopy[lang];
  const isZh = lang === "zh";
  return (
    <div className="site-frame">
      <header className="site-header">
        <a className="skip-link" href="#main-content">
          {isZh ? "跳至主要内容" : "Skip to content"}
        </a>
        <div className="shell header-inner">
          <Link className="brand" href={localPath(lang)} aria-label={isZh ? "岩泉首页" : "Yan Chuen home"}>
            <Image
              src="/assets/yan-chuen-logo.webp"
              alt="Yan Chuen Co., Ltd."
              width={318}
              height={65}
              priority
            />
          </Link>
          {!quietNav && (
            <nav aria-label={isZh ? "主导航" : "Primary navigation"} className="desktop-nav">
              <Link href={localPath(lang, "/products")}>{t.products}</Link>
              <Link href={localPath(lang, "/design-guides/silicone-rubber-keypad")}>{t.guide}</Link>
              <Link href={`${localPath(lang)}#manufacturing`}>{t.manufacturing}</Link>
              <Link href={`${localPath(lang)}#about`}>{t.about}</Link>
            </nav>
          )}
          <div className="header-actions">
            <Link className="language-link" href={otherLanguagePath(lang, path)} hrefLang={isZh ? "en" : "zh-Hans"}>
              {t.language}
            </Link>
            {!quietNav && (
              <Link className="button button-small" href={localPath(lang, "/request-a-quote")}>
                {t.rfq}<ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            )}
          </div>
          {!quietNav && (
            <details className="mobile-menu">
              <summary aria-label={isZh ? "打开导航" : "Open navigation"}><Menu size={23} /></summary>
              <nav>
                <Link href={localPath(lang, "/products")}>{t.products}</Link>
                <Link href={localPath(lang, "/design-guides/silicone-rubber-keypad")}>{t.guide}</Link>
                <Link href={`${localPath(lang)}#manufacturing`}>{t.manufacturing}</Link>
                <Link href={`${localPath(lang)}#about`}>{t.about}</Link>
                <Link href={localPath(lang, "/request-a-quote")}>{t.rfq}</Link>
              </nav>
            </details>
          )}
        </div>
      </header>
      <main id="main-content">{children}</main>
      {!quietNav && <Footer lang={lang} />}
    </div>
  );
}

function Footer({ lang }: { lang: Lang }) {
  const isZh = lang === "zh";
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Image src="/assets/yan-chuen-logo.webp" alt="Yan Chuen Co., Ltd." width={280} height={58} />
          <p className="footer-intro">
            {isZh
              ? "为设备项目提供硅胶按键、薄膜按键及橡胶零件的定制讨论入口。"
              : "A practical starting point for custom keypad and rubber-component projects."}
          </p>
        </div>
        <div>
          <h2>{isZh ? "采购入口" : "Purchasing"}</h2>
          <Link href={localPath(lang, "/products")}>{isZh ? "浏览产品" : "Browse products"}</Link>
          <Link href={localPath(lang, "/design-guides/silicone-rubber-keypad")}>{isZh ? "硅胶按键设计指南" : "Silicone keypad design guide"}</Link>
          <Link href={localPath(lang, "/request-a-quote")}>{isZh ? "提交项目需求" : "Share project requirements"}</Link>
        </div>
        <div>
          <h2>{isZh ? "香港联络资料" : "Hong Kong contact"}</h2>
          <p>Yan Chuen Co., Ltd.</p>
          <p>Flat 1404, 14/F, Fo Tan Industrial Centre<br />26 Au Pui Wan Street, Fo Tan, Hong Kong</p>
          <a href="mailto:sales@yanchuen.com">sales@yanchuen.com</a>
          <a href="tel:+85226885011">+852 2688 5011</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Yan Chuen Co., Ltd.</span>
        <span>{isZh ? "私人提案 Demo · 资料来源见项目台账" : "Private proposal demo · Sources documented in project ledger"}</span>
      </div>
    </footer>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function Breadcrumbs({ lang, items }: { lang: Lang; items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs shell" aria-label={lang === "zh" ? "面包屑" : "Breadcrumb"}>
      <Link href={localPath(lang)}>{lang === "zh" ? "首页" : "Home"}</Link>
      {items.map((item) => (
        <span key={item.label}>
          <b aria-hidden="true">/</b>
          {item.href ? <Link href={localPath(lang, item.href)}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function CtaBand({ lang, product }: { lang: Lang; product?: string }) {
  const href = `${localPath(lang, "/request-a-quote")}${product ? `?product=${encodeURIComponent(product)}` : ""}`;
  return (
    <section className="shell cta-band">
      <div>
        <Eyebrow>{lang === "zh" ? "下一步" : "Next step"}</Eyebrow>
        <h2>{lang === "zh" ? "带着现有资料，或从一个想法开始" : "Bring a drawing—or start with an idea"}</h2>
        <p>{lang === "zh" ? "说明应用、结构、字符、触感或项目阶段；没有图纸也可以开始沟通。" : "Describe the application, construction, legends, feel or project stage. A drawing is helpful, not required."}</p>
      </div>
      <Link className="button button-light" href={href}>
        {lang === "zh" ? "提交项目需求" : "Share project requirements"}<ArrowUpRight size={17} />
      </Link>
    </section>
  );
}
