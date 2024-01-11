const result = document.getElementById('result')
let insertNumber = parseFloat(prompt("Enter a number"));

for (let i = 1; i <= insertNumber; i++) {
    const element = i*i*i;
    
    console.log(element)

    result.innerHTML += `The result for ${insertNumber} is: ${element} `
}