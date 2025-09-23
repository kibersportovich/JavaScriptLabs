/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

   12 --> "10 + 2"
   45 --> "40 + 5"
70304 --> "70000 + 300 + 4"
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
  // Преобразуем число в строку, разбиваем на отдельные цифры
  const digits = num.toString().split('');
  
  // Создаем массив с расширенной формой
  const expanded = digits.map((digit, index) => {
    if (digit === '0') return ''; // пропускаем нули
    // Вычисляем разрядность: 10^(длина - индекс - 1)
    const zerosCount = digits.length - index - 1;
    const value = digit + '0'.repeat(zerosCount);
    return value;
  }).filter(Boolean); // удаляем пустые строки

  // Объединяем через " + "
  return expanded.join(' + ');
}