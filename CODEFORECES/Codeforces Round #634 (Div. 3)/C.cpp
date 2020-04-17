#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int a[200005];

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int t;
    cin >> t;

    while(t--) {
        int n;
        cin >> n;

        for(int i=0; i<n; i++){
            cin >> a[i];
        }

         if(n==1){
            cout << 0 << endl;
            continue;
        }

        sort(a, a+n);

        vector<int> s;
        int c = 0;
        for(int i=1; i<n; i++){
            if(a[i] == a[i-1]) {
                c++;
            } else {
                if(c > 0) {
                    s.push_back(c+1);
                    c = 0;
                }
            }
        }
        if(c > 0) s.push_back(c+1);

        int sum = 0;
        int max = 0;
        for(int i=0; i<s.size(); i++){
            sum += (s[i]-1);
            if(max < s[i]) max = s[i];
        }
        sum++;
        int tmp = n  - sum;
        
        int res = 0;
        if(max > tmp+1) {
            res = min(tmp+1, max);
        } else res = min(tmp, max);
        if(res==0) res = 1;
        cout << res << endl;
    }
    
    return 0;
}
