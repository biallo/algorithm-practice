function levelOrder(root) {
  if (root === null) return [];

  const result = [];
  const queue = [root];
  let index = 0;

  while (index < queue.length) {
    const levelSize = queue.length - index;
    const level = [];

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
