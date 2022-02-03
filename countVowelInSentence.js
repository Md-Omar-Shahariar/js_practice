function vowelCount(sentence){
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

let sentence = "i eat rice with fish curry"
console.log(vowelCount(sentence));