module.exports = () => {
  it("Defaults to black",() =>{
    let uut = new RedBlackNode();
    assert.strictEqual(uut.isRed,false);
    assert.strictEqual(uut.isBlack,true);
  });

  it("Sets color from options.isRed",() => {
    let uut;

    uut = new RedBlackNode({ isRed: true });
    assert.strictEqual(uut.isRed,true);
    assert.strictEqual(uut.isBlack,false);

    uut = new RedBlackNode({ isRed: false });
    assert.strictEqual(uut.isRed,false);
    assert.strictEqual(uut.isBlack,true);
  });
};

