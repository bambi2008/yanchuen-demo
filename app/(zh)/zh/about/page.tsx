import { AboutPage } from "@/components/site-pages/about-page";
import { metadataFor } from "@/lib/site";

export const metadata = metadataFor(
  "關於岩泉｜公司資料",
  "查看岩泉有限公司的可追溯公司資料與第三方報導。",
  "/about",
  "zh",
);

export default function Page() {
  return <AboutPage lang="zh" />;
}
