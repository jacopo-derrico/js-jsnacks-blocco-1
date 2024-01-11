const result = document.getElementById('result')
let sum = 0

for (let i = 0; i < 10; i++) {
    let insertNumber = parseFloat(prompt("Enter a number"));

    console.log(insertNumber);

    sum += insertNumber;
    
    result.innerHTML = `The sum is: ${sum}`
}