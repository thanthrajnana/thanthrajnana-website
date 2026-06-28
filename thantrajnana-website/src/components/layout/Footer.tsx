import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-bold text-cyan-400">Thantrajnana</h2>
          <p className="mt-3 text-sm text-slate-400">
            Learn coding, IoT, Arduino and robotics through visual programming and hands-on kits.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Platform</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-400">
            <Link href="/#courses">Courses</Link>
            <Link href="/kits">Kits</Link>
            <Link href="/#platforms">Scratch Platforms</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">Company</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-400">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <p className="mt-3 text-sm text-slate-400">Email: hello@thantrajnana.com</p>
          <p className="mt-1 text-sm text-slate-400">India</p>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-7xl text-sm text-slate-500">
        © {new Date().getFullYear()} Thantrajnana. All rights reserved.
      </p>
    </footer>
  );
}
