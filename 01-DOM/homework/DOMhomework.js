// Crear un array vacío llamado 'toDoItems'
// Tu codigo acá:

var toDoItems = [];


// En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
// Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
// agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
// Tu código acá:

  let span = document.querySelector('#createdBy'); //encontré el tag span con el ID
  span.innerHTML = span.innerHTML + " Marina"; //accedo y a lo que tiene le sumo más data
//me paro en span y le digo a lo que tenias agrega Marina

//querySelector traemos el elemento





// Crear una clase denominada 'ToDo' cuyo constructor debe recibir un único parámetro del tipo string
// con el nombre 'description' que será justamente la descripción del ToDo.
// Agregar dos propiedades a la clase:
// 1) 'description' : debe ser igual a la descripción pasada como parámetro al constructor
// 2) 'complete'    : debe setearse en false
// Ayuda: usar 'this' en el constructor

function ToDo (description) {
  // Tu código acá:
  this.description = description; //agregar propiedades
  this.complete = false;

}

//[{description, complete}, {}]


// Agregar un método denominado 'completeToDo' al prototipo de la clase ToDo
// No requiere ningún argumento
// Debe setear el atributo 'complete' del ToDo en true

// Tu código acá:

ToDo.prototype.completeToDo = function (){
  this.complete = true; //a esa instacia accedé seteao modifica y llamala true.
}
 



// Agregar dos parámetros a la función 'buildToDo':
//    1) Un objeto de la clase ToDo
//    2) Index numérico
//
// La función debe realizar lo siguiente:
//    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
//    2) Asignarle a 'toDoShell' la clase 'toDoShell'
//    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
//    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
//       asignándole el valor de la propiedad 'description' del objeto ToDo.
//    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
//    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
//          - Si es true: asignarle a 'toDoText' la clase 'completeText'
//          - Si es false: no asignarle ninguna clase
//    7) Agregar 'toDoText' como hijo de 'toDoShell'
//    8) Devolver la variable toDoShell


function buildToDo(todo, index) { //index por default que te da el map
  // Tu código acá:
var toDoShell = document.createElement("div"); //creamos un div.

  //<div>  </div>

toDoShell.className = "toDoShell"; //ingreso a la propiedad y asigno.
//hasta el momento creamos <div class="TodoShell"></div>
//asignale a la clase className = que esta vacia y agrega "toDoShell"
//clase para identificar
//tambien se puede hacer toDoShell.setAttribute("class", "sarasa")
//toDoShell.getAttribute('class')
//'sarasa'


  var toDoText = document.createElement('span'); //creamos el tag span
  toDoText.innerHTML = todo.description; //toDo text es span .agrego un texto con description?//innerhtml =
  toDoText.id = index; //cada elemento va a tener un ID propio

  if(todo.complete){ //te coloco la línea sobre el todo o no?
    toDoText.className = 'completeText'; //a la clase seteale la clase "completeText"
  }
 toDoShell.appendChild(toDoText);

 toDoText.addEventListener('click', completeToDo);

 return toDoShell;
}

// La función 'buildToDos' debe crear un array de objetos toDo y devolverlo
// Recibirá como parámetro un array de objetos ToDo
// Utilizar el método map usando la función previamente creada ('buildToDo')
// Devolver el nuevo array

function buildToDos(toDos) {
  // Tu código acá:

  let toDosBuilded = toDos.map(buildToDo);
  
  //(function(elem, i){ //el map recibe un element como primer parametro y desp un index
   // buildToDo(elem, i);
   //let toDosBuiled = [];
   //for(let i = 0; i < toDos.length; i++) {
    //let newToDo = buildToDo(toDos[i],i)
    //toDosBuilded.push(newToDo);
    //}
   
   return toDosBuilded;
  };





// La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
//  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
//  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
//  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
//  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
//  5) Al final de este archivo, antes de la línea que dice "NO CAMBIES NADA DE ACÁ PARA ABAJO" escribe una
//     línea para hacer el llamado a esta funcion (displayToDos)
//  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página

function displayToDos() {
  // Tu código acá:

  let toDoContainer = document.getElementById('toDoContainer'); //con getElementById no se agrega #?//o querySelect
  toDoContainer.innerHTML = ''; //para linkearlo
  let buildedToDos = buildToDos(toDoItems);//te paso el arreglo que está vacio
  for (let i = 0; i < buildedToDos.length; i++) { //itero sobre el resultado de let buildedToDos
    toDoContainer.appendChild(buildedToDos[i]); //html x cada toDo  va a agregar div/span/div/
    
  }
}


// La función 'addToDo' agregará un nuevo ToDo al array 'toDoItems'
// [NOTA: Algunas cuestiones a tener en cuenta sobre el elemento 'input' de HTML (Ya que 'toDoInput' es un input)
// Todos los elementos input tienen una propiedad llamada 'value' que nos permite acceder al texto que se encuentre
// actualmente escrito dentro del input]
//  1) Crear un nuevo ToDo usando la clase ToDo y pasándole el valor del input 'toDoInput' como parámetro
//  2) Agregar el objeto ToDo recién creado al array toDoItems
//  3) Setear el valor del input toDoInput como un string vacio ("") (Esto se realiza para que en la vista se borre lo que se encontraba escrito)
//  4) Llamar a la función displayToDos para que se actualicen los toDos mostrados en pantalla

function addToDo() {
  // Tu código acá:

  let toDoInput = document.querySelector('#toDoInput'); //agarro el elemento toDoInput
  let newToDo = new ToDo(toDoInput.value); //me pasa el valor que voy ingresando a la lista agregar
//creo nueva instancia para que cree un nuevo ToDo
  toDoItems.push(newToDo); //agrega al array que estaba el nuevo
  toDoInput.value = ''; // su valor lo setea a vacio para resetear
  displayToDos(); //si no llamo no se va a actualizar la parte visual
  
}

// Agregar un 'Event Listener' para que cada vez que el botón 'AGREGAR' sea clickeado
// se ejecute la función 'addToDo'
//   1) Seleccionar el elemento cuyo id es 'addButton'
//   2) Agregarle un 'click' event listener, pasándole la función 'addToDo' como callback

// Tu código acá:

let btnAdd = document.querySelector('#addButton');
//btnAdd.addEventListener('click', addToDo); //cuando hagas click en este boton quiero que ejecutes addToDo
btnAdd.onclick = addToDo;

// La función completeToDo se va a ejecutar cuando queramos completar un todo
// [NOTA: Algunas cuestiones a tener en cuenta
// Todo Event Listener recibe como parámetro el objeto 'event' conteniendo un montón de información que incluye
// el tipo del evento, que elemento fue el que lo llamó, los valores de dicho elemento, etc.
// En este paso vamos a utilizarlo para encontrar el index del item que disparó el evento (Esta parte ya se
// encuentra desarrollada pero está comentada dentro de la función por lo que va a ser necesario que la descomenten)]
//   1) Utilizando el index suministrdo, llamar a 'completeToDo' (Recuerden que habíamos creado dcho método en el
//      prototipo de la clase ToDo) sobre el elemento correspondiente del array toDoItems
//   2) Llamar a displayToDos para actualizar los elementos que se van a mostrar en pantalla
//   3) En la función 'buildToDo' agregar un 'click' event listener al elemento 'toDoText', pasándole
//      esta función como callback

function completeToDo(event) {
  // DESCOMENTAR LA SIGUIENTE LINEA
   const index = event.target.id;
  // Tu código acá:
  toDoItems[index].completeToDo();
  displayToDos();

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

displayToDos(); //ejecuto invoco


// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo
  };
}
