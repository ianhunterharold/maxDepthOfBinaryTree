/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let recursive = function(n){
      if (!n){
          return 0;
      }
      let a = recursive(n.left);
      let b = recursive(n.right)
      return a>b? a+1 : b+1;
  }
      return recursive(root);
};