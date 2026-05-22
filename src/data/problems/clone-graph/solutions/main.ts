class Node {
  val: number;
  neighbors: Node[];

  constructor(val = 0, neighbors: Node[] = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

function cloneGraph(node: Node | null): Node | null {
  const clones = new Map<Node, Node>();

  function clone(current: Node): Node {
    if (clones.has(current)) {
      return clones.get(current)!;
    }

    const copy = new Node(current.val);
    clones.set(current, copy);
    copy.neighbors = current.neighbors.map(clone);
    return copy;
  }

  return node === null ? null : clone(node);
}
