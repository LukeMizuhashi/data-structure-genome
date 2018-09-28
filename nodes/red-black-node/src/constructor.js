const BinaryNode = require('binary-node');

module.exports = class RedBlackNode extends BinaryNode {
  constructor(options) {
    options = options || {};

    super(options)

    this.isRed = options.hasOwnProperty('isRed') ? options.isRed : false;
  }

  get isBlack() {
    return !this.isRed;
  }

  set isBlack(value) {
    this.isRed = !value;
  }

  rotateLeft() {
    if (!this.isRightChild()) {
      throw new Error(
        'Can not rotate left: node is not the right child of its parent.'
      );
    }

    let oldParent = this.parent;
    let grandParent = oldParent.parent;
    let wasLeftGrandChild = oldParent.isLeftChild();
    let movingNode = this.left;

    this.left = oldParent;
    oldParent.right = movingNode;

    if (grandParent) {
      this.parent = grandParent;
      if (wasLeftGrandChild) {
        grandParent._left = this;
      } else {
        grandParent._right = this;
      }
    } else {
      this.parent = null;
    }
  }

  rotateRight() {
    if (!this.isLeftChild()) {
      throw new Error(
        'Can not rotate right: node is not a left child of its parent.'
      );
    }

    let oldParent = this.parent;
    let grandParent = oldParent.parent;
    let wasLeftGrandChild = oldParent.isLeftChild();
    let movingNode = this.right;

    this.right = oldParent;
    oldParent.left = movingNode;

    if (grandParent) {
      this.parent = grandParent;
      if (wasLeftGrandChild) {
        grandParent._left = this;
      } else {
        grandParent._right = this;
      }
    } else {
      this.parent = null;
    }
  }

};

