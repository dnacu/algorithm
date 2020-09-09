const list = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  const result = [0, 0, 0];
  answers.forEach((a, i) => {
    list.forEach((l, j) => {
      if (a === l[i % l.length]) result[j] += 1;
    });
  });

  const max = Math.max(...result);
  return result.reduce((acc, cur, i) => {
    if (cur === max) return [...acc, i + 1];
    return acc;
  }, []);
}
