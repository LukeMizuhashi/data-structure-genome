global.BinarySearchTree = require('../src/constructor.js');
global.BinaryNode = require('binary-node');
global.assert = require('chai').assert;

const describeConstructor = require('./constructor/description.js');
const describeInsert = require('./insert/description.js');
const describeMaxNode = require('./maxNode/description.js');
const describeMinNode = require('./minNode/description.js');
const describeMaxValue = require('./maxValue/description.js');
const describeMinValue = require('./minValue/description.js');
const describeRemove = require('./remove/description.js');
const describeIterator = require('./iterator/description.js');
const describeIsValid = require('./isValid/description.js');

describe('BinarySearchTree',() => {

  describeConstructor();
  describe('BinarySearchTree.insert',describeInsert);
  describe('BinarySearchTree.maxNode',describeMaxNode);
  describe('BinarySearchTree.minNode',describeMinNode);
  describe('BinarySearchTree.maxValue',describeMaxNode);
  describe('BinarySearchTree.minValue',describeMinValue);
  describe('BinarySearchTree.remove',describeRemove);
  describe('BinarySearchTree.iterator',describeIterator);
  describe('BinarySearchTree.isValid',describeIsValid);
});

