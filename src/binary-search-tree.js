const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootElement = null;
  }

  root() {
    return this.rootElement
  }

  add(data) {

    let newNode = new Node(data);

    if (!this.rootElement) {
      this.rootElement = newNode;
    } else {
      this.addNode(this.rootElement, newNode);
    }
  }
  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    let current = this.rootElement;
    while (current) {
      if (current.data === data) {

        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data, node = this.rootElement) {

    if (!node) {
      return null;
    } else if (data < node.data) {
      return this.find(data, node.left);
    } else if (data > node.data) {
      return this.find(data, node.right);
    } else {
      return node;
    }
  }

  remove(data) {
    this.rootElement = this.removeNode(this.rootElement, data);
  }
  removeNode(node, data) {
    if (!node) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        node = null;
        return node;
      }
      if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      }
      let newNode = this.min(node.right);
      node.data = newNode;
      node.right = this.removeNode(node.right, newNode);
      return node;
    }
  }

  max(node = this.rootElement) {
    if (!node.right) {
      return node.data;
    } else {
      return this.max(node.right);
    }
  }

  min(node = this.rootElement) {
    if (!node.left) {
      return node.data;
    } else {
      return this.min(node.left);
    }
  }
}
module.exports = {
  BinarySearchTree
};