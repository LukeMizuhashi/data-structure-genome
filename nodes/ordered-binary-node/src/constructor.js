const BinaryNode = require('binary-node');

module.exports = class OrderedBinaryNode extends BinaryNode {
  constructor(options = {}) {
    super(options);

    if (options.comparator) {
      this.compare = options.comparator;
      this.compare.bind(this);
    }
    this._key = options.key; // Defaults to undefined
  }

  get key() {
    return this._key;
  }

  set key(value) {
    throw new Error('OrderedBinaryNode.key can only be set upon instantiation.');
  }

  compare(otherNode) {
    if (this.key < otherNode.key) {
      return -1;
    } else if (otherNode.key == this.key) {
      return 0;
    } else if (this.key > otherNode.key) {
      return 1;
    } else {
      throw new Error(
        `${this.key} is neither less than, greater than, nor equal to ${otherNode.key}`
      );
    }
  }
};

