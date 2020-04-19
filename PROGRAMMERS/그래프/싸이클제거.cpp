#include <algorithm>
#include <vector>

using namespace std;

int u[5005];
vector<int> adj[5005];

bool hasCycle(int n, int e, vector<vector<int>> edges){
    for(int i=1; i<=n; i++){
        u[i] = i;
    }
    
    int size = edges.size();
    for(int i=0; i<size; i++){
        int a1 = edges[i][0], a2 = edges[i][1];
        if(e == a1 || e == a2) continue;
        
        int u1 = u[a1], u2 = u[a2];
        if(u[u1] != u[u2]){
            u[u2] = u[u1];
        } else{
            return true;
        }
    }
    return false;
}

int solution(int n, vector<vector<int>> edges) {
    int size = edges.size(), res = 0;
    for(int i=0; i<size; i++){
        int a1=edges[i][0], a2=edges[i][1];
        adj[a1].push_back(a2);
        adj[a2].push_back(a1);
    }
    
    for(int i=1; i<=n; i++){
        int asize = adj[i].size();
        if(asize < 2 || size - asize >= n-1){
            continue;
        }
        if(!hasCycle(n, i, edges)){
            res+=i;
        }
    }
    return res;
}