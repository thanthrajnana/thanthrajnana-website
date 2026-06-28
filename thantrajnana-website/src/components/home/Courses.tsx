import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import { courses } from "@/data/courses";

export default function Courses() {
  return (
    <section id="courses" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Courses"
          title="Choose Your Learning Path"
          description="Each course gives students access to a dedicated Scratch-style coding platform."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div key={course.id} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
              <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
                <span>{course.duration}</span>
                <span>{course.level}</span>
              </div>
              <h3 className="text-xl font-bold text-cyan-300">{course.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{course.description}</p>
              <p className="mt-5 rounded-lg bg-slate-800 p-3 text-sm text-slate-200">{course.platform}</p>
              {course.hasKit && <p className="mt-3 text-sm font-semibold text-amber-300">Includes optional hardware kit</p>}
              <div className="mt-6 flex items-center justify-between">
                <p className="font-bold text-white">₹{course.price}</p>
                <Link href={`/courses/${course.slug}`} className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300">
                  View Course
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
