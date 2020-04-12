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
        int n;
        string x, b="";
        cin >> n >> x;

        for(int i=0; i<n; i++){
            if(x[i] == '2'){
                x.replace(i, 1, "1");
                b.push_back('1');
            } else if(x[i] == '0') {
                b.push_back('0');
            }
            else{
                x.replace(i, 1, "0");
                b.push_back('1');
                b.resize(n, '0');
                break;
            }
        }
        cout << b << endl << x << endl;
    }
    
    return 0;
}