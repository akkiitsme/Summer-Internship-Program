
/**
Given an integer numRows, return the first numRows of Pascal's triangle.
Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var arr = new Array(numRows);
    for(var i=0;i<arr.length;i++){
        arr[i] = new Array(i+1);
    }
    for(var i =0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
            if(j == 0 || j == i){
                arr[i][j] = 1;
            } else {
                arr[i][j] = arr[i-1][j-1] + arr[i-1][j];
            }
        }
    }
    return arr;
};
