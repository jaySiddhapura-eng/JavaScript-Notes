function responseString (){
    console.log('simple response');
}

function withParam (param1, param2){
    console.log(param1+param2);
}

function withReturn (param1, param2){
    return param1+param2;
}

// how to use the functions
console.log('---------------------------------------------------');
console.log('response function');
responseString();
console.log('---------------------------------------------------');

console.log('response of function with parameters');
withParam(2,3);
console.log('---------------------------------------------------');


console.log('response of function with partially given parameter');
withParam(2);
console.log('---------------------------------------------------');


console.log('response of function with return value');
let value = withReturn(7,9);
console.log(value);
console.log('---------------------------------------------------');