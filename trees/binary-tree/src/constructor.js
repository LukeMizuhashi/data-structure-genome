const BinaryNode = require('binary-node');

module.exports = class BinaryTree {
  constructor(options) {

    const isIterable = (obj) => {
      // checks for null and undefined
      if (obj == null) {
        return false;
      }
      return typeof obj[Symbol.iterator] === 'function';
    }

    this._asArray = [];

    if (options instanceof this._NodeClass) {
      this._root = options;

      for (let thisNode in this) {
        this._asArray.push(thisNode);
      }

    } else if (isIterable(options)) {
      this._root = this._nodeFactory();

      for (let value in options) {
        this.insert(value);
      } 

    } else {
      this._root = this._nodeFactory(options);
      if (!this._isNullTerminator(this._root)) {
        this._asArray.push(this._root);
      }
    }

    this._allowsDuplicates = this._root.allowsDuplicates;
  }

  _NodeClass() {
    return BinaryNode;
  }

  _nodeFactory(options = {}) {

    options.allowsDuplicates = options.hasOwnProperty('allowsDuplicates') ?
        options.allowsDuplicates : this._allowsDuplicates; 

    return new this._NodeClass(options);
  }

  _isNullTerminator(node) {
    return node.left === null && node.right === null && node.value === undefined;
  }

  _isRoot(node) {
    return node.parent === null;
  }

  _getParentFromChild(index) {
    const result = {
      parent: {
        index: (index - 1) / 2,
        node: undefined,
        isInArray: undefined,
      },
      child: {
        index: index,
        node: undefined,
        isInArray: undefined,
      },
      isLeftChild: undefined,
    };

    if (Number.isInteger(result.parent.index) {
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

    return result;
  }

  insert(value) {
    const newNode = this._nodeFactory({ value: value });

    this._asArray.push(newNode);

    const relationship = this._getParentFromChild(this._asArray.length - 1);
    if (relationship.isLeftChild) {
      this._asArray[relationship.parentIndex].left = newNode;
    } else {
      this._asArray[relationship.parentIndex].right = newNode;
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

  search(value,areEqual,mode = 'last',onMatch) {
    areEqual = areEqual || (lhs,rhs) => { return lhs == rhs; };
    onMatch = onMatch || node => result.push(node);

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
        if (this._isNullTerminator(thisNode)) {
          result = false;
          message = 'Encountered null terminator in tree';
          break;
        }
      }

      if (i === 0 && !this._isRoot(thisNode)) {
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

