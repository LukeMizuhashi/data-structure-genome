module.exports = () => {
  describe("BinaryTree.isEmpty",() => {
    it("Returns a boolean as expected",() => {
      let uut;

      uut = new BinaryTree();
      assert.strictEqual(uut.isEmpty(),true);

      uut.insert("foo");
      assert.strictEqual(uut.isEmpty(),false);

      uut = new BinaryTree([1,2,3,4,5]);
      assert.strictEqual(uut.isEmpty(),false);

      uut = new BinaryTree([]);
      assert.strictEqual(uut.isEmpty(),true);
    });
  });
};

