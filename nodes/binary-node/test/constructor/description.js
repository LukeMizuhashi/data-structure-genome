const Node = require('node');

module.exports = () => {
  it("Extends Node class",() => {
    assert(
      Node.isPrototypeOf(BinaryNode),
      "BinaryNode does not extend Node"
    );
  });

  it("Does not throw error when no options object passed",() => {
    assert.doesNotThrow(() => {
      new BinaryNode();
    });
  });

 it("Sets BinaryNode.value from options.value appropriately",() => {
    let uut;

    uut = new BinaryNode();
    assert.strictEqual(uut.value,undefined);

    uut = new BinaryNode({ value: 'bar' });
    assert.strictEqual(uut.value,'bar');
 }); 

 it("Defaults BinaryNode.parent to null",() => {
   let uut = new BinaryNode();
   assert.strictEqual(uut.parent,null);
 }); 

 it("Sets BinaryNode.left from options.left appropriately",() => {
    let uut;
    let leftChild = new BinaryNode();

    uut = new BinaryNode();
    assert.strictEqual(uut.left,null);

    uut = new BinaryNode({ left: leftChild });
    assert.strictEqual(uut.left,leftChild);
    assert.strictEqual(leftChild.parent,uut);
 }); 

 it("Sets BinaryNode.right from options.right appropriately",() => {
    let uut;
    let rightChild = new BinaryNode();
    assert.strictEqual(rightChild.parent,null);

    uut = new BinaryNode();
    assert.strictEqual(uut.right,null);

    uut = new BinaryNode({ right: rightChild });
    assert.strictEqual(uut.right,rightChild);
    assert.strictEqual(rightChild.parent,uut);
 }); 

};

