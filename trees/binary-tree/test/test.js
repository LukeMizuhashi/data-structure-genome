global.BinaryTree = require('../src/constructor.js');
global.assert = require('chai').assert;

const describeConstructor = require('./constructor/description.js');
const describeNodeClass = require('./NodeClass/description.js');

describe('BinaryTree',() => {

  describeConstructor();
  describeNodeClass();
  // describe('BinaryTree._nodeFactory',describe_nodeFactory);
  // describe('BinaryTree._isNullTerminator',describe_isNullTerminator);
  // describe('BinaryTree._isRoot',describe_isRoot);
  // describe('BinaryTree._getParentFromChild',describe_getParentFromChild);
  // describe('BinaryTree._getChildrenFromParent',describe_getChildrenFromParent);
  // describe('BinaryTree._isValid',describe_isValid);
  // describe('BinaryTree[@@iterator]',describeIterator);
  // describe('BinaryTree.insert',describeInsert);
  // describe('BinaryTree.remove',describeRemove);
  // describe('BinaryTree.search',describeSearch);
});

