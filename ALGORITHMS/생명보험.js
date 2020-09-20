function solution(table) {
  const list = table.map((t) =>
    parseInt(
      Array.from(t)
        .map((x) => (x === "X" ? 0 : 1))
        .join("")
        .toString(2),
      2
    )
  );

  let result = 8;
  const des = Math.pow(2, table[0].length) - 1;
  const dfs = (list, acc, dep) => {
    if (dep > result) return;
    if (acc === des && dep < result) {
      result = dep;
      return;
    }

    list.forEach((l, i) => {
      const temp = list.slice();
      temp.splice(i, 1);
      dfs(temp, acc | l, dep + 1);
    });
  };

  dfs(list, 0, 0);

  return result;
}
