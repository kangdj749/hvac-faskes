"use client";

import { Suspense } from "react";
import RegistrasiSection from "@/components/RegistrasiSection";

export const dynamic = "force-dynamic"; // aman buat useSearchParams

export default function RegistrasiPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center text-slate-600">
          Memuat formulir...
        </div>
      }
    >
      <RegistrasiSection />
    </Suspense>
  );
}
