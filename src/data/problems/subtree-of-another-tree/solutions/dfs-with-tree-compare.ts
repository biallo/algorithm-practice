type TreeNode = {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

function isSubtree(
  root: TreeNode | null,
  subRoot: TreeNode | null,
): boolean {
  if (subRoot === null) return true;
  if (root === null) return false;
  if (isSameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

function isSameTree(a: TreeNode | null, b: TreeNode | null): boolean {
  if (a === null && b === null) return true;
  if (a === null || b === null) return false;
  if (a.val !== b.val) return false;

  return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
}
