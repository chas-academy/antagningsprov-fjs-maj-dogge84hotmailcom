

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    const numbers = [8, 9, 4, 7, 3, 5];

function sort(array){

    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"
for(let nr of array){
        if(nr % 2 === 0){
            console.log(nr + " jämnt")
        }
        else{
            console.log(nr + " udda")
        }
    }
}
    // anropa funktionen och skicka med en array som argument
sort(numbers);
  
}

module.exports = { uppg9 };