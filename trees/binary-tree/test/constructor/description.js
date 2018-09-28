module.exports = () => {
  describe('BinaryTree.constructor',() => {
    it("Constructs from options object as expected",() => {
      let uut;
     
      assert.doesNotThrow(() => {
        uut = new BinaryTree();
      });
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,0);
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
     
      options = ['apples'];
      assert.doesNotThrow(() => {
        uut = new BinaryTree(options);
      });
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,1);
      assert.strictEqual(uut._asArray[0].value,options[0]);
     
      options = ['apples','oranges'];
      assert.doesNotThrow(() => {
        uut = new BinaryTree(options);
      });
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,2);
      for (let i in options) {
        assert.strictEqual(uut._asArray[i].value,options[i]);
      }
     
      options = ['apples','oranges',42];
      assert.doesNotThrow(() => {
        uut = new BinaryTree(options);
      });
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,3);
      for (let i in options) {
        assert.strictEqual(uut._asArray[i].value,options[i]);
      }
     
      options = ['apples','oranges',42,{}];
      assert.doesNotThrow(() => {
        uut = new BinaryTree(options);
      });
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,4);
      for (let i in options) {
        assert.strictEqual(uut._asArray[i].value,options[i]);
      }
    });
  
  });
    
};

