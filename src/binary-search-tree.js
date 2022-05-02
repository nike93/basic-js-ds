const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  root() {
    return this.node || null;

  }
  

  add(data) {
    this.node = addWithin(this.node, data);
    function addWithin(node, data) {
      if(!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchWithin(this.node, data);

    function searchWithin(node, data) {
      if(!node) {
        return false;
      }

      if(node.data === data) {
        return true;
      }

      return data < node.data ? searchWithin(node.left, data) : searchWithin(node.right, data);
    }
  }

  find(data) {
    let findNode = this.node;
    
    while(findNode) {
      if (data < findNode.data) {
        findNode = findNode.left;
      } else if (data > findNode.data) {
        findNode = findNode.right;
      } else {
        return findNode;
      }
    }

    return null;
  }

  remove(data) {
    this.node = removeNode(node, data);

    function removeNode(node, data){
      if (!node){
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
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
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.node) {
      return;
    }
    let node = this.node;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.node) {
      return;
    }
    let node = this.node;
    while (node.right) {
      node = node.right;
    }
    return node.data;
   }
}

module.exports = {
  BinarySearchTree
};