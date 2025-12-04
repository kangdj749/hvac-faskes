"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

export default function TestimonialGallerySection() {
  const gallery = [
    { src: "/gallery/mulia.webp", alt: "Pembersihan evaporator di klinik" },
    { src: "/gallery/mulia2.webp", alt: "Pembersihan filter AC ruang tindakan" },
    { src: "/gallery/mulia4.webp", alt: "Pengecekan suhu coil evaporator" },
    { src: "/gallery/mulia5.webp", alt: "Pencucian AC split wall Faskes" },
    { src: "/gallery/mulia6.webp", alt: "Perawatan berkala gedung klinik" },
    { src: "/gallery/mulia7.webp", alt: "Perawatan berkala gedung klinik" },
    { src: "/gallery/service.webp", alt: "Perawatan berkala gedung klinik" },
    { src: "/gallery/service2.webp", alt: "Perawatan berkala gedung klinik" },
    { src: "/gallery/service3.webp", alt: "Perawatan berkala gedung klinik" },
    { src: "/gallery/service5.webp", alt: "Perawatan berkala gedung klinik" },
    { src: "/gallery/service6.webp", alt: "Perawatan berkala gedung klinik" },
    { src: "/gallery/service8.webp", alt: "Perawatan berkala gedung klinik" },
    { src: "/gallery/service10.webp", alt: "Servis AC outdoor unit" },
    { src: "/gallery/service12.webp", alt: "Servis AC outdoor unit" },
    { src: "/gallery/service13.webp", alt: "Servis AC outdoor unit" },
    { src: "/gallery/service14.webp", alt: "Servis AC outdoor unit" },

  ];

  const testimonials = [
    { src: "/testimoni/testimoni.webp", alt: "Testimoni WA pelayanan cepat" },
    { src: "/testimoni/testimoni1.webp", alt: "Testimoni WA perbaikan berhasil" },
    { src: "/testimoni/testimoni2.webp", alt: "Testimoni WA pelayanan rutin klinik" },
    { src: "/testimoni/testimoni3.webp", alt: "Testimoni tambahan" },
    { src: "/testimoni/testimoni4.webp", alt: "Testimoni tambahan" },
    { src: "/testimoni/testimoni5.webp", alt: "Testimoni tambahan" },
    { src: "/testimoni/testimoni6.webp", alt: "Testimoni tambahan" },
  ];

  // === Carousel 1: Gallery ===
  const [emblaGalleryRef, emblaGallery] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 2600 })]
  );

  const galleryPrev = useCallback(() => emblaGallery?.scrollPrev(), [emblaGallery]);
  const galleryNext = useCallback(() => emblaGallery?.scrollNext(), [emblaGallery]);

  // === Carousel 2: Testimoni ===
  const [emblaTestiRef, emblaTesti] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000 })]
  );

  const testiPrev = useCallback(() => emblaTesti?.scrollPrev(), [emblaTesti]);
  const testiNext = useCallback(() => emblaTesti?.scrollNext(), [emblaTesti]);

  return (
    <section id="testimoni-gallery" className="py-20 bg-gradient-to-b from-white via-green-50 to-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            Dipercaya Fasilitas Kesehatan — Bukti Nyatanya
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Dokumentasi real pekerjaan tim HVAC serta testimoni dari Klinik, Puskesmas, dan Apotek.
          </p>
        </motion.div>

        {/* ============================= */}
        {/* === GALLERY CAROUSEL ======== */}
        {/* ============================= */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-semibold text-green-700 mb-6"
        >
          Dokumentasi Proses Kerja
        </motion.h3>

        <div className="relative mb-20">
          <div ref={emblaGalleryRef} className="overflow-hidden">
            <div className="flex gap-4">
              {gallery.map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex-[0_0_75%] sm:flex-[0_0_45%] md:flex-[0_0_28%] lg:flex-[0_0_20%]
                             h-[380px] sm:h-[420px] md:h-[460px]
                             rounded-xl overflow-hidden shadow-md border border-green-100"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <CarouselButton side="left" onClick={galleryPrev} />
          <CarouselButton side="right" onClick={galleryNext} />
        </div>

        {/* ============================= */}
        {/* === TESTIMONIAL CAROUSEL === */}
        {/* ============================= */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-semibold text-green-700 mb-6"
        >
          Testimoni Real Pelanggan
        </motion.h3>

        <div className="relative">
          <div ref={emblaTestiRef} className="overflow-hidden">
            <div className="flex gap-4">
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex-[0_0_75%] sm:flex-[0_0_45%] md:flex-[0_0_28%] lg:flex-[0_0_20%]
                             h-[420px] sm:h-[460px] md:h-[500px]
                             bg-white rounded-2xl shadow-md p-3 border border-green-100"
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <CarouselButton side="left" onClick={testiPrev} />
          <CarouselButton side="right" onClick={testiNext} />
        </div>
      </div>
    </section>
  );
}

/* === Button Component (Reusable) === */
function CarouselButton({ side, onClick }: { side: "left" | "right"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 
        bg-white/80 hover:bg-white shadow-md 
        text-green-700 rounded-full w-10 h-10 flex items-center justify-center
        ${side === "left" ? "-left-3 md:-left-5" : "-right-3 md:-right-5"}`}
    >
      {side === "left" ? "‹" : "›"}
    </button>
  );
}
