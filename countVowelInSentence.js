//for loop
function vowelCount0(sentence){
    sentence = sentence.toLowerCase()
    let count = 0
    
    for(let i = 0;i<sentence.length;i++ ){
        let letter = sentence[i]
        
        if(letter == 'a' || letter == 'e'|| letter == 'i' || letter == 'o' || letter == 'u'){
            count++
        }
    } 
    return count
}

//for loop
function vowelCount(sentence){
    sentence = sentence.toLowerCase()
    let count = 0
    const vowel =['a','e','i','o','u']
    for(let i = 0;i<sentence.length;i++ ){
        let letter = sentence[i]
        if(vowel.indexOf(letter) != -1){
            count++
        }
    } 
    return count
}
// for of loop

function vowelCount1(sentence){
    sentence = sentence.toLowerCase()
    let count = 0
    const vowel =['a','e','i','o','u']
    for(let letter of sentence){
        
        if(vowel.indexOf(letter) != -1){
            count++
        }
    } 
    return count
}

let sentence = "I eat rice with fish curry"
console.log(vowelCount(sentence));
console.log(vowelCount(sentence));
console.log(vowelCount1(sentence));