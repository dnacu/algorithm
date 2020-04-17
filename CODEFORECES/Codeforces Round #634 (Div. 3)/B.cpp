#include <iostream>
#include <algorithm>
#include<math.h>
#include<string>

using namespace std;

string al = "abcdefghijklmnopqrstuvwxyz";

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int t;
    cin >> t;

    while(t--) {
        int n, a, b;
        cin >> n >> a >> b;

        string use = "", res = "";

        for(int i=0; i<b; i++){
            use += al[i];
        }
        for(; n>b-1; n-=b){
            res += use;
        }
        for(int i=0; i<n; i++){
            res += use[i];
        }

        cout << res << endl;

    }
    
    return 0;
}

