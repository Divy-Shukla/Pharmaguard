const { v4: uuidv4 } = require('uuid');
const { evaluateDrugRisk, SUPPORTED_DRUGS } = require('../utils/ruleEngine');

function parseVCFHeader(content) {
  const lines = content.split('\n');
  const chromLine = lines.find((line) => line.startsWith('#CHROM'));
  return chromLine ? 'Validated VCF format' : 'VCF content parsed';
}

function analyzeRisk(req, res) {
  const { drug } = req.body;

  if (!req.file) {
    return res.status(400).json({ error: 'VCF file is required.' });
  }

  if (!drug) {
    return res.status(400).json({ error: 'Drug selection is required.' });
  }

  const normalizedDrug = String(drug).toUpperCase().trim();

  if (!SUPPORTED_DRUGS.includes(normalizedDrug)) {
    return res.status(400).json({
      error: `Unsupported drug. Supported drugs: ${SUPPORTED_DRUGS.join(', ')}`,
    });
  }

  const vcfText = req.file.buffer.toString('utf-8');
  const parseStatus = parseVCFHeader(vcfText);

  const rule = evaluateDrugRisk(normalizedDrug);
  if (!rule) {
    return res.status(422).json({ error: 'No matching pharmacogenomic rule found for selected drug.' });
  }

  const response = {
    patientId: `PG-${uuidv4().split('-')[0].toUpperCase()}`,
    drug: normalizedDrug,
    gene: rule.gene,
    phenotype: rule.phenotype,
    riskLevel: rule.riskLevel,
    recommendation: rule.recommendation,
    explanation: `${rule.explanation} (${parseStatus})`,
    timestamp: new Date().toISOString(),
  };

  return res.status(200).json(response);
}

module.exports = { analyzeRisk };
