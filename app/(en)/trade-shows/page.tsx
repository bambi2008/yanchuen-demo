import { TradeShowsPage } from "@/components/site-pages/trade-shows-page";
import { metadataFor } from "@/lib/site";

export const metadata = metadataFor(
  "Trade Shows | Meet Yan Chuen",
  "View confirmed Yan Chuen exhibition details, booth information and recent electronicAsia records.",
  "/trade-shows",
  "en",
);

export default function Page() {
  return <TradeShowsPage lang="en" />;
}
