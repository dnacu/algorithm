const MAX_STRLEN = 8;

const padString = (str, len) => {
  return Array.from({ length: len - str.length + 1 }).join("0") + str;
};

function solution(relation) {
  const columns = relation[0].length;
  const rows = relation.length;

  const validate = (list) => {
    const rset = new Set();
    const len = list.length;
    for (let i = 0; i < rows; i++) {
      let temp = "";
      for (let j = 0; j < len; j++) {
        if (list[j] === "1") temp += padString(relation[i][j], MAX_STRLEN);
      }
      if (rset.has(temp)) return false;
      rset.add(temp);
    }
    return true;
  };

  const resultList = [];

  const list = Array.from({ length: Math.pow(2, columns) - 1 }).map((_, i) => {
    const str = padString(parseInt(i + 1).toString(2), columns);

    if (validate(str)) {
      let go = true;
      resultList.some((r) => {
        const a = parseInt(r, 2);
        const b = parseInt(str, 2);
        const c = a | b;
        if (a === c || b === c) {
          go = false;
          return true;
        }
      });
      if (go) resultList.push(str);
    }
  });

  return resultList.length;
}
