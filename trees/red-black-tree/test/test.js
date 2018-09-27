global.RedBlackTree = require('../src/constructor.js');
global.RedBlackNode = require('red-black-node');
global.assert = require('chai').assert;

const describeConstructor = require('./constructor/description.js');
const describeInsert = require('./insert/description.js');

describe('RedBlackTree',() => {

  describeConstructor();
  describe('RedBlackTree.insert',describeInsert);
  // 'remove',
  // 'maxNode',
  // 'minNode',
  // 'maxValue',
  // 'minValue',
  // 'search',
  // 'isValid',
  // [Symbol.iterator]() {
});

