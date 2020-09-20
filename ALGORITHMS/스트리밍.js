// 효율성 불통
function solution(playList, time) {
  const pLen = playList.length;

  const addList = playList.concat(playList);

  const getCount = (start, end) => {
    let acc = 0,
      count = 0;
    addList.some((p) => {
      acc += p;
      if (acc > start) count++;

      if (acc >= end) return true;
    });

    return count;
  };

  const sum = playList.reduce((acc, cur) => acc + cur, 0);
  if (sum < time) return pLen;

  let result = 0;
  Array.from({ length: sum }).some((_, i) => {
    const res = getCount(i, i + time);
    if (res > result) result = res;
  });

  return result;
}
