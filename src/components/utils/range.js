export default function range(start, end) {
  return [...Array(end).keys()].map(el => el + start)
}