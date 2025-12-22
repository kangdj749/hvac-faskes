import "./globals.css";
import type { Metadata } from "next";
import { GlobalToaster } from "../components/GlobalToaster";
import MetaPixel from "../components/MetaPixel";

export const metadata: Metadata = {
  title: "Jasa HVAC Fasilitas Kesehatan",
  description:
    "Layanan HVAC profesional untuk Klinik, Rumah Sakit, dan Fasilitas Kesehatan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* ✅ Meta Domain Verification (WAJIB DI SINI) */}
        <meta
          name="facebook-domain-verification"
          content="dg4yauxrekwr2fn9ck8fkuvcc79jpz"
        />
      </head>
      <body>
        <MetaPixel />
        {children}
        <GlobalToaster />
      </body>
    </html>
  );
}
