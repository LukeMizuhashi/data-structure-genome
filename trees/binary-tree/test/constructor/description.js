module.exports = () => {
  describe('BinaryTree.constructor',() => {
    it("Constructs from options object as expected",() => {
      let uut;
     
      assert.doesNotThrow(() => {
        uut = new BinaryTree();
      });
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,0);
      assert(uut._isRoot(uut._root));
      assert(uut._isNullTerminator(uut._root));
    });
  
    it("Constructs from iterable options as expected",() => {
      let uut;
      let options;
     
      options = [];
      assert.doesNotThrow(() => {
        uut = new BinaryTree(options);
      });
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,0);
      assert(uut._isRoot(uut._root));
      assert(uut._isNullTerminator(uut._root));
     
      options = ['apples'];
      assert.doesNotThrow(() => {
        uut = new BinaryTree(options);
      });
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,1);
      assert.strictEqual(uut._asArray[0].value,options[0]);
      assert(uut._isRoot(uut._root));
      assert(!uut._isNullTerminator(uut._root));
      assert(uut._isNullTerminator(uut._root.left));
      assert(uut._isNullTerminator(uut._root.right));
     
      options = ['apples','oranges'];
      assert.doesNotThrow(() => {
        uut = new BinaryTree(options);
      });
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,2);
      for (let i in options) {
        assert.strictEqual(uut._asArray[i].value,options[i]);
      }
      assert(uut._isRoot(uut._root));
      assert(!uut._isNullTerminator(uut._root));
      assert(!uut._isNullTerminator(uut._root.left));
      assert(uut._isNullTerminator(uut._root.right));
     
      options = ['apples','oranges',42];
      assert.doesNotThrow(() => {
        uut = new BinaryTree(options);
      });
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,3);
      for (let i in options) {
        assert.strictEqual(uut._asArray[i].value,options[i]);
      }
      assert(uut._isRoot(uut._root));
      assert(!uut._isNullTerminator(uut._root));
      assert(!uut._isNullTerminator(uut._root.left));
      assert(!uut._isNullTerminator(uut._root.right));
      assert(uut._isNullTerminator(uut._root.left.left));
      assert(uut._isNullTerminator(uut._root.left.right));
      assert(uut._isNullTerminator(uut._root.right.left));
      assert(uut._isNullTerminator(uut._root.right.right));
     
      options = ['apples','oranges',42,{}];
      assert.doesNotThrow(() => {
        uut = new BinaryTree(options);
      });
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,4);
      for (let i in options) {
        assert.strictEqual(uut._asArray[i].value,options[i]);
      }
      assert(uut._isRoot(uut._root));
      assert(!uut._isNullTerminator(uut._root));
      assert(!uut._isNullTerminator(uut._root.left));
      assert(!uut._isNullTerminator(uut._root.right));
      assert(!uut._isNullTerminator(uut._root.left.left));
      assert(uut._isNullTerminator(uut._root.left.left.left));
      assert(uut._isNullTerminator(uut._root.left.left.right));
      assert(uut._isNullTerminator(uut._root.left.right));
      assert(uut._isNullTerminator(uut._root.right.left));
      assert(uut._isNullTerminator(uut._root.right.right));
    });
  
  });
    
};

