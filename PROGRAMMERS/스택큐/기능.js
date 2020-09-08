function solution(progresses, speeds) {
  const remain = progresses.map((p, i) => {
    const s = speeds[i];
    return Math.ceil((100 - p) / s);
  });

  const result = [];
  let max = remain[0],
    count = 0;
  const len = remain.length;

  remain.forEach((r, i) => {
    if (r > max) {
      result.push(count);
      max = r;
      count = 1;
    } else {
      count++;
    }
    if (len - 1 === i) result.push(count);
  });

  return result;
}
