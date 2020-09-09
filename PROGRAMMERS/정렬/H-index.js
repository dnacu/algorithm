function solution(citations) {
  let answer = 0;
  const n = citations.length;
  const tmp = citations.sort((a, b) => a - b);
  if (tmp[0] >= n) return n;
  tmp.map((h, i) => {
    if (n - i >= h) {
      answer = h;
      if (i + 1 < n) {
        const next = tmp[i + 1] - h - 1;
        for (let j = h + 1; j <= h + next; j++) {
          if (n - i - 1 >= j) {
            answer = j;
          }
        }
      }
    }
  });

  return answer;
}

function solution2(citations) {
  const clen = citations.length;
  const list = citations.sort((a, b) => a - b);

  if (list[clen - 1] === 0) return 0;
  let prev = 0,
    next = clen;

  list.forEach((c, i) => {
    const r = clen - i;
    if (c >= i + 1 && r >= c) {
      prev = c;
      next = r - 1;
    }
  });

  let result = prev;
  for (let i = prev + 1; i <= next; i++) {
    if (i > next) return result;
    else result = i;
  }
  return result;
}
