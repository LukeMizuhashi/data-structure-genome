global.BinaryTree = require('../src/constructor.js');
global.BinaryNode = require('binary-node');
global.assert = require('chai').assert;

const describeConstructor = require('./constructor/description.js');

describe('BinaryTree',() => {

  describe('BinaryTree.constructor',describeConstructor);
  describe('BinaryTree._NodeClass',describe_NodeClass);
  describe('BinaryTree._nodeFactory',describe_nodeFactory);
  describe('BinaryTree._isNullTerminator',describe_isNullTerminator);
  describe('BinaryTree._isRoot',describe_isRoot);
  describe('BinaryTree._getParentFromChild',describe_getParentFromChild);
  describe('BinaryTree._getChildrenFromParent',describe_getChildrenFromParent);
  describe('BinaryTree._isValid',describe_isValid);
  describe('BinaryTree[@@iterator]',describeIterator);
  describe('BinaryTree.insert',describeInsert);
  describe('BinaryTree.remove',describeRemove);
  describe('BinaryTree.search',describeSearch);
});

