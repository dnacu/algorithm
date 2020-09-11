function solution(relation) {
  const columns = relation[0].length;
  const rows = relation.length;
  const rset = new Set();

  const validate = (list) => {
    const rset = new Set();
    const len = list.length;

    if (!len) return false;
    for (let i = 0; i < rows; i++) {
      const str = list.reduce((acc, cur) => {
        let s = relation[i][cur];

        return (
          acc +
          s +
          Array.from({ length: 8 - s.length })
            .map(() => "")
            .join("0")
        );
      }, "");

      if (rset.has(str)) return false;

      rset.add(str);
    }

    return true;
  };

  const idxList = Array.from({ length: columns }).map((_, i) => i);
  const numSet = new Set();

  const dfs = (list, rest) => {
    numSet.add(list.sort((a, b) => a - b).join(""));

    rest.forEach((l, i) => {
      const temp = rest.slice();
      temp.splice(i, 1);
      dfs(list.concat([l]), temp);
    });
  };

  dfs([], idxList);

  const resultList = [];

  Array.from(numSet).forEach((l) => {
    const temp = l.split("");

    if (validate(temp)) {
      let go = true;
      resultList.some((r) => {
        if (l.indexOf(r) >= 0 || r.indexOf(l) >= 0) {
          go = false;
          return true;
        }
      });
      if (go) {
        resultList.push(l);
      }
    }
  });

  return resultList.length;
}
