export default function normalizeString(str) {
  const lowercased = str.toLowerCase();
  const normalized = lowercased
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return normalized;
}
