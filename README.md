# PharmaGuard – Precision Pharmacogenomic Risk Prediction System

PharmaGuard is a full-stack web application for mock pharmacogenomic risk prediction from VCF uploads and selected medications.

## Project Structure

```bash
Pharmaguard/
├── backend/
│   ├── config/
│   │   └── multerConfig.js
│   ├── controllers/
│   │   └── analyzeController.js
│   ├── routes/
│   │   └── analyzeRoutes.js
│   ├── utils/
│   │   └── ruleEngine.js
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── app/
│   │   ├── about/page.jsx
│   │   ├── analyze/page.jsx
│   │   ├── how-it-works/page.jsx
│   │   ├── report/page.jsx
│   │   ├── globals.css
│   │   ├── layout.jsx
│   │   └── page.jsx
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── RiskBadge.jsx
│   ├── lib/
│   │   └── api.js
│   ├── jsconfig.json
│   ├── next.config.mjs
│   ├── package.json
│   ├── postcss.config.js
│   └── tailwind.config.js
└── sample.vcf
```

## Backend Setup

```bash
cd backend
npm install
node index.js
```

Backend runs at `http://localhost:5000`.

### API

`POST /analyze`

- `multipart/form-data`
- `vcfFile` (required, `.vcf`, max 5MB)
- `drug` (required)

Returns:

```json
{
  "patientId": "PG-XXXX",
  "drug": "CODEINE",
  "gene": "CYP2D6",
  "phenotype": "Ultra-rapid metabolizer",
  "riskLevel": "RED",
  "recommendation": "Avoid codeine...",
  "explanation": "...",
  "timestamp": "ISO_DATE"
}
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:3000`.

Set API endpoint if needed:

```bash
NEXT_PUBLIC_API_URL=http://localhost:5000
```
