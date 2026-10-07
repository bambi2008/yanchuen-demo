import { ContactPage } from "@/components/site-pages/contact-page";
import { metadataFor } from "@/lib/site";

export const metadata = metadataFor("聯絡岩泉｜香港聯絡方式", "電郵或致電岩泉香港辦事處，並準備訂製按鍵或橡膠組件項目資料。", "/contact", "zh");
export default function Page(){ return <ContactPage lang="zh"/>; }
