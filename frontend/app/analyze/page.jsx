'use client';

import { useState } from 'react';
import RiskBadge from '@/components/RiskBadge';
import { analyzeVCF } from '@/lib/api';

const drugs = ['CODEINE', 'WARFARIN', 'CLOPIDOGREL', 'SIMVASTATIN', 'AZATHIOPRINE', 'FLUOROURACIL'];

export default function AnalyzePage() {
  const [file, setFile] = useState(null);
  const [drug, setDrug] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file || !drug) {
      setError('Please upload a VCF file and choose a drug.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const data = await analyzeVCF({ file, drug });
      setResult(data);
    } catch (err) {
      setError(err.response?.data?.error || 'Analysis failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyJson = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(JSON.stringify(result, null, 2));
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Risk Analysis</h1>
      <form onSubmit={onSubmit} className="space-y-6 rounded-3xl bg-white p-8 shadow-soft">
        <div className="rounded-2xl border-2 border-dashed border-cyan-200 p-8 text-center">
          <input
            type="file"
            accept=".vcf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="mx-auto block text-sm"
          />
          <p className="mt-2 text-sm text-slate-500">Drag & drop or choose a VCF file (max 5MB).</p>
        </div>

        <select
          className="w-full rounded-2xl border border-slate-300 p-3"
          value={drug}
          onChange={(e) => setDrug(e.target.value)}
        >
          <option value="">Select drug</option>
          {drugs.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <button
          type="submit"
          disabled={loading}
          className="rounded-2xl bg-primary px-5 py-3 font-semibold text-white transition hover:bg-sky-900 disabled:opacity-60"
        >
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>

        {loading && <div className="h-10 w-10 animate-spin rounded-full border-4 border-accent border-t-transparent" />}
        {error && <p className="rounded-xl bg-rose-50 p-3 text-rose-600">{error}</p>}
      </form>

      {result && (
        <section className="rounded-3xl bg-white p-8 shadow-soft">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-primary">Clinical Output</h2>
            <RiskBadge level={result.riskLevel} />
          </div>
          <div className="grid gap-3 text-sm md:grid-cols-2">
            <p><strong>Patient ID:</strong> {result.patientId}</p>
            <p><strong>Drug:</strong> {result.drug}</p>
            <p><strong>Gene:</strong> {result.gene}</p>
            <p><strong>Phenotype:</strong> {result.phenotype}</p>
            <p className="md:col-span-2"><strong>Recommendation:</strong> {result.recommendation}</p>
            <p className="md:col-span-2"><strong>Explanation:</strong> {result.explanation}</p>
          </div>

          <button onClick={copyJson} className="mt-5 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium">
            Copy JSON
          </button>
          <pre className="mt-4 overflow-auto rounded-2xl bg-slate-900 p-4 text-xs text-cyan-100">
            {JSON.stringify(result, null, 2)}
          </pre>
        </section>
      )}
    </div>
  );
}
