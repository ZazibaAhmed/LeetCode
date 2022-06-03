/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    m = matrix.length
    n = matrix.length > 0 ? matrix[0].length: 0
    let transpose = [];
    for(let i=0; i<n; i++){
        transpose.push([]);
    }
    for(let i=0; i<n; i++){
       for(let j=0; j<m; j++) {
           transpose[i].push(matrix[j][i]);
       }
    }
    return transpose
};