import Link from "next/link";

const navItems = [
  { label: "Courses", href: "/#courses" },
  { label: "Kits", href: "/kits" },
  { label: "Platforms", href: "/#platforms" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-2xl font-bold text-cyan-400">
          Thantrajnana
        </Link>

        <div className="hidden gap-8 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-cyan-300">
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#courses"
          className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
