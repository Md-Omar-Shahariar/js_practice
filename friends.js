function largestLength(friends){
    let largest = friends[0]
    let listLarge =[];
    for(let friend of friends){
        if(largest.length <= friend.length){
            largest = friend
            
        }

    }
    for(let friend of friends){
        if(largest.length == friend.length){
            listLarge.push(friend)
            
        }

    }

    return listLarge
}

const  friends =["saad","afridi","saif","akram","bishal","rigan","habibul"]
console.log(largestLength(friends));