'use client';

import { useMemo } from 'react';
import RiskBadge from '@/components/RiskBadge';

export default function ReportPage() {
  const mockReport = useMemo(
    () => ({
      patientId: 'PG-DEMO1',
      drug: 'CLOPIDOGREL',
      gene: 'CYP2C19',
      phenotype: 'Poor metabolizer',
      riskLevel: 'RED',
      recommendation: 'Use an alternative antiplatelet such as prasugrel where clinically appropriate.',
      explanation:
        'Predicted reduced conversion to active clopidogrel metabolite may reduce efficacy and increase thrombotic risk.',
      timestamp: new Date().toISOString(),
    }),
    []
  );

  return (
    <div className="mx-auto max-w-4xl space-y-6 rounded-3xl bg-white p-10 shadow-soft print:shadow-none">
      <h1 className="text-3xl font-bold text-primary">Clinical Pharmacogenomic Report</h1>
      <div className="rounded-2xl bg-slate-50 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Risk Summary</h2>
          <RiskBadge level={mockReport.riskLevel} />
        </div>
        <p className="mt-4"><strong>Detected Gene:</strong> {mockReport.gene}</p>
        <p><strong>Drug:</strong> {mockReport.drug}</p>
        <p><strong>Phenotype:</strong> {mockReport.phenotype}</p>
      </div>

      <section>
        <h3 className="text-lg font-semibold text-primary">Clinical Recommendation</h3>
        <p className="mt-2 text-slate-700">{mockReport.recommendation}</p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-primary">AI Explanation</h3>
        <p className="mt-2 text-slate-700">{mockReport.explanation}</p>
      </section>

      <section className="rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">
        <strong>Disclaimer:</strong> This mock clinical output is for demonstration only and must not replace licensed medical judgement.
      </section>
    </div>
  );
}
