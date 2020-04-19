#include <string>
#include <vector>
#include <unordered_map>

using namespace std;

string solution(vector<string> participant, vector<string> completion) {
    string answer = "";
    unordered_map<string, int> m;
    int psize = participant.size(), csize = completion.size();
    
    for(int i=0; i<csize; i++){
        m[completion[i]]++;
    }
    
    for(int i=0; i<psize; i++){
        if(m[participant[i]] == 0){
            answer = participant[i];
            break;
        }
        m[participant[i]]--;
    }
        
        
    return answer;
}