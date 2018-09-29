const crypto = require('crypto');

module.exports = () => {
  describe("BinarySearchTree.remove",() => {
    it('Removes nodes as expected',() => {
      let uut;
      let expected;

      let n = [0,1,2,3,4,5,6,7,10,21,50,100,1000];
      n.forEach((n) => {
        uut = new BinarySearchTree();
        expected = [];
        const testData = Array.from(
          { length: n },
          () => parseInt(crypto.randomBytes(3).toString('hex'),16)
        );

        testData.forEach(
            (number) => {
              uut.insert(number,number);
              expected.push(number);
            }
          )
        ;

        expected = expected.sort((a,b) => a - b);

        let i = 0;
        for (let node of uut) {
          assert.strictEqual(expected[i],node.key);
          assert.strictEqual(expected[i],node.value);
          i++;
        }

        // console.log(testData);
        // for (let node of uut) {
        //   console.log(node.value);
        // }

        const getRand = (min,max) => {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        while (expected.length > 0) {
          let i = getRand(0,expected.length - 1);
          let key = expected.splice(i,1)[0]; 

          // console.log(uut);
          // console.log('removing ',key);
          uut.remove(key);
          // console.log(uut);

          let previousNode = {key: -1000, value: 'a' };
          for (let node of uut) {
            // console.log(previousNode.key,node.key);
            assert(previousNode.key < node.key,"Does not maintain sort order");
          }
        }
      });
    });
  });
};

