import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-3xl bg-cyan-400 p-10 text-center text-slate-950 md:p-16">
        <h2 className="text-3xl font-bold md:text-4xl">Start Building with Thantrajnana</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-800">
          Choose a course, access the Scratch-style coding platform and start creating real projects.
        </p>
        <Link href="/#courses" className="mt-8 inline-block rounded-full bg-slate-950 px-8 py-3 font-semibold text-white">
          Explore Courses
        </Link>
      </div>
    </section>
  );
}
