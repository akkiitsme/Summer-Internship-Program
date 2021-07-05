/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 

Example 1:

Input: x = 121
Output: true
*/

class Solution {
public:
    bool isPalindrome(int x) {
        int rev = 0;
      if(x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }
        while(x > rev) {
            rev = (rev * 10) + (x % 10);
            x = x / 10;
        }
        return x == rev || x == rev/ 10;
    }
};
