import Image from "next/image";
import Link from "@/components/site-link";
import { ArrowLeft, BarChart3, Database, FileText, LockKeyhole, MousePointerClick, Users } from "lucide-react";

const days = [42, 54, 47, 69, 62, 78, 71, 88, 75, 93, 82, 104, 91, 112];
const pages = [["首頁 /zh", "38%"], ["矽膠按鍵", "24%"], ["產品總覽", "17%"], ["設計指南", "13%"], ["聯絡方式", "8%"]];
const sources = [["自然搜尋", 44], ["直接到訪", 31], ["引薦網站", 16], ["其他／未識別", 9]];

export function AdminDashboard(){
  return <div className="admin-shell">
    <header className="admin-header"><Image src="/assets/yan-chuen-logo.webp" alt="Yan Chuen Co., Ltd." width={250} height={52}/><div><span className="admin-pill">私人 Demo</span><Link href="/zh"><ArrowLeft size={15}/>返回網站</Link></div></header>
    <main className="admin-main">
      <section className="admin-title"><div><p>到訪與詢盤統計</p><h1>網站營運概覽</h1></div><aside><strong>示例數據 · 尚未接入真實追蹤</strong><span>目前沒有 D1 資料庫、管理員角色或同意管理；以下數字只用於確認後台資訊架構。</span></aside></section>
      <section className="admin-metrics">
        <article><Users/><span>到訪工作階段</span><strong>1,247</strong><small>示例 · 最近 28 日</small></article>
        <article><MousePointerClick/><span>產品／需求按鈕點擊</span><strong>96</strong><small>示例 · 7.7% 點擊率</small></article>
        <article><FileText/><span>完成詢盤</span><strong>18</strong><small>示例 · 未連接收件端</small></article>
        <article><BarChart3/><span>到訪 → 詢盤</span><strong>1.44%</strong><small>示例 · 待定義正式口徑</small></article>
      </section>
      <section className="admin-grid">
        <article className="admin-panel admin-trend"><div className="admin-panel-head"><div><span>到訪趨勢</span><h2>最近 14 日</h2></div><em>示例</em></div><div className="admin-bars">{days.map((value,i)=><i key={i} style={{height:`${value/1.2}%`}} title={`示例：${value}`}/>)}</div><div className="admin-axis"><span>14 日前</span><span>今天</span></div></article>
        <article className="admin-panel"><div className="admin-panel-head"><div><span>热门页面</span><h2>按到访占比</h2></div><em>示例</em></div><ol className="admin-list">{pages.map(([name,value],i)=><li key={name}><b>{i+1}</b><span>{name}</span><strong>{value}</strong></li>)}</ol></article>
        <article className="admin-panel"><div className="admin-panel-head"><div><span>流量来源</span><h2>工作阶段来源</h2></div><em>示例</em></div><div className="admin-sources">{sources.map(([name,value])=><div key={name}><p><span>{name}</span><strong>{value}%</strong></p><i><b style={{width:`${value}%`}}/></i></div>)}</div></article>
        <article className="admin-panel"><div className="admin-panel-head"><div><span>询盘漏斗</span><h2>从到访到提交</h2></div><em>示例</em></div><div className="admin-funnel"><div style={{width:"100%"}}>1,247 到訪</div><div style={{width:"72%"}}>312 需求頁瀏覽</div><div style={{width:"48%"}}>96 開始填寫</div><div style={{width:"28%"}}>18 完成詢盤</div></div></article>
      </section>
      <section className="admin-audit"><div><p>原站功能审计</p><h2>Wix 已具备平台级统计与询盘后台</h2><span>公开页面确认原站使用 Wix 资源并包含中英询盘表单。Wix 官方说明其站点发布后自动启用 Analytics，并在 Forms & Submissions 中保存表单记录；但是否有历史数据、通知规则和账号权限，必须由甲方登录后台核实。</span></div><ul><li><Database/><span><strong>需要甲方导出</strong>Wix Analytics、表单提交及联系人数据</span></li><li><LockKeyhole/><span><strong>新站上线前</strong>配置数据库、管理员权限、Cookie/同意机制与数据保留规则</span></li><li><BarChart3/><span><strong>建议事件</strong>page_view、contact_click、whatsapp_click、rfq_start、generate_lead</span></li></ul></section>
    </main>
  </div>;
}
