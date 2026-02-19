const badgeStyles = {
  GREEN: 'bg-emerald-100 text-emerald-700',
  YELLOW: 'bg-amber-100 text-amber-700',
  RED: 'bg-rose-100 text-rose-700',
};

const labels = {
  GREEN: 'Safe',
  YELLOW: 'Adjust Dose',
  RED: 'High Risk',
};

export default function RiskBadge({ level }) {
  if (!level) return null;
  return (
    <span className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${badgeStyles[level]}`}>
      {level} · {labels[level]}
    </span>
  );
}
