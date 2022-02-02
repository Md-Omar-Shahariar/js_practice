const myString = 'Hello How Are You'
let reverse = ''
function reverseString(mytSring){
    for (const letter of myString){
        reverse = letter + reverse
    }
    return reverse
}
console.log(reverseString(myString));