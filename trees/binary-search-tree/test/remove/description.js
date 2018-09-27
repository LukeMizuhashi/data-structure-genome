module.exports = () => {
  it('Removes nodes as expected',() => {
    const uut = new BinarySearchTree();
    uut.insert(3,'d');

    uut.insert(5,'f');
    uut.insert(6,'g');
    uut.insert(4,'e');

    uut.insert(1,'b');
    uut.insert(2,'c');
    uut.insert(0,'a');

    assert(uut.root.value,'d');

    assert.strictEqual(uut.root.right.value,'f');
    assert.strictEqual(uut.root.right.right.value,'g');
    assert.strictEqual(uut.root.right.left.value,'e');

    assert.strictEqual(uut.root.left.value,'b');
    assert.strictEqual(uut.root.left.right.value,'c');
    assert.strictEqual(uut.root.left.left.value,'a');

    uut.remove(5); // 'f'

    assert.strictEqual(uut.root.value,'d');

    assert.strictEqual(uut.root.right.value,'e');
    assert.strictEqual(uut.root.right.right.value,'g');
    assert.strictEqual(uut.root.right.left.isLeaf(),true);

    assert.strictEqual(uut.root.left.value,'b');
    assert.strictEqual(uut.root.left.right.value,'c');
    assert.strictEqual(uut.root.left.left.value,'a');
  });
};

