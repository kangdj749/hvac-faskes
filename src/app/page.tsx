"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import HybridWhatsAppCTA from "@/components/HybridWhatsAppCTA";
import dynamic from "next/dynamic";
import { fbq } from "@/lib/metaPixel"; // ✅ Meta Pixel
import ProblemSection from "@/components/ProblemSection";
import AgitasiSection from "@/components/AgitasiSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import USPSection from "@/components/UspSection";
import CTASection from "@/components/CTASection";
import TestimonialGallerySection from "@/components/TestimonialGallerySection";

interface SheetData {
  [key: string]: { elements: any[] };
}

const LandingPage: React.FC = () => {
  const [sheetData, setSheetData] = useState<SheetData>({});
  const router = useRouter();

  useEffect(() => {
  AOS.init({ duration: 1000, once: true });

  // ✅ Kirim ViewContent hanya 1x per kunjungan
  fbq("track", "ViewContent", {
    content_name: "Landing Page Run for Roots",
  });

  const daftarButtons = document.querySelectorAll("[data-action='daftar']");

  const handleDaftarClick = (e: Event) => {
    const btn = e.currentTarget as HTMLAnchorElement;
    const href = btn.getAttribute("href") || "";

    let fundriser: string | null = null;
    try {
      if (href.includes("fundriser=")) {
        const url = new URL(href, window.location.origin);
        fundriser = url.searchParams.get("fundriser");
      }
      if (!fundriser) {
        fundriser = localStorage.getItem("fundriser") || "Tanpa Fundriser";
      }
    } catch (err) {
      console.warn("URL parsing error", err);
    }

    fbq("track", "InitiateCheckout", {
      content_name: "Registrasi",
      currency: "IDR",
      fundriser,
    });

    console.log("📊 Meta Pixel: InitiateCheckout", { fundriser });
  };

  daftarButtons.forEach((btn) =>
    btn.addEventListener("click", handleDaftarClick)
  );

  return () => {
    daftarButtons.forEach((btn) =>
      btn.removeEventListener("click", handleDaftarClick)
    );
  };
}, []);



  return (
    <main className="relative">
      <Navbar />

      <section id="hero">
        <Hero />
      </section>
      <section id="problem">
        <ProblemSection />
      </section>
      <section id="agitasi">
        <AgitasiSection />
      </section>
      <section id="solution">
        <SolutionSection />
      </section>
      <section id="usp">
        <USPSection />
      </section>

      <section id="gallery">
        <TestimonialGallerySection />
      </section>

      <section id="proses">
        <ProcessSection />
      </section>
      <section id="cta">
        <CTASection />
      </section>
      <Footer />
      <HybridWhatsAppCTA />
    </main>
  );
};

export default LandingPage;
