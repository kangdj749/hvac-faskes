"use client"

import { useState, useEffect, Suspense } from "react"
import { useForm, SubmitHandler, UseFormRegisterReturn } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

// ====== Schema Validasi Form Registrasi HVAC ======
const formSchema = z.object({
  nama: z.string().min(2, "Nama minimal 2 karakter"),
  jabatan: z.string().min(2, "Wajib diisi"),
  klinik: z.string().min(2, "Nama Klinik/Puskesmas wajib diisi"),
  nohp: z
    .string()
    .min(8, "Nomor HP terlalu pendek")
    .regex(/^[0-9+]+$/, "Hanya angka atau tanda +"),
  alamat: z.string().min(5, "Alamat terlalu pendek"),
  kebutuhan: z.enum([
    "Service AC",
    "Perawatan AHU",
    "Emergency HVAC",
    "Perbaikan Sistem Pendingin",
    "Kontrak Service Faskes",
  ]),
  jumlahAC: z.string().optional(),
  catatan: z.string().optional(),
  utm: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

// === GANTI ke URL Google Script kamu ===
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwJykHO-moHe8LQw6gSoAOKHDp81Jbo7OfYK5ayhrBWhGWQCRjNiSOeVqmRujJqp0w/exec"

export default function RegistrasiHVACWrapper() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading form...</div>}>
      <RegistrasiHVAC />
    </Suspense>
  )
}

function RegistrasiHVAC() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  })

  // Ambil fundriser dari URL atau localStorage → simpan bersih
  
  useEffect(() => {
  if (typeof window === "undefined") return;

  const url = new URL(window.location.href);
  const raw = url.searchParams.get("fundriser");

  if (raw) {
    // Simpan bersih (tanpa "?fundriser=")
    localStorage.setItem("fundriser", raw);
    setValue("utm", raw);
  } else {
    // Jika sudah ada dari sebelumnya
    const stored = localStorage.getItem("fundriser") || "";
    if (stored) setValue("utm", stored);
  }
  }, [setValue]);

  const handleSubmitForm: SubmitHandler<FormValues> = async (data) => {
    if (submitting) return
    setSubmitting(true)

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as any),
      })

      if (!res.ok) throw new Error("Gagal simpan ke Google Sheets")

      toast.success("Permintaan berhasil dikirim ✅", {
        description: "Tim kami akan menghubungi Anda dalam 5–10 menit.",
      })

      setTimeout(() => {
      router.push(`/terima-kasih?${new URLSearchParams(data as any).toString()}`)
    }, 1200)

    } catch (err) {
      console.error(err)
      toast.error("Gagal Mengirim ❌", {
        description: "Silakan coba lagi.",
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="registrasi"
      className="py-20 px-4 bg-gradient-to-b from-green-50 via-white to-green-50"
    >
      <div className="w-full max-w-xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg border border-green-100 p-6 md:p-10">
          <h2 className="text-3xl font-bold text-green-700 text-center">
            Form Permintaan Layanan HVAC
          </h2>

          <p className="text-sm text-gray-600 text-center mt-2">
            Khusus Klinik, Puskesmas, Apotek, dan fasilitas kesehatan lainnya.<br />
            Respon cepat, higienis, dan profesional.
          </p>

          <form onSubmit={handleSubmit(handleSubmitForm)} className="mt-8 space-y-6">
            <FormInput
              label="Nama PIC / Penanggung Jawab"
              register={register("nama")}
              error={errors.nama?.message}
              placeholder="cth: dr. Budi"
            />
            <FormInput
              label="Jabatan"
              register={register("jabatan")}
              error={errors.jabatan?.message}
              placeholder="cth: Kepala Klinik"
            />
            <FormInput
              label="Nama Klinik / Puskesmas"
              register={register("klinik")}
              error={errors.klinik?.message}
              placeholder="cth: Klinik Sehat Sentosa"
            />
            <FormInput
              label="No HP / WhatsApp"
              register={register("nohp")}
              error={errors.nohp?.message}
              placeholder="08123456789"
            />
            <FormInput
              label="Alamat Lokasi"
              register={register("alamat")}
              error={errors.alamat?.message}
              placeholder="cth: Jl. Merdeka No. 10, Bandung"
            />

            <FormSelect
              label="Kebutuhan Layanan"
              register={register("kebutuhan")}
              error={errors.kebutuhan?.message}
              options={[
                "Service AC",
                "Perawatan AHU",
                "Emergency HVAC",
                "Perbaikan Sistem Pendingin",
                "Kontrak Service Faskes",
              ]}
            />

            <FormInput
              label="Jumlah AC (opsional)"
              register={register("jumlahAC")}
              error={errors.jumlahAC?.message}
              placeholder="cth: 12 unit"
            />

            <FormTextarea
              label="Catatan Tambahan"
              register={register("catatan")}
              error={errors.catatan?.message}
              placeholder="cth: Ruang tindakan harus selesai hari ini"
            />

            {/* hidden utm */}
            <input type="hidden" {...register("utm")} />

            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 text-white font-semibold py-3 hover:bg-green-700 transition disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Mengirim...
                </>
              ) : (
                "Kirim Permintaan Layanan"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

// ====== Helper Components ======
interface FormInputProps {
  label: string
  register: UseFormRegisterReturn
  error?: string
  type?: string
  placeholder?: string
}

function FormInput({ label, register, error, type = "text", placeholder }: FormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={type}
        {...register}
        placeholder={placeholder}
        className="w-full rounded-xl border border-green-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500 bg-white"
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

interface FormSelectProps {
  label: string
  register: UseFormRegisterReturn
  error?: string
  options: string[]
}

function FormSelect({ label, register, error, options }: FormSelectProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        {...register}
        className="w-full rounded-xl border border-green-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500 bg-white"
      >
        <option value="">-- Pilih {label} --</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

interface FormTextareaProps {
  label: string
  register: UseFormRegisterReturn
  error?: string
  placeholder?: string
}

function FormTextarea({ label, register, error, placeholder }: FormTextareaProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <textarea
        {...register}
        placeholder={placeholder}
        rows={4}
        className="w-full rounded-xl border border-green-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500 bg-white"
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
