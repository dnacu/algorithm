#include <iostream>
#include <algorithm>
#include<map>

using namespace std;

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int t;
    cin >> t;

    while (t--)
    {
        int n, x;
        cin >> n >> x;

        map<int, int> mp;

        int k = 0;
        for(int i=1; i<=n; i++){
            cin >> k;
            mp[k]++;
        }

        int ans = 0, s = 0;
        for(int i=1; ; i++){
            if(ans == x) break;
            if(mp[i] == 0) {
                ans++;
                s = i;
            }
        }

        int temp = s;
        for(int i=s+1; i<300; i++) {
            if(mp[i] > 0) temp = i;
            else break;
        }

        cout << temp << endl;
    }

    return 0;
}