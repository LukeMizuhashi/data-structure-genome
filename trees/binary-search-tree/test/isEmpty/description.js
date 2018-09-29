module.exports = () => {
  describe("BinarySearchTree.isEmpty",() => {
    it("Returns a boolean as expected",() => {
      let uut;

      uut = new BinarySearchTree();
      assert.strictEqual(uut.isEmpty(),true);

      uut.insert(1000,"foo");
      assert.strictEqual(uut.isEmpty(),false);

      uut = new BinarySearchTree([
        { key: 1, value: 'a', },
        { key: 2, value: 'a', },
        { key: 3, value: 'a', },
        { key: 4, value: 'a', },
        { key: 5, value: 'a', },
      ]);
      assert.strictEqual(uut.isEmpty(),false);
    });
  });
};

