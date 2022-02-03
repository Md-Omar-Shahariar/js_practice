let afridi = {
    name:"xiaomi",
    price: 13000,
    ram:8


}
let saad = {
    name:"samsung",
    price: 15000,
    ram:4


}






let array = [afridi,saad]
console.log(array);

function morePrice(array){
    let largest = array[0]
    for(let i of array){
        if(largest.price < i.price){
            largest = i
        }
    }

    

    return largest
}

let largest = morePrice(array)



let message = `${largest.name}'s price is ${largest.price} `
console.log(message);