global.BinaryNode = require('../src/constructor.js');
global.assert = require('chai').assert;

const describeConstructor = require('./constructor/description.js');
const describeLeft = require('./left/description.js');
const describeRight = require('./right/description.js');
const describeIsNullTerminator = require('./isNullTerminator/description.js');
const describeIsRoot = require('./isRoot/description.js');
const describeIsLeftChild = require('./isLeftChild/description.js');
const describeIsRightChild = require('./isRightChild/description.js');
const describeGetSibling = require('./getSibling/description.js');

describe('BinaryNode',() => {

  describeConstructor();
  describeLeft();
  describeRight();
  describeIsNullTerminator();
  describeIsRoot();
  describeIsLeftChild();
  describeIsRightChild();
  describeGetSibling();

});

