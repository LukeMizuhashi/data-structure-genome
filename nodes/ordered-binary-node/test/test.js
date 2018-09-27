global.OrderedBinaryNode = require('../src/constructor.js');
global.assert = require('chai').assert;

const describeConstructor = require('./constructor/description.js');
const describeCompare = require('./compare/description.js');

describe('OrderedBinaryNode',() => {

  describeConstructor();
  describe('BinaryNode.compare',describeCompare);
});

