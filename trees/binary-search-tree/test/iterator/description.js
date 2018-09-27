module.exports = () => {
  it('Returns key value pairs in order',() => {
    let uut;
   
    uut = new BinarySearchTree();
    uut.insert(0,'a');
    uut.insert(1,'b');
    uut.insert(2,'c');
    uut.insert(3,'d');
    uut.insert(4,'e');
    uut.insert(5,'f');
    uut.insert(6,'g');

    let alpha = [...uut];

    uut = new BinarySearchTree();
    uut.insert(6,'g');
    uut.insert(5,'f');
    uut.insert(4,'e');
    uut.insert(3,'d');
    uut.insert(2,'c');
    uut.insert(1,'b');
    uut.insert(0,'a');

    let beta = [...uut];

    uut = new BinarySearchTree();
    uut.insert(3,'d');
    uut.insert(5,'f');
    uut.insert(6,'g');
    uut.insert(4,'e');
    uut.insert(1,'b');
    uut.insert(2,'c');
    uut.insert(0,'a');

    let gamma = [...uut];

    for (let i = 0; i < alpha.length; i++) {
      assert.strictEqual(alpha[i].key,beta[i].key);
      assert.strictEqual(alpha[i].value,beta[i].value);

      assert.strictEqual(alpha[i].key,gamma[i].key);
      assert.strictEqual(alpha[i].value,gamma[i].value);

      assert.strictEqual(beta[i].key,gamma[i].key);
      assert.strictEqual(beta[i].value,gamma[i].value);
    }
  });
};

