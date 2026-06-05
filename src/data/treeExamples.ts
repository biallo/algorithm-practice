export type TreeExampleNode = {
  val: number;
  left: TreeExampleNode | null;
  right: TreeExampleNode | null;
};

export function treeNode(
  val: number,
  left: TreeExampleNode | null = null,
  right: TreeExampleNode | null = null,
): TreeExampleNode {
  return { val, left, right };
}

export function formatExampleParts(...parts: string[]): string {
  return parts.join('\n\n');
}

export function formatTreeAssignment(
  name: string,
  root: TreeExampleNode | null,
): string {
  return `${name} = ${formatTreeNode(root)}`;
}

export function formatTreeNode(root: TreeExampleNode | null, level = 0): string {
  if (root === null) {
    return 'null';
  }

  if (root.left === null && root.right === null) {
    return `{ val: ${root.val}, left: null, right: null }`;
  }

  const indent = '  '.repeat(level);
  const childIndent = '  '.repeat(level + 1);

  return [
    '{',
    `${childIndent}val: ${root.val},`,
    `${childIndent}left: ${formatTreeNode(root.left, level + 1)},`,
    `${childIndent}right: ${formatTreeNode(root.right, level + 1)},`,
    `${indent}}`,
  ].join('\n');
}
