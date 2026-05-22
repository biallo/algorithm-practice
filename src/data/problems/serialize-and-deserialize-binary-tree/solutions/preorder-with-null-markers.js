function serialize(root) {
  const values = [];

  function walk(node) {
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

function deserialize(data) {
  const values = data.split(',');
  let index = 0;

  function build() {
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
