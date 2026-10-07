import type { Metadata } from "next";
import { AdminDashboard } from "@/components/admin-dashboard";

export const metadata: Metadata = { title: "网站营运后台 Demo｜岩泉", robots: { index: false, follow: false, noarchive: true } };
export default function Page(){ return <AdminDashboard/>; }
