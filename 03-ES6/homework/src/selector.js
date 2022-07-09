var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ

  if(matchFunc(startEl)) resultSet.push(startEl);

  for (let i = 0; i < startEl.children.length; i++) {
    const element = startEl.children[i];
    let elementsFound = traverseDomAndCollectElements(matchFunc, child)
    resultSet = [...resultSet, ...elementsFound]; //todo lo que tiene resulSet//todo lo que tiene elementsFound
    
  }
  return resultSet;
  
};
/*body (classOne)
|----div  
|      |---- p (classOne)
|      |---- span     
|----div (classOne)
*/
traverseDomAndCollectElements(body)
resultSet = [BODY]
  
 traverseDomAndCollectElements(div)
 resultSet = [];

   traverseDomAndCollectElements(p)
   //resultSet =

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

//                                .classOne
 var selectorTypeMatcher = function(selector) {
 
  // tu código aquí
  //Detectar si es un Id
  if(selector[0] === "#") { //si dentro de mi selector, la posicion es un #
    return "id";
  }
  if(selector[0] === ".") {return "class";}
  if(selector.split(".").length === 2){ //se puede usar también un includes
   //el length si yo divido y la longitud de ese nuevo arreglo es 2 significa que es un tag.class
   return "tag.class";
  }
   return "tag";
  }
   //for (let i = 0; i < selector.length; i++) {
   // if(selector[i] === '.') return "tag.class";}
    
    
   
  


// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.
//                                 .classOne //selector lo que estoy buscando
var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector); //tengo guardado class
  var matchFunction; //carcaza 
  if (selectorType === "id") {  //lógica
    matchFunction = function(element){ //recibe un elemento del html
      //ese elemento (Element HTML) tiene el id que estoy buscando?
      //guarda el selector en una clousers que luego va a utilizar
      return "#" + element.id === selector;//# para agregar el id + elemento de id
      
    } 

  } else if (selectorType === "class") {
    matchFunction = function(element){
  //ese elemento (Element HTML) tiene el clase que estoy buscando?
    let classes = element.classList;
    for(let i = 0; i < classes.length; i++){
      //recorro para saber si tiene esa clase xq puede tener más de 1
      if("." + classes[i] === selector) { //es igual al selector que estoy buscando?
       return true;
      }
    }
    return false;
    }
    
  } else if (selectorType === "tag.class") {
    //$(div.classOne) <-- selector
    //<div class="classTwo"></div> <== element
    matchFunction = function(element){
      //ese elemento (Element HTML) tiene el clase y tag que estoy buscando?
     let [t,c] = selector.split('.'); //["div", "classOne"]
     //let functionTag = matchFunctionMaker(t)
     //functionTag(element);
     return matchFunctionMaker(t)(element) &&  matchFunctionMaker("." + c)(element);
    }
  
  } else if (selectorType === "tag") {
    //recorro para saber si tiene esa tag xq puede tener más de 1
    matchFunction = function(element){
      return element.tagName === selector.toUpperCase();
    
    }

    
  }
  return matchFunction; //devolución
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};


