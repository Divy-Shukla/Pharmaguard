export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container-shell py-6 text-sm text-slate-500">
        © {new Date().getFullYear()} PharmaGuard · Precision Pharmacogenomic Risk Prediction System
      </div>
    </footer>
  );
}
