module.exports = () => {
  describe('BinaryTree.remove',() => {
    it("Removes items as expected",() => {
      let uut;
      let mode;
      let needle = "needle";
      let haystack;
      let result;

      uut = new BinaryTree();
      result = uut.remove(needle);
      assert.strictEqual(result,null);
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,0);

      uut = new BinaryTree([]);
      result = uut.remove(needle);
      assert.strictEqual(result,null);
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,0);

      uut = new BinaryTree([1,2,3,4,5]);
      result = uut.remove(needle);
      assert.strictEqual(result,null);
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,5);

      haystack = [needle,1,2,needle,3,4,5,needle];
      uut = new BinaryTree(haystack);
      result = uut.remove(needle);
      assert.strictEqual(result,needle);
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,7);
      for (let i = 0; i < uut._asArray.length; i++) {
        assert.strictEqual(uut._asArray[i].value,haystack[i]);
      }

      mode = "last";
      haystack = [needle,1,2,needle,3,4,5,needle];
      uut = new BinaryTree(haystack);
      result = uut.remove(needle,mode);
      assert.strictEqual(result,needle);
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,7);
      for (let i = 0; i < uut._asArray.length; i++) {
        assert.strictEqual(uut._asArray[i].value,haystack[i]);
      }

      mode = "first";
      haystack = [needle,1,2,needle,3,4,5,"neat!"];
      uut = new BinaryTree(haystack);
      result = uut.remove(needle,mode);
      assert.strictEqual(result,needle);
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,7);
      haystack[0] = "neat!";
      for (let i = 0; i < uut._asArray.length; i++) {
        assert.strictEqual(uut._asArray[i].value,haystack[i]);
      }

      mode = "all";
      haystack = [needle,1,2,needle,3,4,5,needle];
      uut = new BinaryTree(haystack);
      result = uut.remove(needle,mode);
      assert(Array.isArray(result));
      assert.strictEqual(result.length,3);
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,5);
      haystack = [4,1,2,5,3];
      for (let i = 0; i < uut._asArray.length; i++) {
        assert.strictEqual(uut._asArray[i].value,haystack[i]);
      }

      mode = "all";
      haystack = [needle,1,2,needle,3,4,5,needle];
      uut = new BinaryTree(haystack);
      result = uut.remove(needle,mode,() => true);
      assert(Array.isArray(result));
      assert.strictEqual(result.length,8);
      assert(Array.isArray(uut._asArray));
      assert.strictEqual(uut._asArray.length,0);
      haystack.reverse();
      for (let i = 0; i < result.length; i++) {
        assert.strictEqual(result[i],haystack[i]);
      }
    });
  });
};

