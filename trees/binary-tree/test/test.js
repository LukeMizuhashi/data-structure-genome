global.BinaryTree = require('../src/constructor.js');
global.assert = require('chai').assert;

const describeConstructor = require('./constructor/description.js');
const describeNodeClass = require('./NodeClass/description.js');
const describeNodeFactory = require('./nodeFactory/description.js');
const describeIsEmpty = require('./isEmpty/description.js');
const describeInsert = require('./insert/description.js');
const describeSearch = require('./search/description.js');
const describeRemove = require('./remove/description.js');
const describeIterator = require('./iterator/description.js');

describe('BinaryTree',() => {

  describeConstructor();
  describeNodeClass();
  describeNodeFactory();
  describeIsEmpty();
  describeInsert();
  describeSearch();
  describeRemove();
  describeIterator();
});

