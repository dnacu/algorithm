#include <iostream>

using namespace std;

int a[100001], d[29];

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int n;
    cin >> n;
    for(int i = 0; i < n; i++) {
        cin >> a[i];
         for(int j = 29;j >= 0; j--){
             // bit masking
            if((1<<j) & a[i]) d[j]++;
        }
    }

    int ret = -1;
    for(int j = 29; j >= 0; j--) {
        if(ret != -1) break;

        if(d[j] == 1) {
            for(int i = 0; i < n; i++) {
                if((1<<j) & a[i]) {
                    ret = a[i];
                    cout << a[i] << ' ';
                    break;
                }
            }
        } 
    }

    for(int i = 0 ; i < n; i++) {
        if(a[i] == ret) continue;
        cout << a[i] << ' ';
    }
}