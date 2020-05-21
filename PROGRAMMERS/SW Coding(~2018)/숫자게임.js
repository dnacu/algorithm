function solution(A, B) {
  var answer = 0;
  A.sort((a,b) => b-a);
  B.sort((a,b) => b-a);
  let j = 0;
  let blen = B.length;
  for(let i=0; i<A.length; i++){
      if(A[i] < B[j]){
          answer++;
          j++;
      }
  }
  return answer;
}