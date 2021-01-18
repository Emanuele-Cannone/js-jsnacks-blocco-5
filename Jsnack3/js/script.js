// Jsnack3 - Creare  un array che contiene 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm. 
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var zucchineLittle = [];
var zucchineBig = [];


var zucchine = [
  {
    varietà : 'Zucchino nero di Milano',
    peso : 10,
    lunghezza : 3
  },
  {
    varietà : 'Zucchino romanesco',
    peso : 20,
    lunghezza : 5
  },
  {
    varietà : 'Zucchino ortolano di Faenza',
    peso : 30,
    lunghezza : 7
  },
  {
    varietà : 'Zucchina lunga Fiorentina',
    peso : 40,
    lunghezza : 9
  },
  {
    varietà : 'Zucchino siciliano',
    peso : 50,
    lunghezza : 11
  },
  {
    varietà : 'Zucchina striata di Napoli',
    peso : 60,
    lunghezza : 13
  },
  {
    varietà : 'Zucchina bianca triestina',
    peso : 70,
    lunghezza : 15
  },
  {
    varietà : 'Zucchina rigata pugliese',
    peso : 80,
    lunghezza : 17
  },
  {
    varietà : 'Zucchino tondo di Piacenza',
    peso : 90,
    lunghezza : 19
  },
  {
    varietà : 'Zucchinotondo di Nizza',
    peso : 100,
    lunghezza : 21
  }
];

var sommaGrandi = 0;
var sommaPiccole = 0;

for (var i = 0; i < zucchine.length; i++){
  if (zucchine[i].lunghezza > 15){
    sommaGrandi += zucchine[i].lunghezza;
    zucchineBig.push(zucchine[i]);
  } else {
    sommaPiccole += zucchine[i].lunghezza;
    zucchineLittle.push(zucchine[i]);
  }
};

console.log(sommaGrandi);
console.log(sommaPiccole);
 

console.log(zucchineBig);
console.log(zucchineLittle);
