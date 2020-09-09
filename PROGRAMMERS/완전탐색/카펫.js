// 2부터 Math.sqrt(num) 까지만 탐색하면 소수를 찾을 수 있다.
const getFactors = (num) => {
  const result = [];
  let i = 1;
  for (i; i * i < num; i++) {
    const div = num / i;
    if (div === Math.floor(div)) result.push([div, i]);
  }

  if (i * i === num) result.push([i, i]);

  return result;
};

function solution(brown, yellow) {
  const list = getFactors(brown + yellow);

  for (let factor of list) {
    const [w, h] = factor;
    if (2 * w + 2 * h - 4 === brown) return factor;
  }
}
