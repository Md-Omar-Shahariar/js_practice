const myString = 'Hello How Are You'
let reverse = ''
function reverseString(myString){
    for(let i = myString.length -1 ; i>=0; i--){
        reverse = reverse + myString[i]
    }
    return reverse
}
console.log(reverseString(myString));