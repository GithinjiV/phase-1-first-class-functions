function receivesAFunction(receivedFunction){
    receivedFunction();
}


function returnsANamedFunction(){
    return function namedFunction(){
        console.log('Guess what!!! I am named!!')
    }
}


function returnsAnAnonymousFunction(){
    return function (){
        console.log('I am anonymous!!');
    }
}