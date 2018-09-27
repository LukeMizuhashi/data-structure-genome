module.exports = () => {
  it('Finds nodes as expected', () => {
    let uut;
 
    uut = new BinarySearchTree();
    uut.insert(3,'d');
    uut.insert(1,'b');
    uut.insert(0,'a');
    uut.insert(2,'c');
    uut.insert(5,'f');
    uut.insert(4,'e');
    uut.insert(6,'g');

    assert.strictEqual(uut.search(0).key,0);
    assert.strictEqual(uut.search(1).key,1);
    assert.strictEqual(uut.search(2).key,2);
    assert.strictEqual(uut.search(3).key,3);
    assert.strictEqual(uut.search(4).key,4);
    assert.strictEqual(uut.search(5).key,5);
    assert.strictEqual(uut.search(6).key,6);

    assert.strictEqual(uut.search(0).isLeaf(),false);
    assert.strictEqual(uut.search(1).isLeaf(),false);
    assert.strictEqual(uut.search(2).isLeaf(),false);
    assert.strictEqual(uut.search(3).isLeaf(),false);
    assert.strictEqual(uut.search(4).isLeaf(),false);
    assert.strictEqual(uut.search(5).isLeaf(),false);
    assert.strictEqual(uut.search(6).isLeaf(),false);

    assert.strictEqual(uut.search(-1).isLeaf(),true);
    assert.strictEqual(uut.search(0.5).isLeaf(),true);
    assert.strictEqual(uut.search(1.5).isLeaf(),true);
    assert.strictEqual(uut.search(2.5).isLeaf(),true);
    assert.strictEqual(uut.search(3.5).isLeaf(),true);
    assert.strictEqual(uut.search(4.5).isLeaf(),true);
    assert.strictEqual(uut.search(5.5).isLeaf(),true);
    assert.strictEqual(uut.search(6.5).isLeaf(),true);
    assert.strictEqual(uut.search(7).isLeaf(),true);
  });
};

