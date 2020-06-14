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


// pass object as parameter
function myFunction(theObject){
    theObject.var1 = 'STRING1';
    theObject.var2 = 'STRING2';
    theObject.var3 = 'STRING3';
}

let sampleObject = {
    var1 : 'string0',
    var2 : 'string1',
    var3 : 'string3'
}

myFunction(sampleObject);
console.log('demo of object as a function parameter')
console.log(sampleObject);

// inner function closure
function outerFunction(param1,param2){

    function innerFuction1(param3){
            return param3*param3;
    }

    //return of outer function
    return innerFuction1(param1)+innerFuction1(param2);
}

let val1 = outerFunction(2,2);
console.log('value obtained from outer function : ' + val1);


// multiple inner functions
function OUTERFUNC (param1,param2){

    function INNERFUNC1(innerParam1){
        return innerParam1*innerParam1;
    }

    function INNERFUNC2(innerParam2){
        return innerParam2*innerParam2;
    }

    return INNERFUNC1(param1)+INNERFUNC2(param2);
}

let val2 = OUTERFUNC(3,4);
console.log('value obtained from outer function : ' + val2);



// call the outer function and specify arguments for both the outer and inner function
function outside(x){

    function inside(y){
        let val = x + y;
        return val;
    }
    return inside;
}

let sample = outside(2);
let sample2 = sample(5);
console.log(sample2);       // it will give me 7

// or 
let sample3 = outside(3)(10);
console.log(sample3);       // it will give me result 13


// arrow function example
let multiplication = (number1, number2) => number1*number2;

// calling the arrow function is same as conventional function
let outcome = multiplication(2,3);
console.log('outcome of arrow function : '+ outcome);

// equi. conventional function
let MULTIPLICATION = function(num1, num2){
    let result = num1*num2;
    return result;
}

// arrow function without any parameters or return data
let sampleAlert = () => alert('house is on fire');
console.log('sample alert from arrow function' + sampleAlert());

// equi. conventional function
let SAMPLEALERT = function(){
    alert('house is on fire');
}
console.log('sample alert from conventional function : '+SAMPLEALERT());