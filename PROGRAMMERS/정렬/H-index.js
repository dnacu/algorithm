function solution(citations) {
  let answer = 0;
  const n = citations.length;
  const tmp = citations.sort((a,b) => a-b);
  if(tmp[0] >= n) return n;
  tmp.map((h, i) => {
      if(n-i >= h){
          answer = h;
          if(i+1 < n){
              const next = tmp[i+1]-h-1;
              for(let j=h+1; j<=h+next; j++){
                  if(n-i-1 >= j){
                      answer = j;
                  }    
              }
          }
      }
  })
  
  return answer;
}