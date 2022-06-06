/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let stack = [];
    let current = root;
    let result = [];
    
    while(current !== null || stack.length!==0){
        
        if(current){
            stack.push(current);
            current = current.left;
        } else {
            current = stack.pop();
            result.push(current.val)
            current = current.right;
        }
    }
    
    return result;
    
};