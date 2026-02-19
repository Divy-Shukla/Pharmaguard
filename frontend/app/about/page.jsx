export default function AboutPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">About PharmaGuard</h1>
      <section className="rounded-3xl bg-white p-8 shadow-soft">
        <h2 className="text-xl font-semibold text-primary">Pharmacogenomics Overview</h2>
        <p className="mt-3 text-slate-700">
          Pharmacogenomics links genomic variants with medication safety and efficacy, enabling precision prescribing and reduced adverse drug reactions.
        </p>
      </section>
      <section className="rounded-3xl bg-white p-8 shadow-soft">
        <h2 className="text-xl font-semibold text-primary">What is a VCF?</h2>
        <p className="mt-3 text-slate-700">
          A Variant Call Format (VCF) file is a structured genomic format describing sequence variants that can be interpreted for clinical decision support.
        </p>
      </section>
      <section className="rounded-3xl bg-white p-8 shadow-soft">
        <h2 className="text-xl font-semibold text-primary">JSON Output Example</h2>
        <pre className="mt-4 overflow-auto rounded-2xl bg-slate-900 p-4 text-sm text-cyan-100">
{`{
  "patientId": "PG-A93F1",
  "drug": "WARFARIN",
  "gene": "CYP2C9",
  "phenotype": "Intermediate metabolizer",
  "riskLevel": "YELLOW",
  "recommendation": "Start with lower dose and monitor INR frequently.",
  "explanation": "Reduced CYP2C9 function may decrease warfarin clearance.",
  "timestamp": "2026-01-01T12:34:56.000Z"
}`}
        </pre>
      </section>
    </div>
  );
}
