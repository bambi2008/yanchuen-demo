"use client";

import { FormEvent, useRef, useState } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import type { Lang } from "@/lib/site";

type Props={lang:Lang;defaultProduct?:string;defaultApplication?:string;defaultTopic?:string};
type Errors=Record<string,string>;
type Summary={company:string;product:string;stage:string;application:string;quantity:string;files:number};
const allowed=["application/pdf","image/png","image/jpeg"];
const maxBytes=10*1024*1024;

export function RfqForm({lang,defaultProduct="",defaultApplication="",defaultTopic=""}:Props){
  const z=lang==="zh";
  const [files,setFiles]=useState<File[]>([]);
  const [errors,setErrors]=useState<Errors>({});
  const [busy,setBusy]=useState(false);
  const [summary,setSummary]=useState<Summary|null>(null);
  const inputRef=useRef<HTMLInputElement>(null);
  const copy=z?{
    contact:"联络资料",contactHelp:"必填项只用于完成本次浏览器内演示，不会发送。",project:"项目资料",projectHelp:"有图纸或没有图纸都可填写。",company:"公司",email:"工作邮箱",name:"联系人",phone:"电话",country:"国家 / 地区",product:"产品类别",application:"应用",stage:"项目阶段",quantity:"预计数量",timeline:"目标时间",requirements:"需求说明",attachments:"参考图 / 图纸",fileHelp:"PDF / PNG / JPG；每个不超过 10MB，最多 3 个。文件只在本页内校验和显示。",choose:"选择文件",remove:"移除",submit:"完成演示提交",sending:"正在生成演示结果…",privacy:"不会上传附件，也不会把联系人、邮箱、电话、需求或文件名写入 URL、长期存储或分析事件。",required:"请填写此项",emailError:"请输入有效邮箱格式",fileType:"只支持 PDF、PNG 或 JPG",fileSize:"每个文件不能超过 10MB",fileCount:"最多选择 3 个文件",done:"演示已完成，需求未发送",doneBody:"以下摘要只存在于当前页面内。正式网站需要另行配置安全接收、持久化、同意和真实 generate_lead 事件。",again:"填写另一个虚拟需求",summary:"本次虚拟需求摘要"
  }:{contact:"Contact details",contactHelp:"Required details are used only to complete this in-browser demo and are not sent.",project:"Project details",projectHelp:"Works with or without a drawing.",company:"Company",email:"Work email",name:"Contact name",phone:"Phone",country:"Country / region",product:"Product category",application:"Application",stage:"Project stage",quantity:"Estimated quantity",timeline:"Target timing",requirements:"Project requirements",attachments:"Reference images / drawings",fileHelp:"PDF / PNG / JPG; up to 10MB each, maximum 3. Files are validated and displayed only on this page.",choose:"Choose files",remove:"Remove",submit:"Complete demo request",sending:"Preparing demo result…",privacy:"Attachments are not uploaded. Contact details, requirements and filenames are not placed in URLs, long-term storage or analytics events.",required:"This field is required",emailError:"Enter a valid email format",fileType:"Use PDF, PNG or JPG files only",fileSize:"Each file must be 10MB or smaller",fileCount:"Choose no more than 3 files",done:"Demo complete—nothing was sent",doneBody:"This summary exists only on the current page. A production site still needs secure receipt, storage, consent and a real generate_lead event.",again:"Enter another virtual request",summary:"Virtual request summary"};
  function addFiles(next:FileList|null){
    if(!next)return;
    const candidates=[...files,...Array.from(next)]; const e:Errors={...errors}; delete e.files;
    if(candidates.length>3)e.files=copy.fileCount;
    else if(candidates.some(f=>!allowed.includes(f.type)))e.files=copy.fileType;
    else if(candidates.some(f=>f.size>maxBytes))e.files=copy.fileSize;
    else setFiles(candidates);
    setErrors(e); if(inputRef.current)inputRef.current.value="";
  }
  function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault(); if(busy)return;
    const form=event.currentTarget; const fd=new FormData(form); const e:Errors={};
    for(const key of ["company","email","product","requirements"]){if(!String(fd.get(key)||"").trim())e[key]=copy.required;}
    const email=String(fd.get("email")||""); if(email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))e.email=copy.emailError;
    if(Object.keys(e).length){setErrors(e);const first=form.querySelector<HTMLElement>(`[name="${Object.keys(e)[0]}"]`);first?.focus();return;}
    setErrors({}); setBusy(true);
    const safe:Summary={company:String(fd.get("company")),product:String(fd.get("product")),stage:String(fd.get("stage")||"—"),application:String(fd.get("application")||"—"),quantity:String(fd.get("quantity")||"—"),files:files.length};
    window.setTimeout(()=>{setSummary(safe);setBusy(false);window.dispatchEvent(new CustomEvent("demo_rfq_complete",{detail:{product:safe.product,stage:safe.stage,hasAttachments:safe.files>0}}));},650);
  }
  if(summary)return <section className="success-panel" aria-live="polite"><CheckCircle2 size={34}/><h2>{copy.done}</h2><p>{copy.doneBody}</p><h3>{copy.summary}</h3><ul className="summary-list"><li><strong>{copy.company}</strong><span>{summary.company}</span></li><li><strong>{copy.product}</strong><span>{summary.product}</span></li><li><strong>{copy.application}</strong><span>{summary.application}</span></li><li><strong>{copy.stage}</strong><span>{summary.stage}</span></li><li><strong>{copy.quantity}</strong><span>{summary.quantity}</span></li><li><strong>{copy.attachments}</strong><span>{summary.files}</span></li></ul><button className="button" type="button" onClick={()=>{setSummary(null);setFiles([])}}>{copy.again}</button></section>;
  const err=(name:string)=>errors[name]?<span id={`${name}-error`} className="field-error" role="alert">{errors[name]}</span>:null;
  return <form className="rfq-form" onSubmit={submit} noValidate>
    <section className="form-section"><h2>{copy.contact}</h2><p>{copy.contactHelp}</p><div className="field-grid">
      <div className="field"><label htmlFor="company">{copy.company} <span className="required">*</span></label><input id="company" name="company" autoComplete="organization" aria-invalid={!!errors.company} aria-describedby={errors.company?"company-error":undefined}/>{err("company")}</div>
      <div className="field"><label htmlFor="email">{copy.email} <span className="required">*</span></label><input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email?"email-error":undefined}/>{err("email")}</div>
      <div className="field"><label htmlFor="name">{copy.name}</label><input id="name" name="name" autoComplete="name"/></div>
      <div className="field"><label htmlFor="phone">{copy.phone}</label><input id="phone" name="phone" type="tel" autoComplete="tel"/></div>
      <div className="field field-full"><label htmlFor="country">{copy.country}</label><input id="country" name="country" autoComplete="country-name"/></div>
    </div></section>
    <section className="form-section"><h2>{copy.project}</h2><p>{copy.projectHelp}</p><div className="field-grid">
      <div className="field"><label htmlFor="product">{copy.product} <span className="required">*</span></label><select id="product" name="product" defaultValue={defaultProduct} aria-invalid={!!errors.product} aria-describedby={errors.product?"product-error":undefined}><option value="">{z?"请选择":"Select a category"}</option><option value="silicone-rubber-keypad">{z?"硅胶按键":"Silicone rubber keypad"}</option><option value="membrane-keypad">{z?"薄膜按键":"Membrane keypad"}</option><option value="rubber-parts">{z?"橡胶零件":"Rubber parts"}</option><option value="keypad-assembly">{z?"按键套件 / 组件":"Keypad kit / assembly"}</option><option value="elastomeric-connector">{z?"弹性导电连接件":"Elastomeric connector"}</option><option value="silicone-tubing">{z?"硅胶管":"Silicone tubing"}</option><option value="other">{z?"其他":"Other"}</option></select>{err("product")}</div>
      <div className="field"><label htmlFor="application">{copy.application}</label><input id="application" name="application" defaultValue={defaultApplication}/></div>
      <div className="field"><label htmlFor="stage">{copy.stage}</label><select id="stage" name="stage" defaultValue="exploring"><option value="exploring">Exploring options</option><option value="design-in-progress">Design in progress</option><option value="ready-for-quotation">Ready for quotation</option><option value="other">Other</option></select></div>
      <div className="field"><label htmlFor="quantity">{copy.quantity}</label><input id="quantity" name="quantity" inputMode="numeric"/></div>
      <div className="field field-full"><label htmlFor="timeline">{copy.timeline}</label><input id="timeline" name="timeline"/></div>
      <div className="field field-full"><label htmlFor="requirements">{copy.requirements} <span className="required">*</span></label><textarea id="requirements" name="requirements" defaultValue={defaultTopic?`${z?"希望讨论的设计主题":"Design topic to discuss"}: ${defaultTopic}\n`:""} aria-invalid={!!errors.requirements} aria-describedby={errors.requirements?"requirements-error requirements-help":"requirements-help"}/><span id="requirements-help" className="field-help">{z?"可说明应用、尺寸或结构、字符、触感、环境与项目阶段。":"Describe application, dimensions or construction, legends, feel, environment and project stage."}</span>{err("requirements")}</div>
      <div className="field field-full"><label htmlFor="files">{copy.attachments}</label><div className="upload-box"><input ref={inputRef} id="files" type="file" accept=".pdf,.png,.jpg,.jpeg,application/pdf,image/png,image/jpeg" multiple onChange={e=>addFiles(e.target.files)}/><p className="field-help">{copy.fileHelp}</p>{err("files")}<div className="file-list">{files.map((f,i)=><div className="file-item" key={`${f.name}-${f.size}-${i}`}><span>{f.name} · {(f.size/1024/1024).toFixed(1)}MB</span><button type="button" onClick={()=>setFiles(files.filter((_,x)=>x!==i))}>{copy.remove}</button></div>)}</div></div></div>
    </div></section>
    <div className="submit-row"><p className="privacy-note">{copy.privacy}</p><button className="button" type="submit" disabled={busy}>{busy?<><LoaderCircle size={17} className="animate-spin"/>{copy.sending}</>:copy.submit}</button></div>
  </form>;
}
