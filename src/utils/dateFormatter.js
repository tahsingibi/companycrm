export default function dateFormatter(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('tr-TR')?.replaceAll('.', '/');
}
