#include <string>
#include <vector>
#include <unordered_map>
#include <iostream>

using namespace std;

bool solution(vector<string> phone_book) {
    unordered_map<string, int> m;
    int len = 0;
    
    for(string p:phone_book){
        if(m[p] > 0) return false;
        m[p]++;
    }
    
    for(string p:phone_book){
        int len = p.size();
        string tmp = "";
        for(int i=0; i<len-1; i++){
            tmp += p[i];
            cout << tmp << " " << m[tmp] << endl;
            if(m[tmp] > 0) return false;
        }
    }
    
    return true;
}