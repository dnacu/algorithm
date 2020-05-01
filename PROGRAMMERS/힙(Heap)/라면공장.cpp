#include <string>
#include <vector>
#include <iostream>

using namespace std;

int restDays[20001];
int requiredStocks[20001];

int solution(int stock, vector<int> dates, vector<int> supplies, int k) {
    int idx = 1;
    int restDay = 0, requiredStock = 0;
    int dsize = dates.size();
    restDays[0] = k;
    requiredStocks[0] = 0;
    
    for(int i=dsize-1; i>=0; i--){
        restDay = restDays[idx-1]-dates[i];
        requiredStock = restDay+requiredStocks[idx-1]-supplies[i];
        // cout << dates[i]<<" "<<restDay<<" "<<requiredStock<<" " << endl;
        if(requiredStock > 0){
            restDays[idx] = dates[i];
            requiredStocks[idx] = requiredStock;
            if(i>0) idx++;
        } else{
            int flag = false;
            for(int j=idx-2; j>=0; j++){
                restDay = restDays[j]-dates[i];
                requiredStock = restDay+requiredStocks[j]-supplies[i];
                if(requiredStock <= 0){
                    restDays[j+1] = dates[i];
                    requiredStocks[j+1] = requiredStock;
                    idx = j+1;
                    flag = true;
                    break;
                }
            }
            if(!flag) {
                restDays[idx] = dates[i];
                requiredStocks[idx] = requiredStock;
                if(i>0) idx++;
            }
        }
    }
    
    for(int i=0; i<=idx+11; i++){
        cout << restDays[i] << " ";
    }
    cout << endl;
    
    for(int i=0; i<=idx+11; i++){
        cout << requiredStocks[i] << " ";
    }
    cout << endl;
    
    return idx;
}

int main(void){
  int stock = 4;
  vector<int> dates= {1,2,3,4};
  vector<int> supplies = {1,1,1,1};
  int k = 6;

  cout << solution(stock, dates, supplies, k) << endl;
  return 0;
}
