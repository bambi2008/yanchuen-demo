import type { Metadata } from "next";

export type Lang = "en" | "zh";

export const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://yanchuen-demo.example";

export const pageCopy = {
  en: {
    products: "Products",
    guide: "Design guide",
    manufacturing: "Manufacturing",
    tradeShows: "Trade shows",
    about: "About",
    contact: "Contact",
    admin: "Admin Demo",
    rfq: "Request a quote",
    language: "繁中",
  },
  zh: {
    products: "產品",
    guide: "設計指南",
    manufacturing: "生產工序",
    tradeShows: "展覽信息",
    about: "關於岩泉",
    contact: "聯絡方式",
    admin: "後台 Demo",
    rfq: "提交需求",
    language: "EN",
  },
} as const;

export function localPath(lang: Lang, path = "/") {
  if (lang === "en") return path;
  return path === "/" ? "/zh" : `/zh${path}`;
}

export function otherLanguagePath(lang: Lang, path: string) {
  if (lang === "en") return path === "/" ? "/zh" : `/zh${path}`;
  return path === "/" ? "/" : path;
}

export function metadataFor(
  title: string,
  description: string,
  path: string,
  lang: Lang,
): Metadata {
  const url = `${siteOrigin}${localPath(lang, path)}`;
  return {
    title,
    description,
    metadataBase: new URL(siteOrigin),
    robots: { index: false, follow: false, noarchive: true },
    alternates: {
      canonical: url,
      languages: {
        en: `${siteOrigin}${path}`,
        "zh-Hant": `${siteOrigin}${path === "/" ? "/zh" : `/zh${path}`}`,
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: "Yan Chuen",
      locale: lang === "en" ? "en_US" : "zh_HK",
      images: [
        {
          url: "/assets/hero-keypad-collection.webp",
          width: 1600,
          height: 673,
          alt: lang === "en" ? "Yan Chuen keypad samples" : "岩泉按鍵樣品",
        },
      ],
    },
  };
}

export const baseMetadata: Metadata = {
  title: { default: "Yan Chuen | Custom Keypads & Rubber Components", template: "%s" },
  description:
    "Explore custom silicone and membrane keypads, rubber components and practical design references from Yan Chuen.",
  robots: { index: false, follow: false, noarchive: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
