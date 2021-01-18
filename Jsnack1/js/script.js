// Jsnack1 - Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla.


var palla = {
  nome : 'palla',
  peso : 10
};

console.log(palla);// vedo quanto pesa inizialmente la palla

palla.peso = parseInt(prompt('inserisci il peso della palla')); // prendo la proprietà peso dell'oggetto palla e 
// cambio il valore 

console.log(palla);// vedo se il valore cambia