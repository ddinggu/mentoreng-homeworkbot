export const humanConverter = date => {
  const yyyy = date.getFullYear() + '년';
  const mm = (date.getMonth() < 9 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1)) + '월';
  const dd = (date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()) + '일';
  const hh = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(); 
  const min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return ''.concat(yyyy).concat(' ').concat(mm).concat(' ').concat(dd).concat(' ').concat(hh)
    .concat(':')
    .concat(min);
}

export const convertKorDate = date => {
  const korDate = new Date(date);
  return humanConverter(korDate);
}