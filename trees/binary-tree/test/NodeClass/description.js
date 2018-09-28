const Node = require('node');

module.exports = () => {
  describe("BinaryTree",() => {
    describe('BinaryTree._NodeClass',() => {
      it("Returns constructor of appropriate node class",() => {
        let uut = new BinaryTree();
        assert.strictEqual(uut._NodeClass,Node);
      });
    });
  });
};

