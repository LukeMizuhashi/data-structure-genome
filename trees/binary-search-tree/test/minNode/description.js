module.exports = () => {
  it('Returns smallest value node',() => {
    const uut = new BinarySearchTree();
    assert.strictEqual(uut.minNode,null);
    uut.insert(0,'a');
    uut.insert(1,'b');
    uut.insert(2,'c');
    uut.insert(3,'d');
    uut.insert(4,'e');
    uut.insert(5,'f');
    uut.insert(6,'g');
    assert.strictEqual(uut.minNode.value,'a');
  });
};

