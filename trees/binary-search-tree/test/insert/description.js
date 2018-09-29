const crypto = require('crypto');

module.exports = () => {
  describe("BinarySearchTree.insert",() => {
    it("It inserts nodes as expected",() => {
      let uut;
      let expected;

      let n = [0,1,2,3,4,5,6,7,10,21,50,100,1000];
      n.forEach((n) => {
        uut = new BinarySearchTree();
        expected = [];
        Array.from(
          { length: n },
          () => crypto.randomBytes(256).toString('hex')
        )
          .forEach(
            (number) => {
              uut.insert(number,number);
              expected.push(number);
            }
          )
        ;

        expected = expected.sort();

        let i = 0;
        for (let node of uut) {
          assert.strictEqual(expected[i],node.key);
          assert.strictEqual(expected[i],node.value);
          i++;
        }
      });
    });
  });
};

