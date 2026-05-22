class TrieNode {
  children = new Map<string, TrieNode>();
  isWord = false;
}

class Trie {
  private root = new TrieNode();

  insert(word: string): void {
    let node = this.root;

    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }

      node = node.children.get(char)!;
    }

    node.isWord = true;
  }

  search(word: string): boolean {
    const node = this.findNode(word);
    return node !== null && node.isWord;
  }

  startsWith(prefix: string): boolean {
    return this.findNode(prefix) !== null;
  }

  private findNode(text: string): TrieNode | null {
    let node = this.root;

    for (const char of text) {
      const next = node.children.get(char);
      if (next === undefined) return null;
      node = next;
    }

    return node;
  }
}
