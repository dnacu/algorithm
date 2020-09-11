function solution(key, lock) {
  const m = key[0].length,
    n = lock[0].length;

  const pad = n + 2 * (m - 1);
  const padBlock = Array.from({ length: m - 1 }).map((_, i) =>
    Array(pad).fill(0)
  );
  const padSide = Array(m - 1).fill(0);

  const padLock = [];
  lock.forEach((l) => {
    padLock.push([...padSide, ...l, ...padSide]);
  });

  const list = [...padBlock, ...padLock, ...padBlock];

  const rotate = (arr) => {
    const len = arr.length;
    const rotateArr = Array.from({ length: len }).map((_) =>
      Array(len).fill(0)
    );
    arr.forEach((le, i) => {
      le.forEach((l, j) => {
        rotateArr[j][len - 1 - i] = arr[i][j];
      });
    });

    return rotateArr;
  };

  let cur = key;
  const rotatedKeyList = Array.from({ length: 4 }).map((a, i) => {
    if (!i) return cur;
    cur = rotate(cur);
    return cur;
  });

  const validList = (vList) => {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (vList[i + m - 1][j + m - 1] !== 1) {
          return false;
        }
      }
    }
    return true;
  };

  const limit = n + m - 1;
  for (let q = 0; q < 4; q++) {
    const curKey = rotatedKeyList[q];
    for (let i = 0; i < limit; i++) {
      for (let j = 0; j < limit; j++) {
        let copiedList = [...list.map((l) => [...l])];
        for (let x = 0; x < m; x++) {
          for (let y = 0; y < m; y++) {
            copiedList[i + x][j + y] += curKey[x][y];
          }
        }
        if (validList(copiedList)) {
          return true;
        }
      }
    }
  }

  return false;
}
