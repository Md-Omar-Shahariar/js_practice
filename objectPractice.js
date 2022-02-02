let phones = [{
    name: 'xiaomi',
    price : 10000,
    Made_in : 'china'
},{
    name: "nokia",
    price:12000,
    Made_in: "Vietnam"
},{
    name:"oppo",
    price: 8000,
    Made_in:"china"
}
]
function lowest(phones){
    let lowest = phones[0]
    for(let phone of phones){
        if(lowest.price > phone.price){
            lowest = phone
        }
    }
    return lowest

}

console.log(lowest(phones));