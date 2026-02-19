import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  timeout: 15000,
});

export async function analyzeVCF({ file, drug }) {
  const formData = new FormData();
  formData.append('vcfFile', file);
  formData.append('drug', drug);

  const { data } = await api.post('/analyze', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return data;
}
