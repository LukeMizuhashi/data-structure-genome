const BinaryTree = require('binary-tree');
const OrderedBinaryNode = require('ordered-binary-node');
const isIterable = require('iterable-bitter-able');

module.exports = class BinarySearchTree extends BinaryTree {
  constructor(options = {}) {
    super();

    if (options instanceof BinarySearchTree) {
      this._root = options._root;

    } else if (options instanceof this._NodeClass) {
      this._root = options;

    } else if (isIterable(options)) {
      this._root = this._nodeFactory();

      const requiredProperties = ["key","value"];
      options.forEach((item) => {

        requiredProperties.forEach((property) => {
          if (!item.hasOwnProperty(property)) {
            throw new Error(
              'Iterables passed to the BinarySearchTree constructor must have'
            + ' own properties "key", and "value". Encountered item in '
            + `iterable missing "${property}" property`
            );
          }
        });

        this.insert(item.key,item.value);

      })

    } else {
      if (options.hasOwnProperty('value') || options.hasOwnProperty('key')) {
        this._root = this._nodeFactory(options);
        this._root.left = this._nodeFactory();
        this._root.right = this._nodeFactory();
      } else {
        this._root = this._nodeFactory();
      }
    }

  }

  get _NodeClass() {
    return OrderedBinaryNode;
  }

  isEmpty() {
    return this._root.isNullTerminator();
  }

  insert(key,value,strict = true) {
    const newNode = this._nodeFactory({
      key: key,
      value: value,
    });
    newNode.left = this._nodeFactory();
    newNode.right = this._nodeFactory();
    const insertionLocation = this.search(key);

    if (insertionLocation.isNullTerminator()) {
      if (insertionLocation.isLeftChild()) {
        insertionLocation.parent.left = newNode;
      } else if (insertionLocation.isRightChild()) {
        insertionLocation.parent.right = newNode;
      } else if (insertionLocation.isRoot()) {
        this._root = newNode;
      } else {
        throw new Error(
          'Encountered insertion location that is neither a child nor root node.'
        );
      }

    } else {
      if (strict) {
        throw new Error(`Node with key ${key} already exists in tree`);
      }

    }
  }

  remove(key,strict = true) {
    const thisNode = this.search(key);

    if (thisNode.isNullTerminator()) {
      if (strict) {
        throw new Error(`${key} not found in tree`);
      }
    }

    let replacementNode;
    if (thisNode.left && !thisNode.left.isNullTerminator()) {
      replacementNode = new BinarySearchTree(thisNode.left).maxNode;
    } else if (thisNode.right && !thisNode.right.isNullTerminator()) {
      replacementNode = new BinarySearchTree(thisNode.right).minNode;
    } else {
      replacementNode = this._nodeFactory();
    }

    thisNode.replaceWith(replacementNode);
  }

  search(key) {
    let currentNode = this._root;
    while (!currentNode.isNullTerminator()) {
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

  get maxNode() {
    let currentNode = this._root;
    while (!currentNode.isNullTerminator()) {
      currentNode = currentNode.right;
    }
    if (currentNode.isRoot()) {
      return currentNode;
    } else {
      return currentNode.parent;
    }
  }

  get minNode() {
    let currentNode = this._root;
    while (!currentNode.isNullTerminator()) {
      currentNode = currentNode.left;
    }
    if (currentNode.isRoot()) {
      return currentNode;
    } else {
      return currentNode.parent;
    }
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

  get _asArray() {
  }

  set _asArray(value) {
  };

  // isValid() {
  //   let previousKey = undefined;
  //   for (let thisNode of this) {
  //     if (previousKey !== undefined && thisNode.key <= previousKey) {
  //       return false;
  //     }
  //     previousKey = thisNode.key;
  //   }
  //   return true;
  // }

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

        if (thisNode === maxNode) {
          return result;
        }

        let nextNode;
        if (!thisNode.left.isNullTerminator() && !visited.has(thisNode.left.key)) {
          nextNode = new BinarySearchTree(thisNode.left).minNode;
        } else if (!thisNode.right.isNullTerminator() && !visited.has(thisNode.right.key)) {
          nextNode = new BinarySearchTree(thisNode.right).minNode;
        } else if (thisNode.parent) {
          do {
            thisNode = thisNode.parent;
          } while(visited.has(thisNode.key));
          nextNode = thisNode;
        }
        thisNode = nextNode;

        return result; 
      },
    };
  }

};

