function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.insert = function (valor, root) {
  if (!root) var root = this;

  if (valor < this.data) {
    if (this.left === null) {
      this.left = new Node(valor);
    } else {
      this.left.insert(valor, root);
    }
  }

  if (valor >= this.data) {
  } else {
  }
};
