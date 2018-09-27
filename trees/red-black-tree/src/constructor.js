const BinarySearchTree = require('binary-search-tree');
const RedBlackNode = require('red-black-node');

module.exports = class RedBlackTree extends BinarySearchTree {
  constructor(options) {
    super(options);
  }

  insertRepairTree(thisNode) {
    let uncle;
    if (thisNode.parent) {
      uncle = thisNode.parent.getSibling();
    }

    // Case 1
    if (!thisNode.parent) {
      thisNode.isBlack = true;

    // Case 2
    } else if (thisNode.parent.isBlack) {
      // Do nothing.

    // Case 3
    } else if (uncle.isRed) {
      thisNode.parent.isBlack = true;
      uncle.isBlack = true;
      uncle.parent.isRed = true;
      this.insertRepairTree(uncle.parent);

    // Case 4
    } else {
      let p = thisNode.parent;
      let g = thisNode.parent.parent;

      if (thisNode === g.left.right) {
        p.rotateLeft();
        thisNode = thisNode.left;
      } else if (thisNode === g.right.left) {
        p.rotateRight();
        thisNode = thisNode.right; 
      }

      p = thisNode.parent;
      g = thisNode.parent.parent;
      if (thisNode === p.left) {
        g.rotateRight();
      } else {
        g.rotateLeft();
        p.isBlack = true;
        g.isRed = true;
      }
    }
  }

  insert(key,value) {
    let thisNode = super.insert(key,value);
    thisNode.isRed = true;

    const newLeft = this.nodeFactory({ isRed: false });
    const newRight = this.nodeFactory({ isRed: false });
    newLeft.replaceWith(thisNode.left);
    newRight.replaceWith(thisNode.right);
    thisNode.left = newLeft;
    thisNode.right = newRight;

    this.insertRepairTree(thisNode);

    return thisNode;
  }

  get NodeClass() {
    return RedBlackNode;
  }
};

