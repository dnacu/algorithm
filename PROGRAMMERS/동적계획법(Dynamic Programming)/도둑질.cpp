#include <string>
#include <vector>

using namespace std;

int dp1[1000000], dp2[1000000];

int solution(vector<int> money) {
    int size = money.size(), i = 2;
    
    dp1[0] = dp1[1] = money[0];
    dp2[0] = 0;
    dp2[1] = money[1];

    for(i; i<size; i++){
        dp1[i] = max(dp1[i-2]+money[i], dp1[i-1]);   
        dp2[i] = max(dp2[i-2]+money[i], dp2[i-1]);
    }
    
    return max(dp1[size-2], dp2[size-1]);
}