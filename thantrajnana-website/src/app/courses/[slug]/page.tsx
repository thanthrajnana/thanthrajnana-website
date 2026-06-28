import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { courses } from "@/data/courses";

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <Link href="/#courses" className="text-sm text-cyan-300">← Back to courses</Link>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">{course.title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">{course.longDescription}</p>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            <div className="rounded-2xl bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Duration</p>
              <p className="mt-2 font-semibold">{course.duration}</p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Level</p>
              <p className="mt-2 font-semibold">{course.level}</p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Platform</p>
              <p className="mt-2 font-semibold">{course.platform}</p>
            </div>
            <div className="rounded-2xl bg-slate-900 p-5">
              <p className="text-sm text-slate-400">Price</p>
              <p className="mt-2 font-semibold">₹{course.price}</p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-bold text-cyan-300">What students will get</h2>
            <ul className="mt-5 grid gap-3 text-slate-300 md:grid-cols-2">
              <li>✓ Scratch-style coding platform access</li>
              <li>✓ Project-based lessons</li>
              <li>✓ Saved projects</li>
              <li>✓ Completion certificate</li>
              {course.hasKit && <li>✓ Optional hardware kit</li>}
            </ul>
          </div>

          <button className="mt-8 rounded-full bg-cyan-400 px-8 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
            Enroll Now
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}
