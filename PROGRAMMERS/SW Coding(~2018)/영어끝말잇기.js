const solution = (n, words) => {
  const answer = [0, 0];

  // n은 사람 수, words는 단어배열
  const wsize = words.length;
  const setAnswer = (a, b) => {
    answer[0] = a;
    answer[1] = b;
  };

  let num = 0,
    order = 0;
  const wordList = {};

  for (let i = 0; i < wsize; i++) {
    // i+1은 현재 진행횟수
    // (i+1)%n은 번호
    // Math.floor((i+1)/n)은 몇번째차례인지
    num = (i + 1) % n || n;
    order = Math.floor(i / n) + 1;

    // 이전 단어끝이랑 다르면
    if (i > 0 && words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      setAnswer(num, order);
      break;
    }

    // 이미 말했던 단어면
    if (wordList[words[i]]) {
      setAnswer(num, order);
      break;
    } else {
      wordList[words[i]] = true;
    }
  }

  return answer;
};
