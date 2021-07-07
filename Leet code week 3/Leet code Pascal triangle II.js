
/**
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var result = [1];
    for(var i=1;i<=rowIndex;i++){
        for(var j = result.length-1;j>0;j--){
            result[j] = result[j] + result[j-1];
        }
        result = result.concat(1);
    }
    return result;
};
