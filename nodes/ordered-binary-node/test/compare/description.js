module.exports = () => {
  it("Returns expected values",() => {
    let lowerNode;
    let uut;

    lowerNode = new OrderedBinaryNode({ key: 'aardvark' });
    uut = new OrderedBinaryNode({ key: 'beaver' });

    assert(
      lowerNode.compare(uut.key) > 0,
      "Did not return a positive number when instance key is less than argument key"
    );

    assert(
      uut.compare(uut.key) === 0,
      "Did not return zero when argument key and instance key are equal"
    );

    assert(
      uut.compare(lowerNode.key) < 0,
      "Did not return a negative number when instance key is greater than argument key"
    );


    let turtles = 'all the way down';
    let comparator = function johnGreen() { return turtles; };
    lowerNode = new OrderedBinaryNode({ key: 'aardvark', comparator: comparator });
    uut = new OrderedBinaryNode({ key: 'beaver', comparator: comparator });

    assert.strictEqual(lowerNode.compare(uut.key),turtles);
    assert.strictEqual(uut.compare(lowerNode.key),turtles);
  });
};

