import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { kits } from "@/data/kits";

export default function KitsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold">Hardware Kits</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Explore Arduino, IoT and Robotics kits designed for hands-on learning.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {kits.map((kit) => (
              <div key={kit.id} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h2 className="text-xl font-bold text-cyan-300">{kit.title}</h2>
                <p className="mt-3 text-sm text-slate-300">{kit.description}</p>
                <p className="mt-4 text-sm text-slate-400">Course: {kit.course}</p>
                <p className="mt-4 font-bold">₹{kit.price}</p>
                <ul className="mt-5 list-inside list-disc text-sm text-slate-300">
                  {kit.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
