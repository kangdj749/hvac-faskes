"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function Hero() {
  const [registrasiLink, setRegistrasiLink] = useState("/registrasi")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      const fundriserFromLink = urlParams.get("fundriser")

      if (fundriserFromLink) {
        localStorage.setItem("fundriser", fundriserFromLink)
        setRegistrasiLink(`/registrasi?fundriser=${encodeURIComponent(fundriserFromLink)}`)
      } else {
        const stored = localStorage.getItem("fundriser")
        if (stored) {
          setRegistrasiLink(`/registrasi?fundriser=${encodeURIComponent(stored)}`)
        }
      }
    }
  }, [])

  return (
    <section className="relative flex items-center justify-center w-full min-h-[110vh] py-32 md:py-40 overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 -z-10">
    {/* Background jika diperlukan */}
    {/* <Image ... /> */}
    <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-800/50 to-green-900/80" />
  </div>

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="relative z-10 text-center text-white px-6 md:px-10 space-y-8 max-w-3xl"
  >
    <h1 className="font-extrabold leading-tight text-[clamp(2.2rem,5vw,4rem)] drop-shadow-xl">
      Operasional Klinik Tidak Boleh Berhenti
      <br />
      <span className="text-green-200">
        Layanan HVAC Khusus Fasilitas Kesehatan • Respon Cepat
      </span>
    </h1>

    <p className="text-sm sm:text-base md:text-lg text-green-100/90 max-w-2xl mx-auto leading-relaxed">
      AC mati saat jam pelayanan? Ruang pemeriksaan panas, lembap, atau bau?
      Kami bantu jaga kenyamanan pasien dan kelancaran operasional klinik Anda
      dengan layanan HVAC profesional, higienis, dan cepat.
    </p>

    {/* Trust Badge */}
    <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-green-100/80 mt-6">
      <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
        14+ Tahun Pengalaman HVAC
      </span>
      <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
        Standar Higienis Faskes
      </span>
      <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
        Respon Cepat
      </span>
      <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
        Dokumentasi Lengkap
      </span>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
      <Button
        asChild
        className="bg-green-500 hover:bg-green-400 text-white rounded-2xl px-8 py-4 text-base sm:text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        <a href={registrasiLink} data-action="survey">
          📋 Jadwalkan Survey Gratis
        </a>
      </Button>

      <Button
        asChild
        variant="outline"
        className="border-2 border-green-300 text-green-100 hover:bg-green-100/10 rounded-2xl px-8 py-4 text-base sm:text-lg font-semibold shadow-md hover:scale-105 transition-transform backdrop-blur-sm"
      >
        <a href="https://wa.me/6281333301601" data-action="wa">
          💬 Hubungi Kami Sekarang
        </a>
      </Button>
      </div>
    </motion.div>
  </section>
  )
}
