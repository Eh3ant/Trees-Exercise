/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    const queue = [[this.root, 1]];
    while (queue.length) {
      const [node, depth] = queue.shift();
      if (!node.left && !node.right) return depth;
      if (node.left) queue.push([node.left, depth + 1]);
      if (node.right) queue.push([node.right, depth + 1]);
    }
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    const queue = [[this.root, 1]];
    let maxDepth = 0;
    while (queue.length) {
      const [node, depth] = queue.shift();
      maxDepth = Math.max(maxDepth, depth);
      if (node.left) queue.push([node.left, depth + 1]);
      if (node.right) queue.push([node.right, depth + 1]);
    }
    return maxDepth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    const maxSumHelper = (node) => {
      if (!node) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      return Math.max(node.val, node.val + leftSum + rightSum, node.val + Math.max(leftSum, rightSum));
    };
    return maxSumHelper(this.root);
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let nextLarger = null;
    const stack = [];
    let current = this.root;

    while (current || stack.length) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      current = stack.pop();
      if (current.val > lowerBound && (!nextLarger || current.val < nextLarger.val)) {
        nextLarger = current;
      }
      current = current.right;
    }

    return nextLarger ? nextLarger.val : null;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };