module.exports = () => {

  it("Does not throw error when no options object passed",() => {
    assert.doesNotThrow(() => {
      new OrderedBinaryNode();
    });
  });

 it("Sets OrderedBinaryNode.compare from options.comparator appropriately",() => {
    let uut;
    let customComparator = () => {};

    uut = new OrderedBinaryNode();
    assert.strictEqual(uut.compare,OrderedBinaryNode.prototype.compare);
    assert.notStrictEqual(uut.compare,customComparator);

    uut = new OrderedBinaryNode({ comparator: customComparator });
    assert.strictEqual(uut.compare,customComparator);
    assert.notStrictEqual(uut.compare,OrderedBinaryNode.prototype.compare);
 }); 

 it("Sets OrderedBinaryNode.key from options.key appropriately",() => {
    let uut;

    uut = new OrderedBinaryNode();
    assert.strictEqual(uut.key,undefined);

    uut = new OrderedBinaryNode({ key: 'foo' });
    assert.strictEqual(uut.key,'foo');
 }); 

 it("Throws error if OrderedBinaryNode.key setter is called after instantiation",() => {
    let uut;

    uut = new OrderedBinaryNode();
    assert.strictEqual(uut.key,undefined);
    assert.throws(() => {
      uut.key = 'bar'; 
    });

    uut = new OrderedBinaryNode({ key: 'foo' });
    assert.strictEqual(uut.key,'foo');
    assert.throws(() => {
      uut.key = 'bar'; 
    });
 }); 

};

