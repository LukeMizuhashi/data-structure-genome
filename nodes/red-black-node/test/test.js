global.RedBlackNode = require('../src/constructor.js');
global.assert = require('chai').assert;

const describeConstructor = require('./constructor/description.js');

describe('RedBlackNode',() => {

  describeConstructor();
});

