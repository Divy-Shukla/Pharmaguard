const RULES = {
  CODEINE: {
    gene: 'CYP2D6',
    phenotype: 'Ultra-rapid metabolizer',
    riskLevel: 'RED',
    recommendation: 'Avoid codeine; consider non-CYP2D6 opioid alternatives.',
    explanation:
      'CYP2D6 ultra-rapid metabolism can convert codeine to morphine too quickly, increasing toxicity risk.',
  },
  WARFARIN: {
    gene: 'CYP2C9',
    phenotype: 'Intermediate metabolizer',
    riskLevel: 'YELLOW',
    recommendation: 'Start with lower dose and monitor INR frequently.',
    explanation:
      'Reduced CYP2C9 function may decrease warfarin clearance and increase bleeding risk.',
  },
  CLOPIDOGREL: {
    gene: 'CYP2C19',
    phenotype: 'Poor metabolizer',
    riskLevel: 'RED',
    recommendation: 'Consider prasugrel or ticagrelor based on clinical context.',
    explanation:
      'CYP2C19 poor metabolism can reduce active clopidogrel metabolite formation and impair antiplatelet efficacy.',
  },
  SIMVASTATIN: {
    gene: 'SLCO1B1',
    phenotype: 'Decreased transporter function',
    riskLevel: 'YELLOW',
    recommendation: 'Use lower dose or switch to alternate statin with lower myopathy risk.',
    explanation:
      'SLCO1B1 reduced function can elevate simvastatin plasma levels and increase myopathy risk.',
  },
  AZATHIOPRINE: {
    gene: 'TPMT',
    phenotype: 'Low activity',
    riskLevel: 'RED',
    recommendation: 'Reduce starting dose substantially or use alternative therapy.',
    explanation:
      'Low TPMT activity elevates active thiopurine metabolites and severe myelosuppression risk.',
  },
  FLUOROURACIL: {
    gene: 'DPYD',
    phenotype: 'Partial deficiency',
    riskLevel: 'RED',
    recommendation: 'Use reduced dose and close toxicity monitoring, or choose alternative regimen.',
    explanation:
      'DPYD deficiency can reduce fluorouracil catabolism and cause life-threatening toxicity.',
  },
};

const SUPPORTED_DRUGS = Object.keys(RULES);

function evaluateDrugRisk(drug) {
  return RULES[drug] || null;
}

module.exports = { evaluateDrugRisk, SUPPORTED_DRUGS };
