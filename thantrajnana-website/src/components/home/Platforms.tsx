import SectionHeader from "@/components/shared/SectionHeader";
import { platforms } from "@/data/platforms";

export default function Platforms() {
  return (
    <section id="platforms" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Scratch Platforms"
          title="One Course, One Dedicated Coding Platform"
          description="Students learn by dragging blocks, building logic and generating real code."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {platforms.map((platform) => (
            <div key={platform} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">▣</div>
              <h3 className="font-semibold text-white">{platform}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
