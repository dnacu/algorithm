function solution(numbers) {
  // 작은 단위로 생각하는 것이 중요하다.
  const sortedList = numbers.sort((a, b) => {
    const x = parseInt(`${a}${b}`);
    const y = parseInt(`${b}${a}`);
    return y - x;
  });

  // 문자열 - 숫자를 변환하며 다룰 때는 항상 0을 체크해 주는 것이 좋다.
  if (sortedList[0] === 0) return "0";
  return sortedList.join("");
}
