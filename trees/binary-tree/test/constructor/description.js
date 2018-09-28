module.exports = () => {
  describe('BinaryTree.constructor',() => {
    it("Constructs from options object as expected",() => {
      let uut;
     
      assert.doesNotThrow(() => {
        uut = new BinaryTree();
      });
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,0);
      assert(uut._root.isRoot());
      assert(uut._root.isNullTerminator());
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
      assert(uut._root.isRoot());
      assert(uut._root.isNullTerminator());
     
      options = ['apples'];
      assert.doesNotThrow(() => {
        uut = new BinaryTree(options);
      });
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,1);
      assert.strictEqual(uut._asArray[0].value,options[0]);
      assert(uut._root.isRoot());
      assert(!uut._root.isNullTerminator());
      assert(uut._root.left.isNullTerminator());
      assert(uut._root.right.isNullTerminator());
     
      options = ['apples','oranges'];
      assert.doesNotThrow(() => {
        uut = new BinaryTree(options);
      });
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,2);
      for (let i in options) {
        assert.strictEqual(uut._asArray[i].value,options[i]);
      }
      assert(uut._root.isRoot());
      assert(!uut._root.isNullTerminator());
      assert(!uut._root.left.isNullTerminator());
      assert(uut._root.right.isNullTerminator());
     
      options = ['apples','oranges',42];
      assert.doesNotThrow(() => {
        uut = new BinaryTree(options);
      });
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,3);
      for (let i in options) {
        assert.strictEqual(uut._asArray[i].value,options[i]);
      }
      assert(uut._root.isRoot());
      assert(!uut._root.isNullTerminator());
      assert(!uut._root.left.isNullTerminator());
      assert(!uut._root.right.isNullTerminator());
      assert(uut._root.left.left.isNullTerminator());
      assert(uut._root.left.right.isNullTerminator());
      assert(uut._root.right.left.isNullTerminator());
      assert(uut._root.right.right.isNullTerminator());
     
      options = ['apples','oranges',42,{}];
      assert.doesNotThrow(() => {
        uut = new BinaryTree(options);
      });
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,4);
      for (let i in options) {
        assert.strictEqual(uut._asArray[i].value,options[i]);
      }
      assert(uut._root.isRoot());
      assert(!uut._root.isNullTerminator());
      assert(!uut._root.left.isNullTerminator());
      assert(!uut._root.right.isNullTerminator());
      assert(!uut._root.left.left.isNullTerminator());
      assert(uut._root.left.left.left.isNullTerminator());
      assert(uut._root.left.left.right.isNullTerminator());
      assert(uut._root.left.right.isNullTerminator());
      assert(uut._root.right.left.isNullTerminator());
      assert(uut._root.right.right.isNullTerminator());
    });
  
  });
    
};

