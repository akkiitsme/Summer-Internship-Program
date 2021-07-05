/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed
Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
*/

class Solution {
    public int removeElement(int[] nums, int val) {
        int i=0;    int j=0;
        while(j < nums.length){
            if(nums[j] != val){
                nums[i] = nums[j];
                i++; 
            }

            j++;
        }
        return i;
    }
}
