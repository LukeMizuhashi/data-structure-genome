global.RedBlackNode = require('../src/constructor.js');
global.assert = require('chai').assert;

const describeConstructor = require('./constructor/description.js');
const describeRotateLeft = require('./rotateLeft/description.js');
const describeRotateRight = require('./rotateRight/description.js');

describe('RedBlackNode',() => {

  describeConstructor();
  describeRotateLeft();
  describeRotateRight();
});

