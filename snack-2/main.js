// Snack 2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


const p1 = prompt('Inserisci la prima parola')
const p2 = prompt('Inserisci la seconda parola')

if (p1.length > p2.length){
    console.log(p1);
    console.log('La prima parola è più lunga della seconda');
    console.log(p2);
} else if (p1.length < p2.length){
    console.log(p2);
    console.log('La seconda parola è più lunga della prima');
    console.log(p1);
} else{
    console.log(' Le due parole hanno la stessa lunghezza');
    console.log(p1);
    console.log(p2);
}