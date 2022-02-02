function fooBar(num){
    for(let i = 1;i<=num;i++){
        if(i % 3 == 0 && i % 5 !=0 ){
            console.log('Foo');
        }
        else if(i%3 != 0 && i%5 == 0){
            console.log('Bar');
        }
        else if(i%3 == 0 && i%5 == 0){
            console.log('FooBar');
        }
        else{
            console.log(i);
        }

    }

}

fooBar(50)