import "./globals.css";
import type { Metadata } from "next";
import { GlobalToaster } from "@/components/GlobalToaster";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "Jasa Service Murah dan Pemasangan Baru di Kota Bandung",
  description: "Jasa Service Murah dan Pemasangan Baru di Kota Bandung",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head />
      <body>
        {/* ✅ Muat Meta Pixel HANYA SEKALI di layout root */}
        <MetaPixel />
        {children}
        <GlobalToaster />
        </body>
    </html>
  );
}
