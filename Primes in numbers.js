/*
Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/

function primeFactors(n) {
  let factors = [];
  let num = n;

  // Проверяем делимость на 2
  let count = 0;
  while (num % 2 === 0) {
    count++;
    num /= 2;
  }
  if (count > 0) {
    factors.push({ p: 2, n: count });
  }

  // Проверяем нечетные делители
  let divisor = 3;
  while (divisor * divisor <= num) {
    count = 0;
    while (num % divisor === 0) {
      count++;
      num /= divisor;
    }
    if (count > 0) {
      factors.push({ p: divisor, n: count });
    }
    divisor += 2;
  }

  // Если остался делитель больше 1, он прост
  if (num > 1) {
    factors.push({ p: num, n: 1 });
  }

  // Формируем строку результата
  return factors
    .map(f => (f.n > 1 ? `(${f.p}**${f.n})` : `(${f.p})`))
    .join('');
}