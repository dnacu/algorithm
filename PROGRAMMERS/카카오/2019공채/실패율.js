function solution(N, stages) {
  const smap = new Map();
  const len = stages.length;

  stages.forEach((s, i) => smap.set(s, (smap.get(s) || 0) + 1));

  const result = [];
  let total = len;
  Array.from({ length: N }).forEach((_, i) => {
    const val = smap.get(i + 1) || 0;
    result.push([i + 1, val / total]);
    total -= val;
  });

  return result
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      } else return b[1] - a[1];
    })
    .map((r) => r[0]);
}
