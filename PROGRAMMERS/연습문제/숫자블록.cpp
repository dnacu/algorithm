#include <string>
#include <vector>
#include <math.h>

using namespace std;

vector<int> solution(long long begin, long long end) {
    vector<int> arr;
    
    if(begin==1){
        arr.push_back(0);
        begin+=1;
    }
    
    bool f = false;

    for(long long i=begin; i<=end; i++){
        f = false;
        long long sq = sqrt(end);
        
        for(long long j=2; j<=sq; j++){
            if(i%j==0) {
                int div = i/j;
                if(div > 10000000){
                    continue;  
                }
                arr.push_back(div);
                f = true;
                break;
            }
        }
        if(!f) arr.push_back(1);
    }
    
    return arr;
}