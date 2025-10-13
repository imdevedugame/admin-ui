import "./App.css";
import type { ReactNode } from "react";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-xs font-semibold tracking-wider text-gray-500">{title}</h2>
      <div className="rounded-md border border-gray-200 bg-white p-4">{children}</div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* LATIHAN 1 — Navbar dengan Flexbox */}
        <Section title="LATIHAN 1">
          <nav className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="font-bold">MyLogo</div>
            <ul className="flex flex-col gap-2 md:flex-row md:gap-6 text-sm">
              <li>
                <a className="text-gray-700 hover:text-blue-600 active:text-blue-800" href="#">Home</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-blue-600 active:text-blue-800" href="#">About</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-blue-600 active:text-blue-800" href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </Section>

        {/* LATIHAN 2 — Grid Galeri Gambar */}
        <Section title="LATIHAN 2">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-md bg-gray-200 grid place-items-center text-gray-500">
                200 × 200
              </div>
            ))}
          </div>
        </Section>

        {/* LATIHAN 3 — Pricing Table */}
        <Section title="LATIHAN 3">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.25fr_1fr] gap-4">
            <div className="rounded-md border p-4 text-center">
              <div className="text-sm">Basic</div>
              <div className="text-xs text-gray-500">Rp 50.000</div>
            </div>
            <div className="rounded-md border p-4 text-center bg-blue-100 border-blue-300 md:scale-[1.04]">
              <div className="text-sm font-medium">Pro</div>
              <div className="text-xs text-gray-700">Rp 100.000</div>
            </div>
            <div className="rounded-md border p-4 text-center">
              <div className="text-sm">Premium</div>
              <div className="text-xs text-gray-500">Rp 200.000</div>
            </div>
          </div>
        </Section>

        {/* LATIHAN 4 — Layout Dashboard Sederhana */}
        <Section title="LATIHAN 4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 rounded-md bg-gray-300 p-4">Header</div>
            <div className="col-span-12 md:col-span-3 rounded-md bg-gray-300 p-4 min-h-40">Sidebar</div>
            <div className="col-span-12 md:col-span-9 rounded-md bg-gray-300 p-4 min-h-40">Content</div>
            <div className="col-span-12 rounded-md bg-gray-300 p-4">Footer</div>
          </div>
        </Section>

        {/* LATIHAN 5 — Card Product dengan Flexbox */}
        <Section title="LATIHAN 5">
          <div className="rounded-md border p-4">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="w-20 h-20 shrink-0 rounded-md bg-gray-200 grid place-items-center text-[10px] text-gray-500">
                80 × 80
              </div>
              <div>
                <div className="font-medium">Nama Produk</div>
                <p className="text-xs text-gray-600">Deskripsi produk singkat…</p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default App;
