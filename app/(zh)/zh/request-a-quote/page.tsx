import { RfqPage } from "@/components/site-pages/rfq-page"; import { metadataFor } from "@/lib/site";
export const metadata=metadataFor("提交定制按键与橡胶零件需求｜岩泉","有图纸或没有图纸都可说明定制按键与橡胶零件项目。本私人 Demo 不会发送需求。","/request-a-quote","zh");
const first=(v:string|string[]|undefined)=>Array.isArray(v)?v[0]:v;
export default async function Page({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){const p=await searchParams;return <RfqPage lang="zh" product={first(p.product)} application={first(p.application)} topic={first(p.topic)}/>}
