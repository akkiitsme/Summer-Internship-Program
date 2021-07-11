/**

Given a non-negative integer x, compute and return the square root of x.
Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
Example 1:
Input: x = 4
Output: 2

Example 2:
Input: x = 8
Output: 2
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x));
};
