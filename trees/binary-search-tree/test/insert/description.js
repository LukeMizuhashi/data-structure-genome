const appropriateLeaves = require('./appropriateLeaves.js');
const handlesDuplicates = require('./handlesDuplicates.js');
const returnsNode = require('./returnsNode.js');

module.exports = () => {
  it('Inserts nodes as appropriate leaves',appropriateLeaves);
  it('Handles duplicates as expected',handlesDuplicates);
  it('Returns a reference to the inserted node',returnsNode);
};

