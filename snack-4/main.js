// Snack 4 Blocco 1:
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//  chiedi all’utente il suo nome 
//  comunicagli se può partecipare o no alla festa.

// const cesto = ["mela", "banana", "arancia", "prugna"];

// for(let i=0; i < cesto.length; i++){
//     const frutto = cesto[i];    
//     if(frutto !== 'mela' ){
//         console.log(frutto);
//     }
// }


const invitati = [
    'Marco',
    'Michele',
    'Giovanni',
    'Elliot',
    'Thomas',
    'Walter',
    'Giulia',
    'Stefania',
    'Benedetta',
    'Lorenza'
]

let i = 0;
console.log(invitati);

while (i < invitati.length ) {
    const nome = invitati[i];
    const partecipante = prompt();

    if(nome !== partecipante){
        console.log(partecipante + ', non sei degno di partecipare alla festa del Grande Gatsby');

    } else {
        console.log(  partecipante + ', sei stato invitato alla festa del Grande Gatsby ');

    }
    
}