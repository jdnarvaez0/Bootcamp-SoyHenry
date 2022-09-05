const toDoItems = []

document.querySelector('#createdBy').innerHTML =
  'Aplicación creada por Juan David'

function ToDo(description) {
  // Tu código acá:
  this.description = description
  this.complete = false
}

ToDo.prototype.completeToDo = function () {
  this.complete = true
}

function buildToDo(todo, index) {
  // Tu código acá:
  let toDoShell = document.createElement('div')
  toDoShell.className = 'toDoShell'

  let toDoText = document.createElement('span')
  toDoText.innerHTML = todo.description
  toDoText.id = index

  if (todo.complete) {
    toDoText.className = 'completeText'
  }
  toDoShell.appendChild(toDoText)

  toDoText.addEventListener('click', completeToDo)
  return toDoShell
}

function buildToDos(toDos) {
  // Tu código acá:
  let array = toDos.map((todo, i) => {
    return buildToDo(todo, i)
  })

  return array
}

function displayToDos() {
  // Tu código acá:
  let toDoContainer = document.querySelector('#toDoContainer')
  toDoContainer.innerHTML = ''
  let array = buildToDos(toDoItems)

  for (let i = 0; i < array.length; i++) {
    toDoContainer.appendChild(array[i])
  }
}

function addToDo() {
  // Tu código acá:
  let input = document.querySelector('#toDoInput')

  if (input.value !== '') {
    let toDo = new ToDo(input.value)
    toDoItems.push(toDo)
    input.value = ''
    displayToDos()
  }
}

let add = document.querySelector('#addButton')
add.addEventListener('click', addToDo)

function completeToDo(event) {
  // DESCOMENTAR LA SIGUIENTE LINEA
  const index = event.target.id
  // Tu código acá:
  toDoItems[index].completeToDo
  displayToDos()
}

// Una vez que llegaste a este punto verificá que todos los tests pasen

// **********************************************EXTRA CREDITOS:********************************************** //

/*    Investigá sobre el tipo 'checkbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crer un checkbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completeCheckbox' al checkbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        f) Agregar el checkbox sobre el elemento 'toDoShell'
*/
// ********************************************** ----------- ********************************************** //

// Acá debes insertar la llamada a 'displayToDos'
displayToDos()

// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo,
  }
}
