const steps = [
  { icon: '🧬', title: 'Upload VCF', text: 'Clinician uploads genomic VCF file with patient variants.' },
  { icon: '💊', title: 'Choose Drug', text: 'Select medication candidate for therapy planning.' },
  { icon: '⚙️', title: 'Rule Engine', text: 'PharmaGuard maps drug to supported pharmacogenomic rules.' },
  { icon: '🚦', title: 'Risk Stratification', text: 'Engine emits GREEN, YELLOW, or RED risk with phenotype.' },
  { icon: '📄', title: 'Clinical Report', text: 'Structured output supports documentation and team review.' },
];

export default function HowItWorksPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">How It Works</h1>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-3xl bg-white p-6 shadow-soft">
            <p className="text-3xl">{step.icon}</p>
            <p className="mt-3 text-sm font-semibold text-accent">Step {index + 1}</p>
            <h2 className="text-xl font-semibold text-primary">{step.title}</h2>
            <p className="mt-2 text-slate-600">{step.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
