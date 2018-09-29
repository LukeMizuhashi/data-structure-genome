const OrderedBinaryNode = require('ordered-binary-node');

module.exports = () => {
  describe('BinarySearchTree._NodeClass',() => {
    it("Returns constructor of appropriate node class",() => {
      let uut = new BinarySearchTree();
      assert.strictEqual(uut._NodeClass,OrderedBinaryNode);
    });
  });
};

