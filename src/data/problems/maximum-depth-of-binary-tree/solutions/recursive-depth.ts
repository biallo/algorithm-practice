type TreeNode = {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
