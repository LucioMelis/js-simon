console.log('Js Ok');

// Funzione Genera Numeri Random 
function generaNumeroRandom(min, max) {
    const range = max - min + 1;
    const generatedNumber = Math.floor(Math.random() * range) + min;
    return generatedNumber;
}
// Funzione Pari o Dispari 
function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
// Funzione Comparazione due stringhe 
function getLongestString(string1, string2) {
    let longestString;
    if (string1.length > string2.length) {
        longestString = string1;
    } else {
        longestString = string2;
    }
    return longestString;
}
// Funzione messaggio Utente 
function askUserAString(message) { // messagge è l'argomento
    // chiedo all'utente con messaggio passato via argomento
    const result = prompt(message);
    // ritorno il valore contenuto in result
    return result;
}

// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire,
// uno alla volta,
//  i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri,
//  il software dice quanti e quali dei numeri
//  da indovinare sono stati individuati.