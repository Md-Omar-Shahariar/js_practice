let arr = [1,2,3,4,5,6,7,8,9,0,12,1,2,3,4,5,54,2,12223,43]

let set = []

for(let element of arr){
    if(set.indexOf(element) == -1){
        set.push(element)
    }
}
console.log(set);