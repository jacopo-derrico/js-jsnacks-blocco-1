const listNumberHtml = document.getElementById('list')
const result = document.getElementById('result')

let listNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let sum = 0

let odds = 0

function sumOddNumbers() {
    for (let i = 0; i < listNumber.length; i++) {
        
        const odds = (i % 2) !== 0
    
    
        if (odds) {
            sum += i;
        }
    }

    console.log(sum)
    listNumberHtml.innerHTML = listNumber
    result.innerHTML = `La somma dei numeri dispari è: ${sum}`
}

sumOddNumbers()
