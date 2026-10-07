import { RfqPage } from "@/components/site-pages/rfq-page"; import { metadataFor } from "@/lib/site";
export const metadata=metadataFor("提交訂製按鍵與橡膠零件需求｜岩泉","有圖紙或未有圖紙都可說明訂製按鍵與橡膠零件項目。本私人 Demo 不會傳送需求。","/request-a-quote","zh");
const first=(v:string|string[]|undefined)=>Array.isArray(v)?v[0]:v;
export default async function Page({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){const p=await searchParams;return <RfqPage lang="zh" product={first(p.product)} application={first(p.application)} topic={first(p.topic)}/>}
