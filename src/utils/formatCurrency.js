export default function formatCurrency(
  value,
  currency = 'USD',
  minimumFractionDigits = 0
) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: minimumFractionDigits,
  });

  return formatter.format(value);
}
