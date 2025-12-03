"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 pt-16 pb-10 mt-20">
      <div className="container mx-auto px-6 md:px-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              CV. Mulia Djaya Utama
            </h3>
            <p className="text-green-200 leading-relaxed">
              Layanan HVAC profesional untuk Klinik, Puskesmas, Apotek, dan fasilitas kesehatan lainnya.
              Mengutamakan standar higienis, respon cepat, dan kualitas kerja terbaik sejak 2010.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2 text-green-200">
              <li><Link href="#solution" className="hover:text-white">Layanan</Link></li>
              <li><Link href="#why-us" className="hover:text-white">Keunggulan</Link></li>
              <li><Link href="#process" className="hover:text-white">Alur Kerja</Link></li>
              <li><Link href="#cta" className="hover:text-white">Kontak</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-white mb-4">Kontak</h4>
            <ul className="space-y-3 text-green-200">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-300" />
                <span>
                  Jl. Sulaksana Dalam I No 36 Cicaheum Bandung.
                  <br />Kota Bandung
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-300" />
                <a href="tel:+6281333301601" className="hover:text-white">+62 •••• ••••</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-300" />
                <a href="mailto:info@muliadjayautama.com" className="hover:text-white">
                  muliadjayautama@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-green-300" />
                <a
                  href="https://wa.me/6281333301601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp Teknisi
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-700 mt-12 pt-6">
          <p className="text-center text-green-300 text-sm">
            © {new Date().getFullYear()} CV. Mulia Djaya Utama — Divisi Sistem Pendingin & Tata Udara.
            <br />Legalitas: NIB 0220105640355 · Akta Notaris No. 10 (2020)
          </p>
        </div>
      </div>
    </footer>
  )
}
