

function uppg6(){

    // Skapa en array med namn som du döper till names
    // Loopa igenom arrayen och skriv ut alla namn i konsolen
const names = ["Patrik", "Hanna", "Steven", "Philip"];

let text = "";

for(let i = 0; i < names.length; i++){
    text += names[i] + ", "
}

console.log(text);
 
}

module.exports = { uppg6 };