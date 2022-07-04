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
var postorderTraversal = function(root) {
    let visited = [];
    let current = root;
    let result = [];
    let currentParent = [];
    postorder(current, result);
    return result;

//     while(current !== null || visited.length!==0){
  
//         while(current){
//             visited.push(current);
//             current = current.left;
//         }
//         console.log('v',visited);
//         current = visited.pop();
//         currentParent.push(current.val);
//         current = current.right;
//         if(!current){
//             result.push(currentParent.pop())
//         }
        
//     }
//     return result;
};

var postorder = function(root, result) {
    if(root == null)
		return;

	postorder(root.left, result);
	postorder(root.right, result);
    result.push(root.val);
};