//array is an object in JS
// empty arrays
let colcorSelection = [];
const mathConstantArray = [];

console.log(colcorSelection);
console.log(mathConstantArray);



// initialized arrays
let colors = ['red','blue','green'];
console.log(colors);

const physicsConstant = ['alpha', 'beta', 'tesla'];
console.log(physicsConstant);



// accesing an array elements
let redColorString = colors[0];
let blueColorString = colors[1];
let greenColorString = colors[2];
console.log(redColorString+' '+blueColorString+' '+greenColorString)

console.log(`${physicsConstant[0]} ${physicsConstant[1]} ${physicsConstant[2]}`);



// modifying the array elements
colors[0] = 'pink';
colors[1] = 'purple';
colors[2] = 'yellow';
console.log(colors);

physicsConstant[0] = 'phi';     // although its constant the element of array can be change
physicsConstant[1] = 'jules';
physicsConstant[2] = 'newton';
console.log(physicsConstant);



// how to make truly constant array with constant elements



// array can hold different types of data
let mixArray = ['abc', 1, true, null];
console.log(mixArray);



// add new elements in the array
// adding in variable array
colors[3] = 'black';        // check with non consiquitve incremental order
colors[4] = 'white';
console.log(colors);

// adding in constant array
physicsConstant[3] = 'faraday'; // you can add elements in constant array
physicsConstant[4] = 'plank';
console.log(physicsConstant);



// add element on 6th index without putting any element on 5th index
colors[6] = 'gray';                 // make 5th position empty
console.log(colors);
// datatype of that empty index 5 is undefined in that case
console.log(typeof colors[5]);

physicsConstant[7] = 'planck';
console.log(physicsConstant);

// fill up the empty index 5 of colors array
colors[5] = 'orange';
console.log(colors);

// each array holds certain default methods which can be use


