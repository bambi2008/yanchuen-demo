import { TradeShowsPage } from "@/components/site-pages/trade-shows-page";
import { metadataFor } from "@/lib/site";

export const metadata = metadataFor(
  "展覽信息｜與岩泉見面",
  "查看岩泉已確認的參展安排、展位資訊及近年 electronicAsia 紀錄。",
  "/trade-shows",
  "zh",
);

export default function Page() {
  return <TradeShowsPage lang="zh" />;
}
