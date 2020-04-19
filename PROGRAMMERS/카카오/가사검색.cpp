#include <string>
#include <vector>
#include <algorithm>
#include <map>

using namespace std;

int findW(vector<string> words, string query){
    if(words.size() == 0){
        return 0;
    }
    
    int idx = query.find('?');
    if(idx == 0) return words.size();
    string q = query.substr(0, idx);
    
    
    int l1=0, r1=words.size(), m1=0;
    string t;
    while(l1 < r1){
        m1 = (l1+r1)/2;
        t = words[m1].substr(0, idx);
        if(t.compare(q) < 0){
            l1 = m1+1;
        } else{
            r1 = m1;
        }
    }
    
    int l2=0, r2=words.size(), m2=0;
    while(l2 < r2){
        m2 = (l2+r2)/2;
        t = words[m2].substr(0, idx);
        if(t.compare(q) <= 0){
            l2 = m2+1;
        } else{
            r2 = m2;
        }
    }
    
    return l2-r1;
}

vector<int> solution(vector<string> words, vector<string> queries) {
    vector<int> answer;
    int wsize = words.size(), qsize = queries.size();
    map<int, vector<string>> list, rlist;
    
    sort(words.begin(), words.end());
    for(int i=0; i<wsize; i++){
        int len = words[i].size();
        list[len].push_back(words[i]);
        reverse(words[i].begin(), words[i].end());
    }
    
    sort(words.begin(), words.end());
    for(int i=0; i<wsize; i++){
        int len = words[i].size();
        rlist[len].push_back(words[i]);
    }
    
    
    
    for(int i=0; i<qsize; i++){
        // 접두
        string q = queries[i];
        int qLen = q.size();
        if(q[0] - '?' == 0){
            reverse(q.begin(), q.end());
            answer.push_back(findW(rlist[qLen], q));
        } else {
            answer.push_back(findW(list[qLen], q));
        }
    }
    
    return answer;
}