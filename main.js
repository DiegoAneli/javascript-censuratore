//Il software riceve in input un lungo testo e una serie di parole da censurare
//Restituisce il testo con xxx al posto delle parole censurate.
//Stampa un "badword index" calcolato come il numero di parole censurate su il numero di parole totali

//testo lungo in una stringa
var testoLungo = ('Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet');
console.log(testoLungo);

// Array parole da censurare (da sostituire con xxx)

var arrayParoleCensurate = /dolor|ipsum|amet/gi;

var sostituite = testoLungo.replace(arrayParoleCensurate, "xxx");
console.log(sostituite);

//Ciclo for che funziona pero' solamente in metà frase

var vietato = 'xxx'
var arrayParoleCensurate2 = ['Lorem','sit','amet'];

for(var i = 0; i < arrayParoleCensurate2.length; i++) {
  if (testoLungo.includes(arrayParoleCensurate2[i])) {
    testoLungo = testoLungo.replace(arrayParoleCensurate2[i], vietato);
  }
}
console.log(testoLungo);


// Prova NON FUNZIONANTE :) per creare multiarray per far si che il ciclo sostituisca le parole censurate in tutte e due le parti
//
// var arrayMulti = [
//   ['Lorem','sit','amet'], //array zero
//   ['Lorem','sit','amet']  //array uno
// ];
//
// var vietato = 'xxx'
//
// for(var i = 0; i < arrayMulti[0].length; i++) {   //for(var i = 0; i < arrayMulti[0][1].length; i++) {
//   if (testoLungo.includes(arrayMulti[0])) {
//     testoLungo = testoLungo.replace(arrayMulti[0], vietato);
//   }
//   if (testoLungo.includes(arrayMulti[1])) {
//     testoLungo = testoLungo.replace(arrayMulti[1], vietato);
//   }
// }
// console.log(testoLungo);




//Stampa un "badword index" calcolato come il numero di parole censurate su il numero di parole totali

// var arrayParoleCensurate / var testoLungo
