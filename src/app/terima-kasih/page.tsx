"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fbq } from "@/lib/metaPixel";
import { Phone, Building2, User } from "lucide-react";

export default function ThankYouWrapper() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <ThankYouPage />
    </Suspense>
  );
}

function ThankYouPage() {
  const params = useSearchParams();
  const data = Object.fromEntries(params.entries());
  const [fundriser, setFundriser] = useState("");
  const [hasTracked, setHasTracked] = useState(false);
  const WA_ADMIN = "6281333301601";

  // ---------------------------------------------
  // 🔥 Ambil fundriser dari localStorage (no query)
  // ---------------------------------------------
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("fundriser") || "direct";
    setFundriser(stored);
  }, []);

  // ---------------------------------------------
  // 🔥 FB Pixel (Lead)
  // ---------------------------------------------
  useEffect(() => {
    if (!fundriser) return;
    if (hasTracked) return;

    fbq("track", "Lead", {
      layanan: data.kebutuhan || "HVAC",
      fundriser,
    });

    console.log("🔥 FB Pixel Lead Fired", {
      layanan: data.kebutuhan,
      fundriser,
    });

    setHasTracked(true);
  }, [fundriser, hasTracked, data]);

  // ---------------------------------------------
  // 🔥 WhatsApp Message
  // ---------------------------------------------
  const msg = `
Halo Admin HVAC 👋

Saya sudah mengisi form permintaan layanan HVAC untuk fasilitas kesehatan.

Berikut datanya:
• Nama PIC: ${data.nama}
• Jabatan: ${data.jabatan}
• Klinik/Faskes: ${data.klinik}
• No HP: ${data.nohp}
• Alamat Lokasi: ${data.alamat}
• Kebutuhan: ${data.kebutuhan}
• Jumlah AC: ${data.jumlahAC || "-"}
• Catatan: ${data.catatan || "-"}

Fundriser: ${fundriser}

Mohon dibantu untuk penjadwalan survey ya. Terima kasih 🙏
`;

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white w-full max-w-lg p-10 rounded-3xl shadow-xl border border-green-100"
      >
        {/* Heading */}
        <h1 className="text-3xl font-bold text-green-700 text-center mb-3">
          Terima Kasih! 🎉
        </h1>
        <p className="text-gray-600 text-center mb-8 leading-relaxed">
          Permintaan layanan HVAC Anda telah kami terima.  
          Tim kami akan menghubungi Anda dalam <b>5–10 menit</b> untuk konfirmasi dan penjadwalan survey lokasi.
        </p>

        {/* Summary */}
        <div className="bg-green-50 border border-green-200 p-6 rounded-2xl mb-8">
          <h2 className="text-lg font-semibold text-green-700 mb-4">
            Ringkasan Data Anda
          </h2>

          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex gap-3">
              <User className="text-green-600" size={18} />
              <span><b>{data.nama}</b> — {data.jabatan}</span>
            </div>

            <div className="flex gap-3">
              <Building2 className="text-green-600" size={18} />
              <span>{data.klinik}</span>
            </div>

            <div className="flex gap-3">
              <Phone className="text-green-600" size={18} />
              <span>{data.nohp}</span>
            </div>

            <p className="mt-2 text-xs text-gray-500">
              Fundriser: <b className="text-green-700">{fundriser}</b>
            </p>
          </div>
        </div>

        {/* CTA */}
        <Button
          size="lg"
          className="w-full py-4 text-base font-semibold rounded-xl bg-green-600 text-white hover:bg-green-700"
          onClick={() =>
            window.open(
              `https://wa.me/${WA_ADMIN}?text=${encodeURIComponent(msg)}`,
              "_blank"
            )
          }
        >
          Hubungi Admin via WhatsApp
        </Button>

        <p className="text-center text-xs text-gray-400 mt-4">
          Layanan khusus untuk Klinik, Puskesmas, Apotek, dan Fasilitas Kesehatan.
        </p>
      </motion.div>
    </section>
  );
}
