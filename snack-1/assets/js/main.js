// Snack 1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore. 

const n1 = Number(prompt('Inserisci il primo numero' ))
console.log(n1);

const n2 = Number(prompt('Inserisci il secondo numero' ))
console.log(n2);

if ( n1 > n2 ){
console.log('Il primo numero è più alto del secondo');
console.log(n1);

} else {
    console.log('Il secondo numero è più alto del primo');
console.log(n2);
}