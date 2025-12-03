"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { ClipboardCheck, MessageCircle } from "lucide-react";
import { useEffect } from "react";

export default function KonfirmasiHVAC() {
  const params = useSearchParams();
  const data = Object.fromEntries(params.entries());

  const WA_ADMIN = "6281333301601";

  const message = `
Halo Admin HVAC 👋,
Ada permintaan layanan baru masuk.

Nama PIC: ${data.nama}
Jabatan: ${data.jabatan}
Fasilitas: ${data.klinik}
No HP: ${data.nohp}
Alamat: ${data.alamat}
Kebutuhan: ${data.kebutuhan}
Jumlah AC: ${data.jumlahAC || "-"}
Catatan: ${data.catatan || "-"}
UTM: ${data.utm || "Direct"}

Mohon segera ditindaklanjuti ya 🙏
`;

  // === AUTO SEND WA ADMIN ===
  useEffect(() => {
    if (!data || Object.keys(data).length === 0) return;

    const timer = setTimeout(() => {
      window.open(
        `https://wa.me/${WA_ADMIN}?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [data]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full bg-white rounded-3xl shadow-lg border border-green-100 p-8 text-center"
      >
        <div className="mx-auto w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <ClipboardCheck size={40} />
        </div>

        <h1 className="text-3xl font-bold text-green-700 mb-3">
          Terima Kasih, {data.nama || "PIC"}! 🎉
        </h1>

        <p className="text-gray-600 leading-relaxed mb-8">
          Permintaan layanan HVAC Anda sudah kami terima.
          <br />
          Tim kami akan menghubungi Anda dalam{" "}
          <span className="font-semibold text-green-700">5–10 menit</span>.
        </p>

        <div className="text-left bg-green-50 p-6 rounded-2xl border border-green-100 shadow-sm mb-8">
          <h2 className="font-semibold text-green-700 text-lg mb-3">
            Ringkasan Permintaan
          </h2>

          <ul className="space-y-2 text-gray-700 text-sm">
            <li><b>Nama PIC:</b> {data.nama}</li>
            <li><b>Jabatan:</b> {data.jabatan}</li>
            <li><b>Klinik:</b> {data.klinik}</li>
            <li><b>No HP:</b> {data.nohp}</li>
            <li><b>Alamat:</b> {data.alamat}</li>
            <li><b>Kebutuhan:</b> {data.kebutuhan}</li>
            <li><b>Jumlah AC:</b> {data.jumlahAC || "-"}</li>
            <li><b>Catatan:</b> {data.catatan || "-"}</li>
          </ul>
        </div>

        <a
          href={`https://wa.me/${WA_ADMIN}?text=${encodeURIComponent(message)}`}
          target="_blank"
          className="inline-flex gap-2 items-center justify-center bg-green-600 text-white px-6 py-3 rounded-xl font-semibold text-lg hover:bg-green-700 transition w-full shadow-md"
        >
          <MessageCircle size={22} /> Hubungi Admin via WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
