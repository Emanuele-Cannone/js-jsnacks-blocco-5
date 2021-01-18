// Jsnack2 - Creare un array che contiene 10 oggetti che rappresentano una zucchina, 
// indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.


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

var sommaPeso = zucchine[0].peso;
for (var i = 1; i < zucchine.length; i++){
  sommaPeso += zucchine[i].peso;
};

console.log(sommaPeso);