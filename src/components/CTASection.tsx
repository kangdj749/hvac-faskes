"use client"

import { motion } from "framer-motion"
import { Phone, CalendarCheck } from "lucide-react"

export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-br from-green-700 via-green-800 to-green-900 text-white"
    >
      <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold leading-snug"
        >
          Pastikan Operasional Klinik Anda Selalu Lancar
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-green-100 text-base md:text-lg leading-relaxed"
        >
          Survey & konsultasi gratis untuk Klinik, Puskesmas, dan Apotek.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          {/* Survey Button */}
          <a
            href="/registrasi"
            data-action="survey-cta"
            className="flex items-center gap-2 bg-green-300 text-green-900 font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg w-full sm:w-auto justify-center"
          >
            <CalendarCheck className="w-6 h-6" />
            Jadwalkan Survey Gratis
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/6281333301601"
            target="_blank"
            data-action="wa-cta"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg w-full sm:w-auto justify-center"
          >
            <Phone className="w-6 h-6" />
            Chat WhatsApp Sekarang
          </a>
        </motion.div>

        {/* Small trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          viewport={{ once: true }}
          className="mt-8 text-green-200 text-sm"
        >
          Respon cepat • Teknisi higienis • Layanan profesional
        </motion.p>
      </div>
    </section>
  )
}
