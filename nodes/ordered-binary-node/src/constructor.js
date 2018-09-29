const BinaryNode = require('binary-node');

module.exports = class OrderedBinaryNode extends BinaryNode {
  constructor(options = {}) {
    super(options);

    if (options.comparator) {
      this.compare = options.comparator;
      this.compare.bind(this);
    }

    if (options.hasOwnProperty('value') && !options.hasOwnProperty('key')) {
      throw new Error(
        'options.key must be null or defined if options.value is defined'
      );
    }
    if (options.hasOwnProperty('key') && options.key === undefined) {
      throw new Error(
        'options.key = undefined is reserved. Consider using options.key '
      + '= null instead'
      );
    }
    this._key = options.key; // Defaults to undefined
  }

  get key() {
    return this._key;
  }

  set key(value) {
    throw new Error('OrderedBinaryNode.key can only be set upon instantiation.');
  }

  isNullTerminator() {
    return super.isNullTerminator() 
        && this.key === undefined 
  }

  compare(key) {
    if (this.key < key) {
      return 1;
    } else if (this.key == key) {
      return 0;
    } else if (this.key > key) {
      return -1;
    } else {
      throw new Error(
        `${this.key} is neither less than, greater than, nor equal to ${key}`
      );
    }
  }
};

