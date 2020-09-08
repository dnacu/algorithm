function solution(clothes) {
  const cmap = new Map();
  clothes.forEach((c) => {
    const [name, category] = c;
    cmap.set(category, (cmap.get(category) || 0) + 1);
  });

  // 전체 경우의 수 = (상의갯수+1) * (모자갯수+1) ... - 1(아무것도 선택되지 않았을 때)
  return (
    [...cmap.values()].reduce((acc, cur) => {
      return acc * (cur + 1);
    }, 1) - 1
  );
}
