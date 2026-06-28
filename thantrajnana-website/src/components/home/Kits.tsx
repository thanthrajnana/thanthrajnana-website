import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import { kits } from "@/data/kits";

export default function Kits() {
  return (
    <section id="kits" className="bg-slate-900 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Hardware Kits"
          title="Learn with Real Hardware"
          description="IoT, Arduino and Robotics courses include optional hands-on learning kits."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {kits.map((kit) => (
            <div key={kit.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-6">
              <h3 className="text-xl font-bold text-cyan-300">{kit.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{kit.description}</p>
              <p className="mt-5 text-sm text-slate-400">Linked Course: {kit.course}</p>
              <p className="mt-3 font-bold text-white">₹{kit.price}</p>
              <Link href="/kits" className="mt-6 inline-block rounded-full border border-cyan-400 px-5 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-400/10">
                View Kit
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
