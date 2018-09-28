module.exports = () => {
  it("Returns appropriate boolean values",() => {
    let uut;

    
    uut = new BinaryNode();
    assert.strictEqual(uut.isNullTerminator(),true);

    uut.left = new BinaryNode();
    assert.strictEqual(uut.isNullTerminator(),false);

    
    uut = new BinaryNode();
    assert.strictEqual(uut.isNullTerminator(),true);

    uut.right = new BinaryNode();
    assert.strictEqual(uut.isNullTerminator(),false);


    uut = new BinaryNode();
    assert.strictEqual(uut.isNullTerminator(),true);

    uut.value = 'foo'; 
    assert.strictEqual(uut.isNullTerminator(),false);
  });
};

