type TreeNode = {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

function isValidBST(root: TreeNode | null): boolean {
  function validate(node: TreeNode | null, low: number, high: number): boolean {
    if (node === null) return true;
    if (node.val <= low || node.val >= high) return false;

    return (
      validate(node.left, low, node.val) &&
      validate(node.right, node.val, high)
    );
  }

  return validate(root, -Infinity, Infinity);
}
