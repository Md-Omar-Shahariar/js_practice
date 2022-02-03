function onlyPositive(array){
    let onlyPositive = []
    for(let i of array){
        if(i >= 0){
            onlyPositive.push(i)
        }
        else{
            return onlyPositive
        }
    }
    return onlyPositive
}

const array = [1,2,3,4,-5,34,6,4]
console.log(onlyPositive(array));