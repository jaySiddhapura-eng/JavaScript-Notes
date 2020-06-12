let colors = ['red','blue','green'];
console.log(colors);

const physicsConstant = ['alpha', 'beta', 'tesla'];

// iterate over array
colors.forEach(function(item, index, array){
    console.log(item, index)
    })

// iterate over array
physicsConstant.forEach(function(item, index, array){
    console.log(item, index)
    })
  
// pushing the element in array
colors.push('brown');
console.log(colors);

// pushing the element in constant array
physicsConstant.push('coulomb');
console.log(physicsConstant);

// remove first element
let firstElelemt = colors.shift();
console.log('removed element : '+ firstElelemt);
console.log(colors);

// add first element
let addFirstElement = colors.unshift('orage');
console.log(colors);

// find the position of the element
let position = colors.indexOf('brown');
console.log(position);

// remove the element by the index
let removeElement = colors.splice(3,1);
console.log(colors);
console.log(removeElement);

// copy an array
let copyedArray = colors.slice();
console.log(copyedArray);