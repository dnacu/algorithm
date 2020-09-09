function solution(numbers, target) {
  let result = 0;
  const nlen = numbers.length;

  const bfs = (depth, sum) => {
    if (depth === nlen) {
      if (sum === target) result++;
      return;
    }

    const val = numbers[depth];
    Array(1, -1).forEach((t) => {
      bfs(depth + 1, sum + t * val);
    });
  };

  bfs(0, 0);
  return result;
}
