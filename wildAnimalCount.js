function wildAnimalCount(mile){
    let animal = 0;
    const firstTenMile = 10
    const secondFiftyMile = 30
    const restMile = 50
    if(mile <=10){
        animal = (mile * firstTenMile)
    }
    else if(mile > 10 && mile <= 60){
        animal = (10 * firstTenMile) + ((mile -10)*secondFiftyMile)
    }
    else{
        animal = (10 * firstTenMile) + (50 * secondFiftyMile) + ((mile - 60)* restMile)
    }
    return animal
}


console.log(wildAnimalCount(67));