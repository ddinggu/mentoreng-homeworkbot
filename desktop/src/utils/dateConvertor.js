export default function DateToString(pDate) {
  const yyyy = pDate.getFullYear();
  const mm = pDate.getMonth() < 9 ? `0${pDate.getMonth() + 1}` : (pDate.getMonth() + 1); // getMonth() is zero-based
  const dd = pDate.getDate() < 10 ? `0${pDate.getDate()}` : pDate.getDate();
  const hh = pDate.getHours() < 10 ? `0${pDate.getHours()}` : pDate.getHours();
  const min = pDate.getMinutes() < 10 ? `0${pDate.getMinutes()}` : pDate.getMinutes();
  return ''.concat(yyyy).concat('-').concat(mm).concat('-')
    .concat(dd)
    .concat(' ')
    .concat(hh)
    .concat(':')
    .concat(min);
}
