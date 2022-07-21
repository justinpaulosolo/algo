#include <bits/stdc++.h>
#include <vector>

using namespace std;

int main ()
{
    vector<int> nums{5, 2, -10, 2, 12};
    int length = nums.size();

    for(int i = 0; i < length; i++)
    {
        int min = i;
        for(int j = i + 1; j < length; j++)
        {
            if (nums[j] < nums[min])
            {
                min = j;
            };
        };

        if(min != i)
        {
            int temp = nums[i];
            nums[i] = nums[min];
            nums[min] = temp;
        };
    };

    for(int i = 0; i < length; i++)
    {
        cout << nums[i] << endl;
    };

    return 0;
};
