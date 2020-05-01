const directions = {
  "U": [0,1],
  "D": [0,-1],
  "R": [1,0],
  "L": [-1,0]
}

const ud = Array.from(Array(12), () => Array(12).fill(0));
const rl = Array.from(Array(12), () => Array(12).fill(0));

function solution(dirs) {
  var answer = 0;
  const pos = [0,0];
  
  dirs.split("").map(d => {
      const [x, y] = directions[d];
      const nx=pos[0]+x, ny=pos[1]+y;
      if(nx<-5 || nx >5 || ny<-5 || ny>5) return;

      switch(d){
          case "U":
              ud[nx+6][ny+5]++;
              break;
          case "D":
              ud[nx+6][pos[1]+5]++;
              break;
          case "R":
              rl[nx+5][ny+6]++;
              break;
          case "L":
              rl[pos[0]+5][ny+6]++;
              break;
      }
      
      pos[0] = nx;
      pos[1] = ny;
  })
  
  for(let i=0; i<12; i++){
      for(let j=0; j<12; j++){
          if(ud[i][j] >= 1) answer++;
          if(rl[i][j] >= 1) answer++;
      }
  }
  
  return answer;
}