type SectionHeaderProps = {
  label: string;
  title: string;
  description: string;
};

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">{label}</p>
      <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-slate-300">{description}</p>
    </div>
  );
}
