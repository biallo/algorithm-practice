type TreeNode = {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;

  const left = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(left);

  return root;
}
