type TreeNode = {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
};

function serialize(root: TreeNode | null): string {
  const values: string[] = [];

  function walk(node: TreeNode | null) {
    if (node === null) {
      values.push('#');
      return;
    }

    values.push(String(node.val));
    walk(node.left);
    walk(node.right);
  }

  walk(root);
  return values.join(',');
}

function deserialize(data: string): TreeNode | null {
  const values = data.split(',');
  let index = 0;

  function build(): TreeNode | null {
    const value = values[index];
    index += 1;

    if (value === '#') return null;

    return {
      val: Number(value),
      left: build(),
      right: build(),
    };
  }

  return build();
}
