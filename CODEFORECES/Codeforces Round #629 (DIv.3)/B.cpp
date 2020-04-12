#include <iostream>
#include <algorithm>
#include<string>

using namespace std;

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int t;
    cin >> t;

    while(t--) {
        int n, k, s=0, e=0;
        cin >> n >> k;

        long int acc = 1;
        for(int i=1; ;i++){
            acc+=i-1;
            if(acc>k) {
                s = i;
                e = k-(acc-i);
                break;
            }
        }

        string res = "";
        res.resize(n, 'a');
        res.replace(n-s, 1, "b");
        res.replace(n-e, 1, "b");
        cout << res << endl;

    }
    return 0;
}
