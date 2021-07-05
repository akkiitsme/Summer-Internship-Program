/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
*/
class Solution {
public:
    int climbStairs(int n) {
        int n1 = 2, n2 = 1,n3=3,step;
        if (n == 1)
            return 1;
        if (n == 2)
            return 2;
        while (n3<=n) {
            step = n1 + n2;
            n2 = n1;
            n1 = step;
            n3++;
        }
        return step; 
    }
};
