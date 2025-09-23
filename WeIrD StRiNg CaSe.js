/*
Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"
*/

function toWeirdCase(str) {
  // Разделяем строку на слова
  return str
    .split(' ')
    .map(word => {
      // Для каждого слова перебираем символы
      return word
        .split('')
        .map((char, index) => {
          // Чётные индексы - заглавные, нечётные - строчные
          return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        })
        .join('');
    })
    .join(' ');
}