module.exports = () => {
  describe("BinaryTree.insert",() => {
    it("It inserts nodes as expected",() => {
      let uut;
      let expected;

      let n = [0,1,2,3,4,5,6,7,10,21,50,100,1000];
      n.forEach((n) => {
        uut = new BinaryTree();
        expected = [];
        Array.from({length: n}, () => Math.floor(Math.random() * n)).forEach((item) => {
          uut.insert(item);
          expected.push(item);
        });

        for (let i = 0; i < expected.length; i++) {
          assert.strictEqual(uut._asArray[i].value,expected[i]);
        }
      });
    });
  });
};

