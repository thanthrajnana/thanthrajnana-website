import SectionHeader from "@/components/shared/SectionHeader";

const reasons = [
  "Visual coding for school students",
  "Real projects instead of only theory",
  "Hardware kits for IoT, Arduino and robotics",
  "Progress tracking and certificates",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-900 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Why Thantrajnana"
          title="Designed for Practical Technology Learning"
          description="Our platform connects software learning, hardware experiments and project-based education."
        />
        <div className="grid gap-5 md:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason} className="rounded-2xl bg-slate-950 p-6 text-slate-300">
              <span className="text-2xl text-cyan-300">✓</span>
              <p className="mt-4 font-medium">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
