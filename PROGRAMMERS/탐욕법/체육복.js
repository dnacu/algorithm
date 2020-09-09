function solution(n, lost, reserve) {
  const nlist = Array.from({ length: n }).map(() => 1);
  lost.forEach((l) => (nlist[l - 1] -= 1));
  reserve.forEach((r) => (nlist[r - 1] += 1));

  const nlen = nlist.length;
  for (let i = 0; i < nlen; i++) {
    const cur = nlist[i];
    if (cur === 0) {
      if (i > 0 && nlist[i - 1] > 1) {
        nlist[i] = 1;
        nlist[i - 1] -= 1;
        continue;
      }

      if (i < nlen - 1 && nlist[i + 1] > 1) {
        nlist[i] = 1;
        nlist[i + 1] -= 1;
        continue;
      }
    }
  }

  return nlist.filter((n) => n > 0).length;
}
