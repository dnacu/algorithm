function solution(array, commands) {
  var answer = [];
  
  commands.map(c => {
      const [i, j, k] = c;
      const tmp = array.slice(i-1, j).sort((a,b) => a-b);
      answer.push(tmp[k-1]);
  })
  
  return answer;
}