"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.data = value;
  this.left = null;
  this.rigth = null;
}

BinarySearchTree.prototype.size = function () {
  if (this.rigth === null && this.left === null) {
    return 1;
  }

  if (this.left !== null && this.rigth === null) {
    return 1 + this.left.size();
  }

  if (this.rigth !== null && this.left === null) {
    return 1 + this.rigth.size();
  }

  if (this.rigth !== null && this.left !== null) {
    return 1 + this.rigth.size() + this.left.size();
  }
};

BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value) {
    if (this.rigth === null) {
      this.rigth = new BinarySearchTree(value);
    } else {
      this.rigth.insert(value);
    }
  }

  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function () {
  if (this.value === value) {
    return true;
  }

  if (value > this.value) {
    if (this.rigth === null) {
      return false;
    } else {
      return this.rigth.contains(value);
    }
  }

  if (value < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(vale);
    }
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  if (order === "pre-order") {
    cb(this.value);
    if (this.left !== null) {
      this.left.depthFirstForEach(cb, order);
    }

    if (this.rigth !== null) {
      this.rigth.breadthFirstForEach(cb, order);
    }
  } else if (order === "post-order") {
    if (this.left !== null) {
      this.left.breadthFirstForEach(cb, order);
    }
    if (this.rigth !== null) {
      this.rigth.breadthFirstForEach(cb, order);
    }
    cb(this.value);
  } else {
    if (this.left !== null) {
      this.left.breadthFirstForEach(cb, order);
    }
    cb(this.value);
    if (this.rigth !== null) {
      this.rigth.breadthFirstForEach(cb, order);
    }
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (f, array = []) {
  if (this.left !== null) {
    array.push(this.left);
  }

  if (this.rigth !== null) {
    array.push(this.rigth);
  }

  f(this.value);
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
