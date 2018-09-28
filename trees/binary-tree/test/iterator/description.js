module.exports = () => {
  describe('BinaryTree[@@iterator]',() => {
    it("Iterates as expected",() => {
      let haystack;
      let uut;
      let i;

      haystack = [];
      uut = new BinaryTree(haystack);

      i = 0;
      for (let node of uut) {
        assert.strictEqual(haystack[i],node.value);
        i++;
      }

      haystack = [3];
      uut = new BinaryTree(haystack);

      i = 0;
      for (let node of uut) {
        assert.strictEqual(haystack[i],node.value);
        i++;
      }

      haystack = [1,2,3,4,5];
      uut = new BinaryTree(haystack);

      i = 0;
      for (let node of uut) {
        assert.strictEqual(haystack[i],node.value);
        i++;
      }

    });
  });
};

