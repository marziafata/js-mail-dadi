// "Sono in lista?" Chiedi all'utente la sua email e controlla che sia nella lista di chi può accedere (ergo: la mail è presente in un array contenente le email "autorizzate") e stampa un messaggio appropriato (sei in lista/non sei in lista)


// creare un array con le email
var archivio_indirizzi = ["marzia@boolean.it", "federica@boolean.it", "luca@boolean.it", "mirko@boolean.it", "valentina@boolean.it", "nicole@boolean.it", "fabio@boolean.it", "vittoria@boolean.it"];
// console.log(archivio_indirizzi);

// chiedere la mail all'utente
var mail_utente = prompt('Inserisci la tua mail per sapere se sei già registrato:')
// console.log('mail inserita da utente: ' + mail_utente);
// controlla se la mail è dentro
// (creare un ciclo for)
var risultato = false;

for (var i = 0; i < archivio_indirizzi.length; i++) {
    console.log('archivio: ' + archivio_indirizzi);
    if (archivio_indirizzi[i] == mail_utente) {
        risultato = true;
    }
}

// stampa un messaggio (sei in lista o no)
if (risultato == true) {
    // console.log('La tua mail è già presente nei nostri archivi. Non ricordi la password?');
    document.getElementById('ok').innerHTML='La tua mail è già presente nei nostri archivi. Non ricordi la password?';

} else {
    // console.log('La tua mail non è presente nei nostri archivi, vuoi registrarti ora?');
    document.getElementById('no').innerHTML='La tua mail non è presente nei nostri archivi, vuoi registrarti ora?';
}
