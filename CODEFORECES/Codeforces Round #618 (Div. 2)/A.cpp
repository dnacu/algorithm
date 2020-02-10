#include <iostream>

using namespace std;

int a[101];

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int t;
    cin >> t;

    while(t--) {
        int n, ret = 0, sum = 0;
        cin >> n;

        for(int i = 0; i < n; i++) {
            cin >> a[i];

            if(!a[i]) {
                ret++;
                sum++;
            }
            else sum += a[i];
        }

        if(!sum) ret++;
        cout << ret << endl;
    }
}