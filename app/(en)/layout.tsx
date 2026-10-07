import type { Metadata } from "next";
import { baseMetadata } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = baseMetadata;

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
