import Link from 'next/link';

const features = [
  'Genomic VCF ingestion with secure 5MB upload controls',
  'Drug-gene aware mock pharmacogenomic inference engine',
  'Color-coded clinical risk tiers for rapid interpretation',
  'Structured report output for documentation workflows',
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-gradient-to-r from-primary to-accent p-10 text-white shadow-soft">
        <h1 className="text-4xl font-bold md:text-5xl">PharmaGuard</h1>
        <p className="mt-4 max-w-2xl text-lg text-cyan-50">
          Precision pharmacogenomic risk prediction for safer medication decisions in modern clinical practice.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/analyze" className="rounded-2xl bg-white px-5 py-3 font-semibold text-primary transition hover:scale-105">
            Start Risk Analysis
          </Link>
          <Link href="/how-it-works" className="rounded-2xl border border-white px-5 py-3 font-semibold text-white transition hover:bg-white/20">
            Learn How It Works
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <article key={feature} className="rounded-3xl bg-white p-6 shadow-soft transition hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-primary">Clinical-grade Feature</h3>
            <p className="mt-2 text-slate-600">{feature}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
