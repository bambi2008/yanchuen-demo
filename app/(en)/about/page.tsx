import { AboutPage } from "@/components/site-pages/about-page";
import { metadataFor } from "@/lib/site";

export const metadata = metadataFor(
  "About Yan Chuen | Company Information",
  "Review traceable company information and independent coverage about Yan Chuen Co., Ltd.",
  "/about",
  "en",
);

export default function Page() {
  return <AboutPage lang="en" />;
}
