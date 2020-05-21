function solution(N) {
  let fib = [0, 1, 1];
  for(let i=2; i<N; i++) {
      fib.push(fib[i] + fib[i-1]);
  }
  
  return fib[N]*2 + (fib[N]+fib[N-1])*2;
}