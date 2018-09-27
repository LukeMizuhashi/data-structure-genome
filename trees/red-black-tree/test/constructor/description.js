module.exports = () => {
  it("Starts with an instance of RedBlackNode as root",() => {
    let uut = new RedBlackTree();
    assert(uut.root instanceof RedBlackNode,"Root is not an instance of RedBlaockNode");
  });

  it("Starts with root as leaf node",() => {
    let uut = new RedBlackTree();
    assert(uut.root.isLeaf(),"Root is not a leaf node");
  });

  it("Starts with black root",() => {
    let uut = new RedBlackTree();
    assert(uut.root.isBlack,"Root is not black");
  });
};

