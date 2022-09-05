//CREAR LINKEDLIST
function List() {
  this._length = 0;
  this.head = null;
}

//CREAR NODO
function Node(data) {
  this.data = data;
  this.next = null;
}

//AGREGAR AL INICIO
// List.prototype.addFirst = function (data) {
//   let node = new Node(data);
//   this.head = node;
// };

//AGREGAR AL FINAL
List.prototype.addLast = function (data) {
  let node = new Node(data);
  current = this.head;

  if (!current) {
    //if current === null
    // si la lista esta vacia
    this.head = node;
    this._length++;
    return node;
  }

  while (current.next) {
    //mientras current.next != null
    current = current.next;
  }

  current.next = node;
  this._length++;
  return node;
};

//IMPRIMIR LISTA
List.prototype.printList = function () {
  current = this.head;

  if (!current) {
    console.log("La lista esta vacia!");
    return;
  }

  while (current) {
    console.log(current.data);
    current = current.next;
  }
};

//ELIMINAR NODO INICIAL
// List.prototype.revoveFirst = function () {
//   current = this.head;

//   if (!current) {
//     return null;
//   }
//   current = current.next;
// };

//ELIMINAR NODO FINAL
List.prototype.removeLast = function () {
  current = this.head;

  if (!current) {
    // si la lista esta vacia
    return null;
  }

  if (!current) {
    // si hay un solo nodo en la lista
    current = null;
  }

  let previous = current;
  let node = current.next;

  while (node.next) {
    previous = node;
    node = node.next;
  }
  previous.next = null;
  return current;
};

//BUSCAR UN ELEMENTO EN LA LISTA
List.prototype.Search = function (value) {
  current = this.head;

  if (!current || value === undefined) {
    return null;
  }

  while (current) {
    if (current.data === value) {
      return current;
    }
    current = current.next;
  }

  return null;
};

//--------------------------
let lista = new List();

lista.add(5);
lista.add(2);
lista.add(6);
lista.add(1);

lista.printList();
lista.removeLast();
console.log("-----------------------------");
//imprimo lista sin el ultimo elemento
lista.printList();

let buscar = lista.Search(6);
let buscar1 = lista.Search(1);

console.log("------BUSCAR-----");
console.log(buscar);
console.log(buscar1);
