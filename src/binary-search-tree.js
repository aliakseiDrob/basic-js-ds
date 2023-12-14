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
    this.rootElement = removeData(this.rootElement, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeData(node.right, data)
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;

        node.right = removeData(node.right, minRight.data)
        return node;
      }
    }
  }

  max() {
    let max = this.rootElement;
    if (!max.right) {
      return max.data;
    } else {
      while (max.right) {
        max = max.right;
      }
      return max.data;
    }
  }

  min() {
    let min = this.rootElement;
    if (!min.left) {
      return min.data;
    } else {
      while (min.left) {
        min = min.left;
      }
      return min.data;
    }
  }
}
module.exports = {
  BinarySearchTree
};