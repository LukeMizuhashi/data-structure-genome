const Node = require('node');

module.exports = class BinaryNode extends Node {
  constructor(options = {}) {
    super(options);

    this.parent = null; // Always default this.parent to null. Let the caller
                        // set this.parent indirectly by passing this BinaryNode
                        // instance to BinaryNode.left or BinaryNode.right on 
                        // the parent later

    this.left = options.left || null;
    this.right = options.right || null;
  }

  get _NodeClass() {
    return BinaryNode;
  }

  set left(child) {
    if (this._left) {
      this._left.parent = null;
    }

    this._left = child;
    if (child) {
      child.parent = this;
    }
  }

  get left() {
    return this._left;
  }

  set right(child) {
    if (this._right) {
      this._right.parent = null;
    }

    this._right = child;
    if (child) {
      child.parent = this;
    }
  }

  get right() {
    return this._right;
  }

  isNullTerminator() {
    return super.isNullTerminator()
        && this.left === null
        && this.right === null
  }

  isRoot() {
    return this.parent === null;
  }

  isLeftChild() {
    let result = false
    if (this.parent) {
      result = this.parent.left === this;
    }
    return result;
  }

  isRightChild() {
    let result = false
    if (this.parent) {
      result = this.parent.right === this;
    }
    return result;
  }

  getSibling() {
    let sibling = undefined;
    if (this.isLeftChild()) {
      sibling = this.parent.right;
    } else if(this.isRightChild()) {
      sibling = this.parent.left;
    }
    return sibling;
  }

};

