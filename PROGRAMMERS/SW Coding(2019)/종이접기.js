function solution(n) {
  let answer = [0];
  for(let i =1; i<n; i++){
      let reverse = answer.slice().reverse()
      reverse = reverse.map(r => r===0?1:0)
      answer.push(0);
      answer = answer.concat(reverse);
  }
  return answer;
}