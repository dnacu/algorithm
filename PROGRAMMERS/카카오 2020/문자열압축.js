const abstract = (list, n) => {
  const len = list.length;

  let result = "";
  let prev = list.slice(0, n),
    count = 1,
    i = n;
  for (i; i < len; i += n) {
    const cur = list.slice(i, i + n);
    if (cur === prev) {
      count++;
    } else {
      result += `${count > 1 ? count : ""}${prev}`;
      count = 1;
      prev = cur;
    }
  }

  result += `${count > 1 ? count : ""}${prev}`;

  return result.length;
};

function solution(s) {
  const result = [];
  const slen = s.length;
  if (slen < 2) return slen;
  const len = Math.floor(slen / 2);
  for (let i = 0; i < len; i++) {
    result.push(abstract(s, i + 1));
  }

  return Math.min(...result);
}
