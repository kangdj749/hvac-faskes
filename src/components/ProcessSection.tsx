"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  PhoneCall,
  ClipboardList,
  FileSearch,
  Wrench,
  FileCheck,
  RefreshCcw
} from "lucide-react"

export default function ProcessSection() {
  const steps = [
    {
      icon: PhoneCall,
      title: "Konsultasi & Penjadwalan Survey",
      desc: "Tim kami menerima informasi awal dan menjadwalkan survey sesuai jam operasional klinik."
    },
    {
      icon: ClipboardList,
      title: "Survey Lokasi & Diagnosa Masalah",
      desc: "Teknisi melakukan pengecekan HVAC secara menyeluruh untuk menemukan akar masalah."
    },
    {
      icon: FileSearch,
      title: "Estimasi Biaya & Rekomendasi",
      desc: "Kami memberikan rekomendasi tindakan paling efektif dengan estimasi biaya transparan."
    },
    {
      icon: Wrench,
      title: "Pengerjaan HVAC Higienis",
      desc: "Perbaikan & service dilakukan dengan standar higienis faskes, aman dan minim gangguan."
    },
    {
      icon: FileCheck,
      title: "Testing, Dokumentasi & Serah Terima",
      desc: "Pengujian suhu, quality check, dan laporan lengkap sesuai standar administrasi klinik."
    },
    {
      icon: RefreshCcw,
      title: "Maintenance Terjadwal (Opsional)",
      desc: "Kontrak service bulanan/tri wulanan untuk menjaga HVAC tetap stabil sepanjang waktu."
    },
  ]

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-white via-green-50 to-white">
      <div className="container mx-auto px-6 md:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            Alur Kerja Kami
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Proses kerja yang rapi, higienis, dan efisien untuk memastikan operasional klinik Anda tetap berjalan tanpa gangguan.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative flex flex-col md:flex-row md:justify-between md:gap-12">
          {steps.map((step, idx) => {
            const ref = useRef(null)
            const isInView = useInView(ref, { amount: 0.5, once: false })
            const IconComp = step.icon

            return (
              <motion.div
                key={idx}
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 20 }}
                transition={{ duration: 0.6 }}
                className="relative flex flex-col items-center md:w-1/3 mb-14 md:mb-0"
              >

                {/* Connector Lines */}
                {idx < steps.length - 1 && (
                  <>
                    {/* Mobile: Vertical line */}
                    <div className="absolute left-[50%] top-16 h-full w-1 bg-green-200 md:hidden"></div>

                    {/* Desktop: Horizontal line */}
                    <div className="hidden md:block absolute top-8 left-full w-full h-1 bg-green-200"></div>
                  </>
                )}

                {/* Step Icon */}
                <div
                  className={`relative z-10 w-14 h-14 flex items-center justify-center rounded-full shadow-md transition-all duration-500 ${
                    isInView ? "bg-green-600 text-white scale-110" : "bg-green-100 text-green-500"
                  }`}
                >
                  <IconComp className="w-7 h-7" />
                </div>

                {/* Content Card */}
                <div
                  className={`mt-6 bg-white border rounded-2xl shadow-lg p-6 w-full text-center transition-all duration-500 ${
                    isInView ? "border-green-400" : "border-green-100"
                  }`}
                >
                  <h3 className="text-lg md:text-xl font-bold text-green-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
