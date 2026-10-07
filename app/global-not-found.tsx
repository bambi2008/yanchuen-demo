import Link from "@/components/site-link";
import "./globals.css";

export default function GlobalNotFound(){return <html lang="en"><body><main className="narrow section"><p className="eyebrow">404 · Page not found</p><h1 className="display-title">This path is not part of the demo.</h1><p className="lead">Return to the product journey or open the Traditional Chinese version.</p><div className="hero-actions"><Link className="button" href="/">English home</Link><Link className="button button-secondary" href="/zh">繁體中文首頁</Link></div></main></body></html>}
