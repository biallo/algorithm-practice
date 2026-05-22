class TrieNode {
  constructor() {
    this.children = new Map();
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }

      node = node.children.get(char);
    }

    node.isWord = true;
  }

  search(word) {
    const node = this.findNode(word);
    return node !== null && node.isWord;
  }

  startsWith(prefix) {
    return this.findNode(prefix) !== null;
  }

  findNode(text) {
    let node = this.root;

    for (const char of text) {
      const next = node.children.get(char);
      if (next === undefined) return null;
      node = next;
    }

    return node;
  }
}
