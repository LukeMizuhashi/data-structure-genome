const OrderedBinaryNode = require('ordered-binary-node');

module.exports = () => {
  it("Constructs with no arguments passed",() => {
    let uut;

    assert.doesNotThrow(() => {
      uut = new BinarySearchTree();
    });
    assert(
      uut._root instanceof OrderedBinaryNode,
      "Is not instance of OrderedBinaryNode"
    );
    assert(
      uut._root.isNullTerminator(),
      "Does not default root to null terminator"
    );
    assert.strictEqual(uut._root.left,null);
    assert.strictEqual(uut._root.right,null);
  });
 
  describe("Constructs from instance of BinarySearchTree passed",() => {
    it("Sets root as instance passed to constructor",() => {
      ([0,1,2,3,4,5,6,7,8,9,10,11,13,21,50,100,1000]).forEach((n) => {
        const usedKeys = new Set();
        options = Array.from(
          {length: n},
          () => {
            const result = { value: 'a' };

            do {
              result.key = Math.floor(Math.random() * 2000);
            } while (usedKeys.has(result.key));
            usedKeys.add(result.key);

            return result;
          }
        );

        let givingTree = new BinarySearchTree(options);
        let uut = new BinarySearchTree(givingTree);

        assert.strictEqual(uut._root,givingTree._root);

        let silverstein = givingTree[Symbol.iterator]();
        let uutIterator = uut[Symbol.iterator]();

        let lhs;
        let rhs;
        do {
          lhs = silverstein.next();
          rhs = uutIterator.next();
          assert.strictEqual(lhs.value.key,rhs.value.key);
          assert.strictEqual(lhs.value.value,rhs.value.value);
        } while(!lhs.done && !rhs.done);
      });
    }); 
  });

  describe("Constructs from instance of OrderedBinaryNode passed",() => {
    it("Sets root as instance passed to constructor",() => {
      ([0,1,2,3,4,5,6,7,8,9,10,11,13,21,50,100,1000]).forEach((n) => {
        const usedKeys = new Set();
        options = Array.from(
          {length: n},
          () => {
            const result = { value: 'a' };

            do {
              result.key = Math.floor(Math.random() * 2000);
            } while (usedKeys.has(result.key));
            usedKeys.add(result.key);

            return result;
          }
        );

        let givingTree = new BinarySearchTree(options);
        let uut = new BinarySearchTree(givingTree._root);

        assert.strictEqual(uut._root,givingTree._root);

        let silverstein = givingTree[Symbol.iterator]();
        let uutIterator = uut[Symbol.iterator]();

        let lhs;
        let rhs;
        do {
          lhs = silverstein.next();
          rhs = uutIterator.next();
          assert.strictEqual(lhs.value.key,rhs.value.key);
          assert.strictEqual(lhs.value.value,rhs.value.value);
        } while(!lhs.done && !rhs.done);
      });
    }); 
  });

  describe("Construction from object",() => {
    it("Constructs with empty object passsed",() => {
      let uut;

      assert.doesNotThrow(() => {
        uut = new BinarySearchTree({});
      });
      assert(
        uut._root instanceof OrderedBinaryNode,
        "Is not instance of OrderedBinaryNode"
      );
      assert(
        uut._root.isNullTerminator(),
        "Does not default root to null terminator"
      );
      assert.strictEqual(uut._root.left,null);
      assert.strictEqual(uut._root.right,null);
    });
   
    it("Throws when value is defined, but not key", () => {
      let uut;

      assert.throws(() => {
        uut = new BinarySearchTree({
          value: 'foo',
        });
      });
    });

    it("Throws when options.value = undefined is passed, but not key", () => {
      let uut;

      assert.throws(() => {
        uut = new BinarySearchTree({
          value: undefined,
        });
      });
    });
   
    it("Throws when options.value = null is passed, but not key", () => {
      let uut;

      assert.throws(() => {
        uut = new BinarySearchTree({
          value: null,
        });
      });
    });
   
    it("Does not throw when options.key is passed, but not value", () => {
      let uut;

      assert.doesNotThrow(() => {
        uut = new BinarySearchTree({
          key: 'foo',
        });
      });
      assert.strictEqual(uut._root.value,undefined);
      assert(
        !uut._root.isNullTerminator(),
        "Reports root as null terminator when root has a key"
      );
    });
   
    it("Throws when options.key = undefined is passed", () => {
      let uut;

      assert.throws(() => {
        uut = new BinarySearchTree({
          key: undefined,
        });
      });
    });
   
    it("Throws when options.key = undefined is passed, with a value", () => {
      let uut;

      assert.throws(() => {
        uut = new BinarySearchTree({
          key: undefined,
          value: 'foo',
        });
      });
    });
   
    it("Does not throw when options.key = null is passed", () => {
      let uut;

      assert.doesNotThrow(() => {
        uut = new BinarySearchTree({
          key: null,
        });
      });
      assert.strictEqual(uut._root.value,undefined);
      assert(
        !uut._root.isNullTerminator(),
        "Reports root as null terminator when root has a key"
      );
    });
   
    it("Does not throw when options.key and options.value are passed", () => {
      let uut;

      assert.doesNotThrow(() => {
        uut = new BinarySearchTree({
          key: 'foo',
          value: 'bar',
        });
      });
      assert(
        uut._root instanceof OrderedBinaryNode,
        "Is not instance of OrderedBinaryNode"
      );
      assert(
        !uut._root.isNullTerminator(),
        "Does not set root to an instance of OrderedBinaryNode"
      );
      assert(
        uut._root.left instanceof OrderedBinaryNode,
        "Root's left child is not instance of OrderedBinaryNode"
      );
      assert(
        uut._root.left.isNullTerminator(),
        "Does not set root.left to an instance of OrderedBinaryNode"
      );
      assert(
        uut._root.right instanceof OrderedBinaryNode,
        "Root's right child is not instance of OrderedBinaryNode"
      );
      assert(
        uut._root.right.isNullTerminator(),
        "Does not set root.right to an instance of OrderedBinaryNode"
      );
    });

  });

  describe("Construction from iterable",() => {
    it("Constructs as expected from iterable",() => {
      let uut;
      let options;

      ([0,1,2,3,4,5,6,7,8,9,10,11,13,21,50,100,1000]).forEach((n) => {
        const usedKeys = new Set();
        options = Array.from(
          {length: n},
          () => {
            const result = { value: 'a' };

            do {
              result.key = Math.floor(Math.random() * 2000);
            } while (usedKeys.has(result.key));
            usedKeys.add(result.key);

            return result;
          }
        );

        assert.doesNotThrow(() => {
          uut = new BinarySearchTree(options);
        });

        assert(
          uut._root instanceof OrderedBinaryNode,
          `Is not instance of OrderedBinaryNode (${n})`
        );

        assert(
          uut._root.isRoot(),
          "Node.isRoot on root returns false"
        );

        if (n === 0) {
          assert(
            uut.isEmpty(),
            "Tree is not reporting itself as empty when expected"
          )
            ;
          assert(
            uut._root.isNullTerminator(),
            "Root is not reporting itself as a null terminator (a leaf) when tree is empty"
          );

        } else {
          assert(
            !uut._root.isNullTerminator(),
            "Root is not reporting itself as a null terminator (a leaf) when expected"
          );

        }

        let previousNode = { key: -1000 };
        for (let node of uut) {
          assert(node.key > previousNode.key,"Does not insert nodes sorted by key");
          previousNode = node;
        }
      });
    });

  });
};

