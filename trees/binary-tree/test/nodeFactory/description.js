const Node = require('node');

module.exports = () => {
  describe("BinaryTree._nodeFactory",() => {
    it("Returns instances of BinaryTree._NodeClass as expected",() => {
      let uut;
      let node;

      uut = new BinaryTree();
      node = uut._nodeFactory();      

      assert(typeof node === typeof new Node(),"Does not return an instance of Node");

      uut = new BinaryTree();
      node = uut._nodeFactory({ value: "foo" });
      assert(node.value,"foo");
    });
  });
};

