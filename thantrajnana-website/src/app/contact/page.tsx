import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">Contact</p>
          <h1 className="mt-3 text-4xl font-bold">Contact Thantrajnana</h1>
          <p className="mt-6 text-slate-300">For course, school partnership or kit-related queries, contact us.</p>
          <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-slate-300">Email: hello@thantrajnana.com</p>
            <p className="mt-2 text-slate-300">Location: India</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
