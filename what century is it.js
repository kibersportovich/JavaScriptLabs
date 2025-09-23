/*
Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
"1999" --> "20th"
"2011" --> "21st"
"2154" --> "22nd"
"2259" --> "23rd"
"1124" --> "12th"
"2000" --> "20th"
*/

function whatCentury(yearStr) {
  const year = parseInt(yearStr, 10);
  const centuryNumber = Math.ceil(year / 100);
  
  // Определяем правильное окончание
  const lastTwoDigits = centuryNumber % 100;
  let suffix;
  
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    suffix = 'th';
  } else {
    const lastDigit = centuryNumber % 10;
    switch (lastDigit) {
      case 1:
        suffix = 'st';
        break;
      case 2:
        suffix = 'nd';
        break;
      case 3:
        suffix = 'rd';
        break;
      default:
        suffix = 'th';
    }
  }
  
  return `${centuryNumber}${suffix}`;
}