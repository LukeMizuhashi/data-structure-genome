module.exports = () => {
  it("Does not throw error when no options object passed",() => {
    assert.doesNotThrow(() => {
      new Node();
    });
  });

 it("Sets Node.value from options.value appropriately",() => {
    let uut;

    uut = new Node();
    assert.strictEqual(uut.value,undefined);

    uut = new Node({ value: 'bar' });
    assert.strictEqual(uut.value,'bar');
 }); 

};

