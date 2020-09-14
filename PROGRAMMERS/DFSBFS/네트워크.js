function solution(n, computers) {
  const result = [];
  const list = new Set(Array.from({ length: n }).map((_, i) => i));

  const dfs = (idx, res) => {
    list.delete(idx);
    const cur = computers[idx];
    let last = true;

    Array.from(list).forEach((l) => {
      if (cur[l] === 1) {
        dfs(l, [...res, l]);
        last = false;
      }
    });

    if (last) {
      result.push(res);
      return;
    }
  };

  list.forEach((_, i) => {
    dfs(i, [i]);
  });

  return result.length;
}
