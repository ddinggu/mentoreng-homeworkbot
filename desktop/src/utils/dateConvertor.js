export const humanConverter = date => {
  const yyyy = date.getFullYear() + '년';
  const mm = (date.getMonth() < 9 ? `0${date.getMonth() + 1}` : (date.getMonth() + 1)) + '월';
  const dd = (date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()) + '일';
  const hh = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(); 
  const min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  return ''.concat(yyyy).concat(' ').concat(mm).concat(' ').concat(dd).concat(' ').concat(hh)
    .concat(':')
    .concat(min);
};

export const convertKorDate = date => {
  const korDate = new Date(date);
  return humanConverter(korDate);
};

// date.js require '31st of September 4:00am' format. (not just ISO date)
export const dateParser = reservationDate => {
  const date = dateObject(reservationDate);

  const day = stringifyDay(date.day);
  const month = stringifyMonth(date.month);
  const time = date.hours + ':' + date.minutes;
  
  return `${day} of ${month} ${time}`;
};

const dateObject = date => {
  return {
    month: date.getMonth(),
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
  }
};

const stringifyMonth = month => {
  if(month === 0) return 'January';
  if(month === 1) return 'February';
  if(month === 2) return 'March';
  if(month === 3) return 'April';
  if(month === 4) return 'May';
  if(month === 5) return 'June';
  if(month === 6) return 'July';
  if(month === 7) return 'August';
  if(month === 8) return 'September';
  if(month === 9) return 'October';
  if(month === 10) return 'November';
  if(month === 11) return 'December';
};

const stringifyDay = day => {
  const lastNum = day % 10;

  if(lastNum === 1) return `${day}st`;
  if(lastNum === 2) return `${day}nd`;
  if(lastNum === 3) return `${day}rd`;
  return `${day}th`;
};

