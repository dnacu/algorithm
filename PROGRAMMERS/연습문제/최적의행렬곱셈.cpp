#include <string>
#include <vector>
#include <cstring>

using namespace std;

const int MAX=987654321;
vector<vector<int>> m;
int msize;
int dp[201][201];

int func(int s, int f){
    if(s == f) {
        return 0;
    }
    
    int &ret = dp[s][f];
    if(ret != -1) {
        return ret;
    }
    ret = MAX;
    for(int i=s; i<f; i++){
        ret = min(ret, func(s,i) + func(i+1,f) + m[s][0]*m[i][1]*m[f][1]);
    }
    
    return ret;
}


int solution(vector<vector<int>> matrix_sizes) {
    m = matrix_sizes;
    msize = m.size();
    memset(dp, -1, sizeof(dp));
    
    return func(0, msize-1);
   
}