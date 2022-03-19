console.log('Js Ok');

// Descrizione:
// Visualizzare in pagina 5 numeri casuali. ///FATTO
// Da lì parte un timer di 30 secondi. //FATTO
// Dopo 30 secondi l'utente deve inserire, //FATTO
// uno alla volta, //FATTO
//  i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri,
//  il software dice quanti e quali dei numeri
//  da indovinare sono stati individuati.


//********************** FUNZIONI ************************************/ 

// Funzione Genera Numeri Random 
function generaNumeroRandom(min, max) {
    const range = max - min + 1;
    const generatedNumber = Math.floor(Math.random() * range) + min;
    return generatedNumber;
}
// Funzione numeri inserito con Verifica 
function controlloNumeriInseriti() {
    let result = parseInt(prompt('Inserisci un numero per volta'));
    while (isNaN(result)) {
        result = parseInt(prompt('Inserisci un numero per volta'));
    }
    return result;
}


//********************** COSTANTI ************************************/ 

// prendo il button dall'html 
const buttonStart = document.getElementById('start');
// prendo il paragrafo dall'html
const paragrafoRisultato = document.getElementById('result');


//********************** EVENTO AL CLICK ************************************/ 

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

    // aggiungo una classe al paragrafo 
    paragrafoRisultato.classList.add('red');
    // Visualizzare in pagina 5 numeri casuali
    paragrafoRisultato.innerText = `I numeri sono : ${arrayNumeriCasuali.join(' - ')}`;


    setTimeout(function () {
        paragrafoRisultato.classList.remove('red');
        paragrafoRisultato.innerText = 'Ora inserisci i numeri';
    }, 2500)

    // Ho aggiunto un altro Set TimeOut per il prompt poichè causava problemi  
    setTimeout(function () {
        // creo un array vuoto 
        const arrayDatiUtente = [];
        // ciclo che mi permette di inserire i dati dell'utente in un array 
        for (let i = 0; i < 5; i++) {
            let numeriInseriti = controlloNumeriInseriti();

            if (arrayNumeriCasuali.includes(numeriInseriti)) {
                arrayDatiUtente.push(numeriInseriti);
            }
        }

        if (arrayDatiUtente.length == 0) {
            paragrafoRisultato.classList.add('red');
            paragrafoRisultato.innerText = 'Game Over';
        } else if (arrayDatiUtente.length < 5 && arrayDatiUtente.length > 0) {
            paragrafoRisultato.innerText = `Hai Indovinato : ${arrayDatiUtente.length} numeri, i numeri sono ${arrayDatiUtente.join(' - ')}`;
        } else {
            paragrafoRisultato.classList.add('green');
            paragrafoRisultato.innerText = `You WIN hai indovinato tutti i numeri : ${arrayDatiUtente.join(' - ')}`;
        }

    }, 3000)

})

