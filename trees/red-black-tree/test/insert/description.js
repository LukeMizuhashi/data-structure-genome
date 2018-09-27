const crypto = require('crypto');

module.exports = () => {
  it("Maintains invariants of a red-black tree",() => {
    let uut = new RedBlackTree();
    assert.strictEqual(uut.root.isBlack,true);
    assert.strictEqual(uut.root.isLeaf(),true);
    
    for (let i of [...Array(100).keys()]) {
      const key = crypto.randomBytes(16).toString("hex");
      uut.insert(key,key);
      if (!uut.isValid()) {
        console.log(uut);
      }
    }
  });
};

