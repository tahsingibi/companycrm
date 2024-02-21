export default function dateFormatter(timestamp) {
  const date = new Date(timestamp);
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const newDate = new Intl.DateTimeFormat('tr-TR', options).format(date);
  const replacedNewDate = newDate?.replaceAll('.', '/');
  return replacedNewDate;
}
