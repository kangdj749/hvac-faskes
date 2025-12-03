"use client"

import { motion } from "framer-motion"

export default function SolutionSection() {
  const services = [
    {
      icon: "🛠️",
      title: "Service AC Cepat & Higienis",
      items: [
        "Deep cleaning",
        "Chemical cleaning evaporator & kondensor",
        "Anti-bacterial treatment",
        "Eliminasi bau & jamur"
      ]
    },
    {
      icon: "🔧",
      title: "Perawatan AHU",
      items: [
        "Pembersihan coil",
        "Penggantian filter HEPA / Pre-filter",
        "Sanitasi ducting",
        "Perawatan fan & motor"
      ]
    },
    {
      icon: "❄️",
      title: "Perbaikan Sistem Pendingin",
      items: [
        "Troubleshooting cepat",
        "Perbaikan kompresor",
        "Penggantian freon",
        "Optimasi sistem hemat energi"
      ]
    },
    {
      icon: "📄",
      title: "Kontrak Service Khusus Faskes",
      items: [
        "Bulanan / Triwulanan / Tahunan",
        "Prioritas penanganan",
        "Dokumentasi lengkap untuk keperluan audit"
      ]
    },
    {
      icon: "🚨",
      title: "Layanan Emergency",
      items: [
        "Respon cepat",
        "Tidak mengganggu operasional klinik"
      ]
    }
  ]

  return (
    <section id="solution" className="py-20 bg-gray-50">
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
            Solusi HVAC Profesional untuk Menjaga Operasional Klinik Tetap Lancar
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Kami menyediakan layanan lengkap HVAC khusus fasilitas kesehatan yang higienis,
            cepat, dan sesuai standar agar pelayanan klinik tetap berjalan tanpa gangguan.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 border border-green-100"
            >
              <div className="mb-4 p-4 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center text-3xl text-green-700 mx-auto">
                <span aria-hidden="true">{service.icon}</span>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-green-800 text-center mb-3">
                {service.title}
              </h3>

              <ul className="text-gray-600 text-sm md:text-base space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 text-lg leading-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom emphasis */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-700 mt-12 text-base md:text-lg font-medium"
        >
          Semua dikerjakan oleh teknisi berpengalaman dengan standar higienis fasilitas kesehatan.
        </motion.p>

      </div>
    </section>
  )
}
