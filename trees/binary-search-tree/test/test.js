global.BinarySearchTree = require('../src/constructor.js');
global.OrderedBinaryNode = require('ordered-binary-node');
global.assert = require('chai').assert;

const describeConstructor = require('./constructor/description.js');
const describeNodeClass = require('./NodeClass/description.js');
const describeIsEmpty = require('./isEmpty/description.js');
const describeInsert = require('./insert/description.js');
const describeRemove = require('./remove/description.js');

describe('BinarySearchTree',() => {

  describeConstructor();
  describeNodeClass();
  describeIsEmpty();
  describeInsert();
  describeRemove();
});

