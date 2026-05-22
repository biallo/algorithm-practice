class Node {
  val;
  neighbors;

  constructor(val = 0, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

function cloneGraph(node) {
  const clones = new Map();

  function clone(current) {
    if (clones.has(current)) {
      return clones.get(current);
    }

    const copy = new Node(current.val);
    clones.set(current, copy);
    copy.neighbors = current.neighbors.map(clone);
    return copy;
  }

  return node === null ? null : clone(node);
}
