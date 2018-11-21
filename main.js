//Il software riceve in input un lungo testo e una serie di parole da censurare
//Restituisce il testo con xxx al posto delle parole censurate.
//Stampa un "badword index" calcolato come il numero di parole censurate su il numero di parole totali

//testo lungo in una stringa
var testoLungo = ('Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet');
console.log(testoLungo);

//Array parole da censurare (da sostituire con xxx)
//Metodo cercato su internet
///dolor|ipsum|amet/gi;

var arrayParoleCensurate = /dolor|ipsum|amet/gi;

var sostituite = testoLungo.replace(arrayParoleCensurate, "xxx");
console.log(sostituite);
