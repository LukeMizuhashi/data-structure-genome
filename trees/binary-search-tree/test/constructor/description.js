const allowsDuplicates = require('./allowsDuplicates.js');
const startsWithLeaf = require('./startsWithLeaf.js');
const comparator = require('./comparator.js');
const rootFromOptions = require('./rootFromOptions.js');

module.exports = () => {
  it('Starts with a leaf node as root',startsWithLeaf);
  it('Propogates options.allowsDuplicates as expected',allowsDuplicates);
  it('Passing options.comparator impacts insertion order as expected',comparator);
  it('Uses options as this.root if options is an instance of BinaryNode',rootFromOptions);
};

