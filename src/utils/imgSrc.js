export default function imgSrc(path) {
  const url = path.startsWith('http')
    ? path
    : `${window.location.origin}/${path}`;

  return url;
}
