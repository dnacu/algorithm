// 2부터 Math.sqrt(num) 까지만 탐색하면 소수를 찾을 수 있다.
const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

function solution(numbers) {
  const list = numbers.split("");
  const nset = new Set();

  const getNumberSet = (nlist, cur) => {
    if (!nlist.length) {
      return;
    }

    nlist.forEach((n, i) => {
      // splice함수는 삭제한 부분(자른 부분)을 리턴하며, 원본 배열을 수정한다. 주의할 것!
      const l = nlist.slice();
      l.splice(i, 1);
      nset.add(parseInt(`${cur}${n}`));
      getNumberSet(l, `${cur}${n}`);
    });
  };

  getNumberSet(list, "");
  return [...nset].filter((n) => isPrime(n)).length;
}
