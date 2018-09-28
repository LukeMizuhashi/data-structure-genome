const BinaryNode = require('binary-node');
const isIterable = require('iterable-bitter-able');

module.exports = class BinaryTree {
  constructor(options = {}) {

    this._asArray = [];

    if (isIterable(options)) {
      this._root = this._nodeFactory();

      options.forEach((value) => {
        this.insert(value);
      })

    } else {
      this._root = this._nodeFactory(options);
      if (!this._root.isNullTerminator()) {
        this._asArray.push(this._root);
      }

    }
  }

  get _NodeClass() {
    return BinaryNode;
  }

  _nodeFactory(options = {}) {
    return new this._NodeClass(options);
  }

  isEmpty() {
    return this._root.isNullTerminator();
  }

  _getParentFromChild(index) {
    const result = {
      parent: {
        index: undefined,
        node: undefined,
        isInArray: undefined,
      },
      child: {
        index: index,
        node: undefined,
        isInArray: undefined,
      },
      isLeftChild: undefined,
      childIsRoot: undefined,
    };

    if (index === 0) {
      result.parent.index = null;
      result.parent.node = null;
      result.parent.isInArray = null;
      result.childIsRoot = true;

    } else {
      result.parent.index = (index - 1) / 2;
      result.childIsRoot = false;

      if (Number.isInteger(result.parent.index)) {
        result.isLeftChild = true;
      } else {
        result.isLeftChild = false;
        result.parent.index = Math.floor(result.parent.index);
      }

      result.parent.isInArray =
          result.parent.index >= 0 && result.parent.index < this._asArray.length;

      if (result.parent.isInArray) {
        result.parent.node = this._asArray[result.parent.index];
      } else {
        result.parent.node = null; 
      }

      result.child.isInArray = index >= 0 && index < this._asArray.length;

      if (result.child.isInArray) {
        result.child.node = this._asArray[index];
      } else {
        result.child.node = null; 
        result.isLeftChild = null;
      }
    }

    return result;
  }

  _getChildrenFromParent(index) {
    const result = {
      parent: {
        index: index,
        node: undefined,
        isInArray: undefined,
      },
      leftChild: {
        index: 2 * index + 1,
        node: undefined,
        isInArray: undefined,
      },
      rightChild: {
        index: 2 * index + 2,
        node: undefined,
        isInArray: undefined,
      },
    };

    result.parent.isInArray = index >= 0 && index < this._asArray.length;

    if (result.parent.isInArray) {
      result.parent.node = this._asArray[index];
    } else {
      result.parent.node = null; 
    }

    for (let child in ['leftChild','rightChild']) {
      result[child].isInArray =
          result[child].index >= 0
       && result[child].index < this._asArray.length;

      if (result[child].isInArray) {
        result[child].node = this._asArray[result[child].index];
      } else {
        result[child].node = null; 
      }
    }

    return result;
  }

  insert(value) {
    const newNode = this._nodeFactory({ value: value });
    newNode.left = this._nodeFactory();
    newNode.right= this._nodeFactory();

    this._asArray.push(newNode);

    const relationship = this._getParentFromChild(this._asArray.length - 1);
    if (!relationship.childIsRoot) {
      if (relationship.isLeftChild) {
        this._asArray[relationship.parent.index].left = newNode;
      } else {
        this._asArray[relationship.parent.index].right = newNode;
      }
    } else {
      this._root.isolate();
      this._root = newNode;
    }
  }

  remove(value,areEqual,mode) {
    const onMatch = (thisNode) => {
      const lastNode = this._asArray[this._asArray.length - 1];
      if (lastNode === thisNode) {
        thisNode.isolate();

      } else {
        lastNode.isolate();

        if (thisNode.isLeftChild()) {
          thisNode.parent.left = lastNode;
        } else if (thisNode.isRightChild()) {
          thisNode.parent.right = lastNode;
        }
        thisNode.parent = null;
        
        let left = thisNode.left;
        let right = thisNode.right;
        thisNode.isolate();

        lastNode.left = left;
        lastNode.right = right;

      }
      result.push(thisNode);
    };
    return this.search(value,areEqual,mode,onMatch);
  }

  search(
      value,
      areEqual = (lhs,rhs) => { return lhs == rhs; },
      mode = 'last',onMatch = node => result.push(node)
    ) {
    let index;
    let stopOnFirstOccurance;
    let step;
    let keepGoing;
    switch (mode) {
      case 'last':
        index = this._asArray.length - 1;
        keepGoing = () => { return index >= 0 };
        step = () => { index--; };
        stopOnFirstOccurance = true;
        break;
      case 'first':
        index = 0;
        keepGoing = () => { return index < this._asArray.length };
        step = () => { index++; };
        stopOnFirstOccurance = true;
        break;
      case 'all':
        index = this._asArray.length - 1;
        keepGoing = () => { return index >= 0 };
        step = () => { index--; };
        stopOnFirstOccurance = false;
        break;
      default:
        throw new Error('Encountered invalid mode');
        break;
    }

    const result = [];
    if (this._asArray.length > 0) {

      while(keepGoing() && this._asArray.length > 0) {
        const thisNode = this._asArray[index];

        if (areEqual(thisNode.value,value)) {
          onMatch(thisNode);
        }

        step();
      }
    }

    if (stopOnFirstOccurance) {
      return result[0];
    } else {
      return result;
    }
  }

  _isValid(strict = true,disallowNullTerminators = true) {

    let result = true;
    let message;
    
    let thisNode;
    for (let i = this._asArray.length - 1; i >= 0; i--) {
      thisNode = this._asArray[i];

      if (i !== 0) {
        const relationship = this._getParentFromChild(i);

        if (!relationship.parent.isInArray) {
          result = false;
          message = 'Encountered child whose parent is not in tree';
          break;
        }

        if (result.isLeftChild) {
          if (parent.left !== thisNode) {
            result = false;
            message = 'Left child is not registered as left child on parent.';
            break;
          }
        } else {
          if (parent.right !== thisNode) {
            result = false;
            message = 'Right child is not registered as right child on parent.';
            break;
          }
        }
      }

      if (disallowNullTerminators) {
        if (thisNode.isNullTerminator()) {
          result = false;
          message = 'Encountered null terminator in tree';
          break;
        }
      }

      if (i === 0 && !thisNode.isRoot()) {
        result = false;
        message = 'First node is not root';
        break;
      }
    }

    if (strict) {
      throw new Error(message);
    }

    return result;
  }

  [Symbol.iterator]() {

    let i = 0;

    return {
      next: () => {
        let result = {};

        if (i < this._asArray.length) {
          result.value = this._asArray[i];
          i++;
        }
        result.done = ( i >= this._asArray.length );

        return result; 
      },
    };
  }

};

