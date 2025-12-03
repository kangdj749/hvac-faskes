"use client"

import { motion } from "framer-motion"

export default function ProblemSection() {
  const problems = [
    {
      icon: "⚠️",
      title: "AC Mati Saat Jam Pelayanan",
      desc: "Langsung menghambat alur layanan medis dan membuat antrean pasien tidak nyaman."
    },
    {
      icon: "🔥",
      title: "Ruang Pemeriksaan Panas / Lembap / Bau",
      desc: "Mengganggu kenyamanan pasien dan mengurangi profesionalitas ruang klinik."
    },
    {
      icon: "💧",
      title: "AC Bocor ke Meja atau Troli Alat Kesehatan",
      desc: "Berisiko merusak alat medis dan mengganggu prosedur tindakan."
    },
    {
      icon: "🧱",
      title: "AHU Kotor & Filter Penuh Debu",
      desc: "Kualitas udara turun dan meningkatkan risiko kontaminasi ruangan."
    },
    {
      icon: "🌡️",
      title: "Suhu Ruang Tindakan Tidak Stabil",
      desc: "Mempengaruhi efektivitas prosedur medis serta kenyamanan tenaga kesehatan."
    },
    {
      icon: "⏰",
      title: "Tidak Ada Kontrak Service Terjadwal",
      desc: "Perawatan tidak konsisten dan masalah HVAC sering muncul tiba–tiba."
    },
  ]

  return (
    <section id="problems" className="py-20 bg-gray-50">
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
            Masalah HVAC Bisa Menghentikan Operasional Klinik
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Gangguan kecil pada sistem pendingin bisa berdampak besar pada alur pelayanan.
            Kenyamanan pasien, kualitas udara, dan kelancaran prosedur medis bisa langsung terganggu.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-6 border border-gray-200"
            >
              <div className="mb-4 p-4 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center text-3xl text-green-700 mx-auto">
                <span aria-hidden="true">{item.icon}</span>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-green-800 text-center mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm md:text-base text-center">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Emphasis */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-700 mt-12 text-base md:text-lg font-medium"
        >
          Masalah HVAC bukan hanya soal kenyamanan — <span className="text-green-700 font-semibold">tapi langsung mempengaruhi kualitas layanan klinik Anda.</span>
        </motion.p>

      </div>
    </section>
  )
}
