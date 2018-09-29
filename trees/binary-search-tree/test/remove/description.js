module.exports = () => {
  describe("BinarySearchTree.remove",() => {
    it('Removes nodes as expected',() => {
      const uut = new BinarySearchTree();
      uut.insert(3,'d');

      uut.insert(5,'f');
      uut.insert(6,'g');
      uut.insert(4,'e');

      uut.insert(1,'b');
      uut.insert(2,'c');
      uut.insert(0,'a');

      assert(uut._root.key,3);
      assert(uut._root.value,'d');

      assert.strictEqual(uut._root.right.value,'f');
      assert.strictEqual(uut._root.right.right.value,'g');
      assert.strictEqual(uut._root.right.left.value,'e');

      assert.strictEqual(uut._root.left.value,'b');
      assert.strictEqual(uut._root.left.right.value,'c');
      assert.strictEqual(uut._root.left.left.value,'a');

      uut.remove(5); // 'f'

      assert.strictEqual(uut._root.value,'d');

      assert.strictEqual(uut._root.right.value,'e');
      assert.strictEqual(uut._root.right.right.value,'g');
      assert.strictEqual(uut._root.right.left.isNullTerminator(),true);

      assert.strictEqual(uut._root.left.value,'b');
      assert.strictEqual(uut._root.left.right.value,'c');
      assert.strictEqual(uut._root.left.left.value,'a');
    });
  });
};

