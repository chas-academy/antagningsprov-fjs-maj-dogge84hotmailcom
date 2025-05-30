

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

const person = [
    {
        name: "Patrik",
        age: 40
    },
    {
        name: "Steven",
        age: 19
    },
    {
        name: "Hanna",
        age: 50
    },
    {
        name: "Philip",
        age: 32
    },
    {
        name: "Johan",
        age: 27
    }
]

function ageFunction(array){

for(let name of array){
    if(name.age > 30){
        console.log(name.name)
    }
}
}

ageFunction(person);

}

module.exports = { uppg8 };