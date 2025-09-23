/*
An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

Example
findMissing([1, 3, 5, 9, 11]) == 7
PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!
*/

function findMissing(arr) {  
  let diffCandidates = [];

  // Проверяем первые три элемента, чтобы определить возможную разность
  let possibleDiffs = [
    Math.abs(arr[1] - arr[0]),
    Math.abs(arr[2] - arr[1]),
    Math.abs(arr[2] - arr[0]) / 2 // на случай, если пропущен элемент между 0 и 2
  ];

  // Выбираем наиболее вероятную разность, которая встречается чаще всего
  let diffCount = {};
  for (let d of possibleDiffs) {
    diffCount[d] = (diffCount[d] || 0) + 1;
  }
  // Находим наиболее часто встречающуюся разность
  let diff;
  let maxCount = 0;
  for (let key in diffCount) {
    if (diffCount[key] > maxCount) {
      maxCount = diffCount[key];
      diff = Number(key);
    }
  }

  // Проходим по массиву и ищем место, где разница не соответствует найденной
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i+1] - arr[i] !== diff) {
      // Пропущенный элемент между arr[i] и arr[i+1]
      return arr[i] + diff;
    }
  }
}