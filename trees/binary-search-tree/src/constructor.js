const BinaryNode = require('binary-node');

module.exports = class BinarySearchTree {
  constructor(options) {
    if (options instanceof this.NodeClass) {
      this.root = options;
    } else {
      this.root = this.nodeFactory(options);
    }
  }

  get NodeClass() {
    return BinaryNode;
  }

  nodeFactory(options) {
    return new this.NodeClass(options);
  }

  insert(key,value) {
    const insertionLocation = this.search(key);

    if (insertionLocation.isLeaf()) {
      insertionLocation.set(key,value);
    } else {
      if (insertionLocation.allowsDuplicates) {
        insertionLocation.set(value);
      } else {
        throw new Error(`Key ${key} already exists in tree`);
      }
    }
    return insertionLocation;
  }

  remove(key) {
    const thisNode = this.search(key);
    if (thisNode.isLeaf()) {
      throw new Error(`${key} not found in tree`);
    }

    let replacementNode;
    if (thisNode.left) {
      replacementNode = new BinarySearchTree(thisNode.left).maxNode;
    } else if (thisNode.right) {
      replacementNode = new BinarySearchTree(thisNode.right).minNode;
    } else {
      replacementNode = this.nodeFactory();
    }
    thisNode.replaceWith(replacementNode);
    replacementNode.destroy();
  }

  get maxNode() {
    let currentNode = this.root;
    while (!currentNode.isLeaf()) {
      currentNode = currentNode.right;
    }
    return currentNode.parent;
  }

  get minNode() {
    let currentNode = this.root;
    while (!currentNode.isLeaf()) {
      currentNode = currentNode.left;
    }
    return currentNode.parent;
  }

  get maxValue() {
    let result = this.maxNode;
    if (result) {
      result = result.value;
    }
    return result;
  }

  get minValue() {
    let result = this.minNode;
    if (result) {
      result = result.value;
    }
    return result;
  }

  search(key) {
    let currentNode = this.root;
    while (!currentNode.isLeaf()) {
      let comparison = currentNode.compare(key);
      if (comparison < 0) {
        currentNode = currentNode.left; 
      } else if (comparison == 0) {
        return currentNode;
      } else if (comparison > 0) {
        currentNode = currentNode.right;
      }
    }
    return currentNode;
  }

  isValid() {
    let previousKey = undefined;
    for (let thisNode of this) {
      if (previousKey !== undefined && thisNode.key <= previousKey) {
        return false;
      }
      previousKey = thisNode.key;
    }
    return true;
  }

  [Symbol.iterator]() {

    let thisNode = this.minNode; 
    let maxNode = this.maxNode;
    let visited = new Set();

    return {
      next: () => {
        let result = {
          value: {
            key: thisNode.key,
            value: thisNode.value,
          },
          done: thisNode === maxNode,
        };
        visited.add(thisNode.key);

        let nextNode;
        if (!thisNode.left.isLeaf() && !visited.has(thisNode.left.key)) {
          nextNode = new BinarySearchTree(thisNode.left).minNode;
        } else if (!thisNode.right.isLeaf() && !visited.has(thisNode.right.key)) {
          nextNode = new BinarySearchTree(thisNode.right).minNode;
        } else if (thisNode.parent && !thisNode.parent.isLeaf()) {
          if (!visited.has(thisNode.parent.key)) {
            nextNode = thisNode.parent;
          } else if (thisNode !== maxNode) {
            nextNode = thisNode.parent.parent;
          } else {
            nextNode = thisNode;
          }
        }
        thisNode = nextNode;

        return result; 
      },
    };
  }

};

