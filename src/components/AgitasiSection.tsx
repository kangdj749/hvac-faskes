"use client"

import { motion } from "framer-motion"

export default function AgitasiSection() {
  const impacts = [
    {
      icon: "⏳",
      title: "Antrian Melambat",
      desc: "Ruang pemeriksaan yang panas atau tidak nyaman membuat proses layanan jadi lebih lambat."
    },
    {
      icon: "😣",
      title: "Pasien Komplain",
      desc: "Kenyamanan turun, dan pasien bisa menilai klinik kurang profesional hanya karena AC bermasalah."
    },
    {
      icon: "💼",
      title: "Tenaga Medis Sulit Fokus",
      desc: "Ruangan panas, lembap, atau berbau membuat tenaga kesehatan tidak dapat bekerja optimal."
    },
    {
      icon: "🌡️",
      title: "Prosedur Medis Terganggu",
      desc: "Banyak tindakan medis memerlukan suhu stabil—AC bermasalah berarti risiko pada hasil tindakan."
    },
    {
      icon: "📉",
      title: "Reputasi Klinik Menurun",
      desc: "Gangguan kecil pada HVAC bisa berdampak besar pada citra & kepercayaan pasien."
    },
  ]

  return (
    <section id="agitasi" className="py-20 bg-white">
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
            Gangguan AC = Gangguan Pelayanan Kesehatan
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Ketika suhu ruangan tidak terkendali, bukan hanya kenyamanan yang terganggu—tapi seluruh alur layanan klinik.
          </p>
        </motion.div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {impacts.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 border border-green-100"
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

        {/* Closing agitation */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-700 mt-12 text-base md:text-lg font-medium"
        >
          Klinik tidak boleh berhenti hanya karena AC bermasalah —{" "}
          <span className="text-green-700 font-semibold">
            dibutuhkan solusi cepat, higienis, dan terstandar.
          </span>
        </motion.p>

      </div>
    </section>
  )
}
