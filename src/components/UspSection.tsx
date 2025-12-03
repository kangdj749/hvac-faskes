"use client"

import { motion } from "framer-motion"

export default function USPSection() {
  const uspList = [
    {
      icon: "⚡",
      title: "Respon Cepat",
      desc: "Prioritas khusus untuk fasilitas kesehatan agar operasional tidak terhenti."
    },
    {
      icon: "🧼",
      title: "Standar Higienis",
      desc: "Teknisi rapi, bersih, dan mengikuti prosedur higienis khusus faskes."
    },
    {
      icon: "📋",
      title: "Dokumentasi Lengkap",
      desc: "Laporan sesuai standar administrasi & audit fasilitas kesehatan."
    },
    {
      icon: "🔁",
      title: "Maintenance Terjadwal",
      desc: "Perawatan rutin untuk menjaga stabilitas operasional klinik."
    },
    {
      icon: "🏥",
      title: "14+ Tahun Berpengalaman",
      desc: "Berpengalaman menangani fasilitas industri, komersial, dan kesehatan."
    },
    {
      icon: "🤫",
      title: "Tanpa Mengganggu Pelayanan",
      desc: "Penjadwalan fleksibel mengikuti jam operasional klinik Anda."
    },
  ]

  return (
    <section id="usp" className="py-20 bg-white">
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
            Kenapa Klinik & Puskesmas Memilih Kami?
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Kami memahami bahwa layanan kesehatan tidak boleh berhenti.
            Itulah mengapa kami menawarkan layanan HVAC yang cepat,
            higienis, dan terstandar untuk fasilitas kesehatan.
          </p>
        </motion.div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {uspList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
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

      </div>
    </section>
  )
}
