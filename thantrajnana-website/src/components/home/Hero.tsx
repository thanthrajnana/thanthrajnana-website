import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 text-center md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#0e7490_0%,transparent_35%)] opacity-40" />
      <p className="mx-auto mb-5 w-fit rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
        Learn Coding, IoT, Robotics & App Development
      </p>
      <h1 className="mx-auto max-w-5xl text-4xl font-bold leading-tight text-white md:text-6xl">
        Build Apps, Websites, IoT Projects and Robots with Scratch-Style Coding
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
        Thantrajnana helps students learn technology through visual coding platforms, practical courses and hands-on hardware kits.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <Link href="#courses" className="rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
          Explore Courses
        </Link>
        <Link href="/kits" className="rounded-full border border-cyan-400 px-8 py-3 font-semibold text-cyan-300 hover:bg-cyan-400/10">
          View Kits
        </Link>
      </div>
    </section>
  );
}
