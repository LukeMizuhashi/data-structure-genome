const Node = require('node');
const isIterable = require('iterable-bitter-able');

module.exports = class BinaryTree {
  constructor(options = {}) {

    this._asArray = [];

    if (isIterable(options)) {
      options.forEach((value) => {
        this.insert(value);
      })

    }
  }

  get _NodeClass() {
    return Node;
  }

  _nodeFactory(options = {}) {
    return new this._NodeClass(options);
  }

  isEmpty() {
    return this._asArray.length === 0;
  }

  insert(value) {
    this._asArray.push(
      this._nodeFactory({ value: value })
    );
  }

  remove(value,mode,areEqual) {

    const onMatch = (index,thisNode,result) => {
      result.push(thisNode.value);

      const lastNode = this._asArray.pop();
      if (lastNode !== thisNode) {
        this._asArray[index] = lastNode;
      }

    };
    return this.search(value,mode,areEqual,onMatch);
  }

  search(
      value,
      mode = 'last',
      areEqual = (lhs,rhs) => { return lhs == rhs; },
      onMatch = (index,node,result) => result.push(node.value)
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
          onMatch(index,thisNode,result);
          if (stopOnFirstOccurance) {
            break;
          }
        }

        step();
      }
    }

    if (stopOnFirstOccurance) {
      if (result.length === 0) {
        return null;
      } else {
        return result[0];
      }
    } else {
      return result;
    }
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

