// "Gioco dei dadi" PC vs. Human: chiedi un numero all'utente tra 1 e 6 (giocata human) e estrai un numero casuale tra 1 e 6 (giocata PC). Chi fa il numero più alto vince!

var tiro = prompt('Scrivi lancio per lanciare i dadi')
console.log(tiro);
// Giocatore 1
// estrai un numero casuale tra 1 e 6 (pc)
var giocatore1_dado1 = Math.floor(Math.random() * 6) + 1;

var giocatore1_dado2 = Math.floor(Math.random() * 6) + 1;

var risultato1 = giocatore1_dado1 + giocatore1_dado2;
console.log('La somma dei tuoi dadi è ' + risultato1);
document.getElementById('giocatore1').innerHTML='La somma dei tuoi dadi è ' + risultato1;
// Giocatore 2
// estrai un numero casuale tra 1 e 6 (pc)
var giocatore2_dado1 = Math.floor(Math.random() * 6) + 1;

var giocatore2_dado2 = Math.floor(Math.random() * 6) + 1;

var risultato2 = giocatore2_dado1 + giocatore2_dado2;
console.log('La somma dei dadi del tuo avversario è ' + risultato2);
document.getElementById('giocatore2').innerHTML='La somma dei dadi del tuo avversario è ' + risultato2;
// il più alto vince

var messaggio = ''
if (risultato1 > risultato2) {
    messaggio = 'Hai vinto!';
    console.log(messaggio);

} else if(risultato1 == risultato2) {
    messaggio = 'Pareggio! Ritenta';
    console.log(messaggio);

} else {
    messaggio = 'Pareggio! Ritenta';
    console.log(messaggio);
}

document.getElementById('punteggio').innerHTML = messaggio;
