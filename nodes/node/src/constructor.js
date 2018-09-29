module.exports = class Node {
  constructor(options = {}) {

    if (options.hasOwnProperty('value') && options.value === undefined) {
      throw new Error(
        'options.value = undefined is reserved. Consider using options.value '
      + '= null instead'
      );
    }
    this.value = options.value; // Defaults to undefined
  }

  isNullTerminator() {
    return this.value === undefined;
  }
};

