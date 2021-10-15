const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor () {
    this.data = null;
    this.left = null;
    this.right = null;
  }

  root() {
    return this.data;
  }

  add(data) {
    const newNode = new BinarySearchTree;
    if (this.data === null) {
      this.data = {
        data: data,
        left: null,
        right: null,
      }
    } else if (data < this.data) {
      this.left = newNode.add(data);
    } else {
      this.right = newNode.add(data);
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}