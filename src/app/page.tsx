"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import HybridWhatsAppCTA from "@/components/HybridWhatsAppCTA";
import ProblemSection from "@/components/ProblemSection";
import AgitasiSection from "@/components/AgitasiSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import USPSection from "@/components/UspSection";
import CTASection from "@/components/CTASection";
import TestimonialGallerySection from "@/components/TestimonialGallerySection";

import { fbq } from "@/lib/metaPixel";

const LandingPage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // ✅ Pastikan fbq sudah ada
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      // ✅ Event khusus landing page HVAC
      fbq("track", "ViewContent", {
        content_name: "Landing Page HVAC Fasilitas Kesehatan",
        content_category: "HVAC Healthcare",
      });

      console.log("📊 Meta Pixel: ViewContent terkirim");
    }

    // ===== CTA TRACKING =====
    const ctaButtons = document.querySelectorAll("[data-action='survey']");

    const handleCTAClick = () => {
      const fundriser =
        localStorage.getItem("fundriser") || "Direct";

      fbq("track", "InitiateCheckout", {
        content_name: "Survey HVAC Faskes",
        content_category: "HVAC Healthcare",
        fundriser,
      });

      console.log("📊 Meta Pixel: InitiateCheckout", { fundriser });
    };

    ctaButtons.forEach((btn) =>
      btn.addEventListener("click", handleCTAClick)
    );

    return () => {
      ctaButtons.forEach((btn) =>
        btn.removeEventListener("click", handleCTAClick)
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
