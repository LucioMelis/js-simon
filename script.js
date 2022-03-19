console.log('Js Ok');


// Funzione messaggio Utente 
function askUserAString(message) { // messagge è l'argomento
    // chiedo all'utente con messaggio passato via argomento
    const result = prompt(message);
    // ritorno il valore contenuto in result
    return result;
}

// Descrizione:
// Visualizzare in pagina 5 numeri casuali. ///FATTO
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire,
// uno alla volta,
//  i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri,
//  il software dice quanti e quali dei numeri
//  da indovinare sono stati individuati.

// Funzione Genera Numeri Random 
function generaNumeroRandom(min, max) {
    const range = max - min + 1;
    const generatedNumber = Math.floor(Math.random() * range) + min;
    return generatedNumber;
}

// prendo il button dall'html 
const buttonStart = document.getElementById('start');
// prendo il paragrafo dall'html
const paragrafoRisultato = document.getElementById('result');


buttonStart.addEventListener('click', function () {
    // creo un array per visualizzare 5 numericasuali
    const arrayNumeriCasuali = [];
    // applico un ciclo for per aggiungere all'array i numeri casuali generati
    for (let i = 0; i < 5; i++) {
        // variabile genera numero casuale 
        let rangeNumeri = generaNumeroRandom(1, 100);
        // cicla fin tanto che il numero generato è incluso nell'array 
        while (arrayNumeriCasuali.includes(rangeNumeri)) {
            // genera un altro numero 
            rangeNumeri = generaNumeroRandom(1, 100);
        }
        // inserisci il numero generato nell'array
        arrayNumeriCasuali.push(rangeNumeri);
    }

    paragrafoRisultato.classList.add('red');
    paragrafoRisultato.innerText = `I numeri sono : ${arrayNumeriCasuali.join(' - ')}`;

    setTimeout(function () {
        paragrafoRisultato.classList.remove('red');
        paragrafoRisultato.innerText = 'Ora inserisci i numeri';
    }, 2500)

    setTimeout(function () {
        for (let i = 0; i < 5; i++) {
            const inserisciNumeri = parseInt(prompt('Inserisci un numero per volta'))
        }
    }, 3000)
})




