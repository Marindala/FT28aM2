const { INCREMENTO, DECREMENTO } = require('../action-types');

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

//Defini mis acciones
//tengo que exportar todo sino no se enteran los otros archivos

const incremento = () => {
  return{
    type: INCREMENTO, //esta en una variable sino tiene que ir "INCREMENTO"
  };
};

const decremento = () => {
  return{
    type: DECREMENTO,
  };
};

const impar = () => {
  return{
    type:"IMPAR",
  };
};

const async = () => {
  return{
    type:"ASYNC",
  };
};

module.exports = {
  incremento,
  decremento,
  impar,
  async
}