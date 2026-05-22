type TreeNode = {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];

  const result: number[][] = [];
  const queue: TreeNode[] = [root];
  let index = 0;

  while (index < queue.length) {
    const levelSize = queue.length - index;
    const level: number[] = [];

    for (let i = 0; i < levelSize; i += 1) {
      const node = queue[index];
      index += 1;
      level.push(node.val);

      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}
