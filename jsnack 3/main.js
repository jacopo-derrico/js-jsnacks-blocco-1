const result = document.getElementById('result')
const generate = document.getElementById('generate')

let names = ["Alexander", "Emma", "Olivia", "Ava", "Isabella", "Sophia", "Charlotte", "Amelia", "Harper", "Ethan", "Noah", "Liam", "Mason", "Logan", "Carter"]

let lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson"];

function random( min, max ) {
    return Math.floor(Math.random() * ( max - min + 1 ) + min )
}
function generateNames(){
    result.innerHTML = ""
    for (let i = 0; i < 15; i++) {
        let newName = random(1, 15)
        let newLastName = random(1, 15)
    
        // console.log(newName, newLastName)
        console.log(names[newName], lastNames[newLastName])
        result.innerHTML += `<li>${names[newName]} ${lastNames[newLastName]}</li>`
    }
}

generate.addEventListener('click', generateNames)
