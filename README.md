# JavaScript

------

## Setting Up the environment 

1. create one index.html file, which will be responsible to run all the script further explained

2. boilerplate code for index.html

   ~~~html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <h1>Heading h1 </h1>
       
       <!-- all the script which you want to run will come under script tag-->
       <!--referencing-->
       <script src="nameOfScript.js"></script>
   	
       <button>
           Turn on the light
       </button>
   </body>
   </html>
   ~~~

3. [Separation of concern](https://philipwalton.com/articles/decoupling-html-css-and-javascript/): keeping script and html content in two different files.

4. All the JavaScript files and index.html are located in one directory.

## Variables in JavaScript

1. console output

   ~~~javascript
   console.log('Hello World');
   // it will show the string on the console
   ~~~

2. Types of variable

   | Primitive Types | Reference types |
   | --------------- | --------------- |
   | String          | Objects         |
   | Number          | Arrays          |
   | Boolean         | Functions       |
   | Undefined       |                 |
   | Null            |                 |

   

3. **VAR** keyword is history, **LET** keyword is used to declare the variable 

   ~~~javascript
    // declaring variables 
    let name = 'a string';    
    console.log(name);
   
    let firstVariable, lastVariable;		// uninitialized two variables		
    let firstVar = 1, lastVar;			    // one of the two variable is initialized	
    let firstVar = 'string', lastVar = 1;	// two different type of variables 
   ~~~

4. Rules to declaring the variables [naming of variable]

   1. can not be reserved keywords
   2. should be meaningful and descriptive
   3. can not start with number
   4. can not contains the space or hyphen
   5. variable names are case sensitive
   6. follow java rules

5. Declaring constants

   ~~~javascript
   const pi = 3.14;
   pi = 3.145; //this line will run into an error 
   // reassignment is impossible, pretty logical 
   ~~~

6. Primitive Types

   ~~~javascript
    let stringName = 'sampleString';
    let numberValue = 20;          	// include anykind of numbers float, int, signed anything
    let booleanVariable = true; 		// false
    let undefinedVariable = undefined;     // value is undefined
    let nullVariable = null;
   ~~~

7. Dynamic Typing: The datatype of variable can change during runtime

   ~~~javascript
   // In continuation of above section [section 6] 
   
    console.log('type of variable : '+typeof stringName);      		// output is string
    stringName = 10;
    console.log('type of variable after change : '+typeof stringName);  // output is number
   
    console.log('type of undefined variable : '+ typeof undefinedVariable);       
    // datatype of undefined variable is also undefined
    console.log('type of null variable : '+ typeof nullVariable);
   ~~~

8. 

## Reference datatype : [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

1. Analogy can be made with JSON Objects or MongoDB documents

2. Grouping of related Data, makes code cleaner and more readable

3. Object must always be wrapped by object literals {} 

4. Example Object

   ~~~javascript
   // variable object delcaration
   let person = {
       Age	: 20,
       Name: 'abc'
   };
   
   // let : can also be found in variable section
   // person : name of object
   // {} : object literals
   // Age and Name key-value pair are object properties of the object
   // each properties is comma separated
   // object can hold functions too
   ~~~

5. Accessing the object properties [using DOT notation]

   ~~~javascript
   // write access the variable
   person.Name = 'pqr';     // overwrite the existing property
   
   person.age = 100;		
   
   // read access the variable
   console.log('accessing whole object' + person);		// accessing enitre object
   
   // accessing perticular property of the object
   console.log('accessing name from person object : '+ person.Name );	
   ~~~

6. Accessing the object Property [bracket notation]

   1. This method avoid hard coding of the key during query
   2. The property can be access by user during runtime
   3. User can insert the key to obtain the corresponding value

   ~~~javascript
   person['Age'] = 22; 			// the string 'Age' can be provided externally
   
   // update the object person's name property 
   let userProvidedKey = 'Name';
   let userProvidedValue = 'Jay';
   person[userProvidedKey] =  userProvidedValue;	// successful decouple
   
   // will show corrosponding value of person with the help of user provided key
   console.log(person[userProvidedKey]); 
   ~~~

7. Dynamic typing is also possible on object

   ~~~javascript
   // changing the datatype of properties of object person
   
   person.Name = 2;		// it was previously string now its number
   console.log('changed datatype of name variable : '+ typeof person.Name);
   
   person.Age = 'abvp';	// it was previously number now its string
   console.log('changed datatype of age variable : '+ typeof person.Age);
   ~~~

8. Add new property to the object

   ~~~javascript
   // consider the following object
   let sampleObject = {
       key1 : 'value1',
       key2 : 'value2'
   };
   
   // adding new Key value pair 
   sampleObject.key3 = 'value3';
   
   // updated sampleObject
   let sampleObject = {
       key1 : 'value1',
       key2 : 'value2',
       key3 : 'value3'
   };
   ~~~

9. Constant object declaration

   ~~~javascript
   // const is the keyword to declare the constant same as constant data
   const math = {
       pi:3.14,
       g:9.8,
       time: 'sec'
   };
   ~~~

10. Accessing the constant object

    1. Constant does not make the value of variable immutable
    2. Instead makes binding of the variable immutable
    3. When constant stores data to certain mem. location, that memory location will remain constant
    4. But data available at that location is not constant and subjected to change
    5. To avoid such situation Object freeze 

    ~~~javascript
    // read the specific property of constant object
    let readPi = math.pi;
    console.log('reading property of constant object : '+ readPi);
    
    // read the entire constant object
    console.log('reading entire object : '+ math);
    
    // overwrite certain property of the constant object
    math.pi = 3.14345;      
    math.g = 9.9;
    math.time = 'min'
    
    // adding new property in the constant object
    math.v = 250;
    console.log(math);
    ~~~

11. [Object Freezing]([https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#:~:text=A%20frozen%20object%20can%20no,existing%20properties%20from%20being%20changed.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#:~:text=A frozen object can no,existing properties from being changed.))

    1. Basically it freezes the object in which it is being called
    2. Frozen object is no longer be changed 
    3. It makes object sort of constant
    4. This programming design can be useful during implementation of singleton 

    ~~~javascript
    // effect of object freeze on constant
    // freezing the constant object following way
    Object.freeze(math);
    
    math.h = 100;           
    // because of object freeze this KV will not be added to the constant object
    
    math.pi = 3.14444444;   
    // because of object freeze value of already present key will not be change
    
    math.pi = 'string'      
    // becuase of obejct freeze type of the KV can not be change
    
    
    // effect of object freeze on variable
    // freezing the variable object
    Object.freeze(sampleObject);
    
    sampleObject.key1='value11';    
    // the value of key will not change because of freezing
    
    sampleObject.key1=99;               
    // data type of KV will not change because of freezing
    
    sampleObject.key4 = 'value4';  
    // new KV can not be added because of freezing
    ~~~

## Reference datatype : [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

1. Array is considered to be an object

2. Declaring Empty arrays

   ~~~javascript
   // variable array
   let colcorSelection = [];
   
   // constant array
   const mathConstantArray = [];
   ~~~

3. Declaring Initialized arrays

   ~~~javascript
   // variable array
   let colors = ['red','blue','green'];
   
   // constant array
   const physicsConstant = ['alpha', 'beta', 'tesla'];
   
   let someNumberArray = [1,2,3];
   ~~~

4. Accessing array element [read]

   ~~~javascript
   // read by providing index value
   let redColorString = colors[0];
   let blueColorString = colors[1];
   let greenColorString = colors[2];
   ~~~

5. Accessing array element [write]

   ~~~javascript
   // write by array element
   colors[0] = 'pink';
   colors[1] = 'purple';
   colors[2] = 'yellow';
   
   // although its constant the element of array can be change
   physicsConstant[0] = 'phi';     
   physicsConstant[1] = 'jules';
   physicsConstant[2] = 'newton';
   
   // can be avoided by object freeze
   Object.freeze(physicsConstant);
   ~~~

6. Array can hold multiple types of properties

   ~~~javascript
   let mixArray = ['abc', 1, true, null];
   ~~~

7. Adding new element by on specific index

   ~~~javascript
   //consiquitive incremental order
   colors[3] = 'black';       
   colors[4] = 'white';
   // you can add elements in constant array
   physicsConstant[3] = 'faraday'; 
   physicsConstant[4] = 'plank';
   
   // add element on random non incremental indexes
   colors[6] = 'gray';                 // this will make 5th position empty
   physicsConstant[7] = 'planck';	   // this will make 5th and 6th position empty
   
   // resultant array: 
   let colors = ['pink', 'purple', 'yellow', 'black', 'white', empty, 'gray']
   let physicsConstant = ['phi', 'jules', 'newton', 'faraday', 'plank', empty, empty, 'planck']
   
   // add element on empty index
   colors[5] = 'orange';
   physicsConstant[6] = 'light';
   // resultant index
   let colors = ['pink', 'purple', 'yellow', 'black', 'white', 'orange', 'gray']
   let physicsConstant = ['phi', 'jules', 'newton', 'faraday', 'plank', empty, 'light', 'planck']
   ~~~

8. Push and Pop an element in array

   ~~~javascript
   // will appand the new element at the end of the existing array
   colors.push('brown');
   physicsConstant.push('coulomb');
   
   // resultant array
   let colors = ['pink', 'purple', 'yellow', 'black', 'white', 'orange', 'gray', 'brown'];
   let physicsConstant = ['phi', 'jules', 'newton', 'faraday', 'plank', 'light', 'planck','coulomb']
   
   // pop will remove the element from the end of array
   let lastElement = colors.pop();		// lastElement = 'brown'
   let lastElementOfPhyConst = physicsConstant.pop();	// lastElementOfPhyConstant = 'coulomb'
   ~~~

9. Loop over an Array

   ~~~javascript
   colors.forEach(function(item, index, array){
                  console.log(item, index)
                  })
   ~~~

10. Removing element from the beginning of an array

    ~~~javascript
    let firstElelemt = colors.shift();
    // or
    colors.shift();
    ~~~

11. Adding an element in the first index of an array

    ~~~javascript
    let addFirstElement = colors.unshift('orage');
    // or
    colors.unshift('orage');
    ~~~

12. Find the position of the given element

    ~~~javascript
    let position = colors.indexOf('brown');
    console.log(position); // position = 3
    ~~~

13. Removing the item by their index

    ~~~javascript
    let removeElement = colors.splice(3,1);	
    // where 3 is position and 1 is number of element to be removed
    console.log(colors);	// output : ["orage", "blue", "green"]
    console.log(removeElement); // output : ["brown"]
    ~~~

14. Copy an array

    ~~~javascript
    let copyedArray = colors.slice();
    console.log(copyedArray);	// output : ["orage", "blue", "green"]
    ~~~

    

15. ee

16. 

