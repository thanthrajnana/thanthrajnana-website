import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">About</p>
          <h1 className="mt-3 text-4xl font-bold">About Thantrajnana</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Thantrajnana is an EdTech platform that helps students learn technology through Scratch-style coding platforms, practical courses and hands-on hardware kits.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Our goal is to make app development, web development, IoT, Arduino and robotics easier for school students through visual programming and project-based learning.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
