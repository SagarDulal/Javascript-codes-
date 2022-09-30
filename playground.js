
const readline = require('readline')
const rl = readline.createInterface({input:process.stdin, output:process.stdout})
rl.question("what is the tip amount", function (tip){
    rl.close()
})
food = 60
tipPercentage = food *tip
totalAmount = food + tipPercentage
console.log(tipPercentage)
console.log(totalAmount)

banana = prompt('what is your favourite fruit')
