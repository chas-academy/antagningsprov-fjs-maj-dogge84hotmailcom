

function uppg6(){

    // Skapa en array med namn som du döper till names
    const names = ["Patrik", "Hanna", "Steven", "Philip"];

    // Loopa igenom arrayen och skriv ut alla namn i konsolen

let text = "";

for(let i = 0; i < names.length; i++){
    text += names[i] + ", "
}

console.log(text);
 
}

module.exports = { uppg6 };