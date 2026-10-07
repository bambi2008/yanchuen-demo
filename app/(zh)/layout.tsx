import type { Metadata } from "next";
import { baseMetadata } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = baseMetadata;

export default function ChineseLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hans">
      <body>{children}</body>
    </html>
  );
}
