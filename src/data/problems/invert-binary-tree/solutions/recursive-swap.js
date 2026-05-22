function invertTree(root) {
  if (root === null) return null;

  const left = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(left);

  return root;
}
