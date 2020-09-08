function solution(array, commands) {
  return commands.map((c) => {
    const [i, j, k] = c;
    // compareFunction이 제공되지 않으면 요소를 문자열로 변환하고 유니 코드 코드 포인트 순서로 문자열을 비교하여 정렬됨
    return array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
  });
}
