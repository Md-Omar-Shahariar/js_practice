const array = [{name : "iphone", 
                price: 10000},{name : "iphone Watch", 
                        price: 7800},{name : 'Apple', 
                            price: 6700},{name : "Apple Watch", 
                                price: 5500},{name : "Xiaomi", 
                                    price: 10000},{name : "Xiaomi Watch", 
                                        price: 3000},]

function find(products, searchText, inRange, outRange){
    for(let product of products){
        if(product.name.includes(searchText)){
            
            if(product.price < inRange || product.price > outRange ){
                continue
            }
            console.log(product)

        }
    }
}


find(array , "Watch", 3000, 6000)