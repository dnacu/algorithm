const getVerticalCount = (h, w, n, board) => {
  let result = 0;

  // 세로
  for (let i = 0; i < w; i++) {
    let res = 0;
    for (let j = 0; j < h; j++) {
      const temp = board[j][i];
      if (temp === "0") {
        if (res === n) result++;
        res = 0;
      } else {
        res++;
        if (j === h - 1 && res === n) result++;
      }
    }
  }

  return result;
};

const rightPad = (str, len) => {
  const strLen = str.length;
  return (
    str +
    (strLen < len
      ? Array(len - strLen)
          .fill(0)
          .join("")
      : "")
  );
};

function solution(h, w, n, board) {
  let result = 0;

  // 가로
  for (let i = 0; i < h; i++) {
    const list = board[i];
    let res = 0;
    Array.from(list).forEach((l, idx) => {
      if (l === "0") {
        if (res === n) result++;
        res = 0;
      } else {
        res++;
        if (idx === w - 1 && res === n) result++;
      }
    });
  }

  // 세로
  result += getVerticalCount(h, w, n, board);

  // 우대각
  const rightList = board.map((b, i) => {
    return (
      Array(h - i - 1)
        .fill(0)
        .join("") +
      b +
      Array(i).fill(0).join("")
    );
  });
  result += getVerticalCount(h, w + h - 1, n, rightList);

  //좌대각
  const leftList = board
    .slice()
    .reverse()
    .map((b, i) => {
      return (
        Array(h - i - 1)
          .fill(0)
          .join("") +
        b +
        Array(i).fill(0).join("")
      );
    });
  result += getVerticalCount(h, w + h - 1, n, leftList);

  return result;
}
