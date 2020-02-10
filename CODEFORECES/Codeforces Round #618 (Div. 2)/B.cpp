#include <iostream>
#include <algorithm>

using namespace std;

int a[200001];

int main(void) {
        ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int t;
    cin >> t;

    while(t--) {
        int n;
        cin >> n;
        for(int i = 0; i < n*2; i++) {
            cin >> a[i];
        }

        sort(a, a + n*2);

        cout << a[n] - a[n-1] << endl;
    }
}