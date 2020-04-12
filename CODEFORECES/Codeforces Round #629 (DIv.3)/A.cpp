#include <iostream>
#include <algorithm>

using namespace std;

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int t;
    cin >> t;

    while(t--) {
        int a, b;
        cin >> a >> b;

        if(a >= b){
            int r = a%b;
            if(r>0) cout << b-r << endl;
            else cout << 0 << endl;
        }
        else cout << b-a << endl;
    }
    return 0;
}