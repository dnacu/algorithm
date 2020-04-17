#include <iostream>
#include <algorithm>

using namespace std;

int a[100005];

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int t;
    cin >> t;

    while(t--) {
        int n;
        cin >> n;

        if(n == 1 || n == 2){
            cout << 0 << endl;
            continue;
        }

        if(n&1){
            cout << (n-1)/2 << endl;
        } else {
            cout << n/2-1 << endl;
        }
    }
    
    return 0;
}
