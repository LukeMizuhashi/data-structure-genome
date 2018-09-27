module.exports = () => {
  it("Validats trees as expected",() => {
    const errorMessage = 'Created invalid tree';
    const failedToCatch = 'Failed to return false when tree is invalid';
    let uut;
   
    uut = new BinarySearchTree();
    uut.insert(0,'a');
    uut.insert(1,'b');
    uut.insert(2,'c');
    uut.insert(3,'d');
    uut.insert(4,'e');
    uut.insert(5,'f');
    uut.insert(6,'g');

    assert(uut.isValid(),errorMessage);

    uut.search(2).key = 100;
    assert(!uut.isValid(),failedToCatch);

    uut = new BinarySearchTree();
    uut.insert(6,'g');
    uut.insert(5,'f');
    uut.insert(4,'e');
    uut.insert(3,'d');
    uut.insert(2,'c');
    uut.insert(1,'b');
    uut.insert(0,'a');

    assert(uut.isValid(),errorMessage);

    uut.search(2).key = 100;
    assert(!uut.isValid(),failedToCatch);

    uut = new BinarySearchTree();
    uut.insert(3,'d');
    uut.insert(5,'f');
    uut.insert(6,'g');
    uut.insert(4,'e');
    uut.insert(1,'b');
    uut.insert(2,'c');
    uut.insert(0,'a');

    assert(uut.isValid(),errorMessage);

    uut.search(2).key = 100;
    assert(!uut.isValid(),failedToCatch);
  });
};

