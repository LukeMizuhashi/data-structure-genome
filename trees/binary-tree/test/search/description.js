module.exports = () => {
  describe('BinaryTree.search',() => {
    it("Returns items as expected",() => {
      let uut;
      let mode;
      let needle = "needle";
      let result;

      uut = new BinaryTree();
      result = uut.search(needle);
      assert.strictEqual(result,null);

      uut = new BinaryTree([]);
      result = uut.search(needle);
      assert.strictEqual(result,null);

      uut = new BinaryTree([1,2,3,4,5]);
      result = uut.search(needle);
      assert.strictEqual(result,null);

      uut = new BinaryTree([needle,1,2,needle,3,4,5,needle]);
      result = uut.search(needle);
      assert.strictEqual(result,needle);

      mode = "last";
      uut = new BinaryTree([needle,1,2,needle,3,4,5,needle]);
      result = uut.search(needle,mode);
      assert.strictEqual(result,needle);

      mode = "first";
      uut = new BinaryTree([needle,1,2,needle,3,4,5,needle]);
      result = uut.search(needle,mode);
      assert.strictEqual(result,needle);

      mode = "all";
      uut = new BinaryTree([needle,1,2,needle,3,4,5,needle]);
      result = uut.search(needle,mode);
      assert(Array.isArray(result));
      assert.strictEqual(result.length,3);

      mode = "all";
      uut = new BinaryTree([needle,1,2,needle,3,4,5,needle]);
      result = uut.search(needle,mode,() => true);
      assert(Array.isArray(result));
      assert.strictEqual(result.length,8);

      let hayIsForHorses = "hay is for horses";
      mode = "all";
      uut = new BinaryTree([needle,1,2,needle,3,4,5,needle]);
      result = uut.search(
          needle,
          mode,
          () => true,
          (index,item,result) => { result.push(hayIsForHorses) }
      );
      assert(Array.isArray(result));
      assert.strictEqual(result.length,8);
      result.forEach((item) => {
        assert.strictEqual(hayIsForHorses,item);
      });
    });
  });
};

