class Node {
  val: number;
  neighbors: Node[];

  constructor(val = 0, neighbors: Node[] = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

function cloneGraph(node: Node | null): Node | null {
  if (node === null) return null;

  const clones = new Map<Node, Node>([[node, new Node(node.val)]]);
  const queue = [node];

  for (let i = 0; i < queue.length; i += 1) {
    const current = queue[i];
    const copy = clones.get(current)!;

    for (const neighbor of current.neighbors) {
      if (!clones.has(neighbor)) {
        clones.set(neighbor, new Node(neighbor.val));
        queue.push(neighbor);
      }

      copy.neighbors.push(clones.get(neighbor)!);
    }
  }

  return clones.get(node)!;
}
