import { RfqPage } from "@/components/site-pages/rfq-page"; import { metadataFor } from "@/lib/site";
export const metadata=metadataFor("Request a Custom Keypad Quote | Yan Chuen","Describe a custom keypad or rubber-component project with or without a drawing. This private demo does not send requests.","/request-a-quote","en");
const first=(v:string|string[]|undefined)=>Array.isArray(v)?v[0]:v;
export default async function Page({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){const p=await searchParams;return <RfqPage lang="en" product={first(p.product)} application={first(p.application)} topic={first(p.topic)}/>}
