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

   1. `var` keyword is history, `let` keyword is used to declare the variable 

   ~~~javascript
    // declaring variables 
    let name = 'a string';    
    console.log(name);
   
    let firstVariable, lastVariable;		// uninitialized two variables		
    let firstVar = 1, lastVar;			    // one of the two variable is initialized	
    let firstVar = 'string', lastVar = 1;	// two different type of variables 
   ~~~

3. Rules to declaring the variables [naming of variable]

   1. can not be reserved keywords
   2. should be meaningful and descriptive
   3. can not start with number
   4. can not contains the space or hyphen
   5. variable names are case sensitive
   6. follow java rules<br>

4. Declaring constants

   ~~~javascript
   const pi = 3.14;
   pi = 3.145; //this line will run into an error 
   // reassignment is impossible, pretty logical 
   ~~~

5. Primitive Types

   ~~~javascript
    let stringName = 'sampleString';
    let numberValue = 20;          	// include anykind of numbers float, int, signed anything
    let booleanVariable = true; 		// false
    let undefinedVariable = undefined;     // value is undefined
    let nullVariable = null;
   ~~~

6. Dynamic Typing: The datatype of variable can change during runtime

   ~~~javascript
   // In continuation of above section [section 6] 
   
    console.log('type of variable : '+typeof stringName);      		// output is string
    stringName = 10;
    console.log('type of variable after change : '+typeof stringName);  // output is number
   
    console.log('type of undefined variable : '+ typeof undefinedVariable);       
    // datatype of undefined variable is also undefined
    console.log('type of null variable : '+ typeof nullVariable);
   ~~~

## Reference datatype : [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

1. Analogy can be made with JSON Objects or MongoDB documents

2. Grouping of related Data, makes code cleaner and more readable

3. Object must always be wrapped by object literals `{}` 

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
   3. User can insert the key to obtain the corresponding value<br><br>

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
    5. To avoid such situation Object freeze <br><br>

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

11. [Object Freezing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

    1. Basically it freezes the object in which it is being called
    2. Frozen object is no longer be changed 
    3. It makes object sort of constant
    4. This programming design can be useful during implementation of singleton <br><br>

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

## Reference datatype : [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

1. Syntax to declare the simple function semicolon 

   ~~~javascript
   // does not have any parameter or any return value
   // statements in functions are semicolon separated
   function responseString (){
       console.log('simple response');
   }
   ~~~

2. Function with parameters

   ~~~javascript
   // function with one parameter
   function withParam (param1){
       console.log(param1);
   }
   
   // funtion with more than 2 parameters
   function withParam (param1, param2, param3){
       console.log(param1+param2+param3);
   }
   ~~~

3. Function which returns

   ~~~javascript
   function withReturn (param1, param2){
       return param1+param2;
   }
   ~~~

4. Using the declared parameter

   ~~~javascript
   //response function
   responseString();
   
   //response of function with parameters
   withParam(2,3);
   
   //response of function with partially given parameter
   withParam(2);
   
   //response of function with return value
   let value = withReturn(7,9);
   console.log(value);
   ~~~

5. Function are hoisted

   ~~~javascript
   // function usage before its declaration will give an error
   // because functions are hoisted
   
   // function usage
   withReturn(2,3);
   
   // function declaration
   function withReturn (param1, param2){
       return param1+param2;
   }
   ~~~

6. Object as a parameter to the function

   ~~~javascript
   // pass object as parameter
   function myFunction(theObject){
       // this will modify the vars of given object [theObject]
       // vars are same as the provided object
       theObject.var1 = 'STRING1';			
       theObject.var2 = 'STRING2';
       theObject.var3 = 'STRING3';
   }
   
   let sampleObject = {
       // sample object for demo
       var1 : 'string0',
       var2 : 'string1',
       var3 : 'string3'
   }
   
   // the sample object is passed to the function as a parameter
   myFunction(sampleObject);
   console.log('demo of object as a function parameter')
   console.log(sampleObject);
   
   // the resultant sampleObject
   sampleObject = {
       var1: "STRING1", 
       var2: "STRING2", 
       var3: "STRING3"
   }
   ~~~

7. Objects as a return from the function // in following section check functionObject.js

8. Nested Functions

   1.  The nested (inner) function is private to its containing (outer) function
   2. The inner function can be accessed only from statements in the outer function
   3. **The inner function forms a closure**: the inner function can use the arguments and variables of the outer function
   4. while the outer function cannot use the arguments and variables of the inner function. <br><br>

   ~~~javascript
   // one inner function nested within outer function
   function outerFunction(param1,param2){
       // nested function
       function innerFuction1(param3){
               return param3*param3; // returning from the nested function
       }
       // nested inner function can be used whitin outer function
       return innerFuction1(param1)+innerFuction1(param2);
   }
   
   let val1 = outerFunction(2,2);
   console.log('value obtained from outer function : ' + val1);	// output : 8
   
   
   // multiple inner functions
   function OUTERFUNC (param1,param2){
   	// first inner function
       function INNERFUNC1(innerParam1){
           return innerParam1*innerParam1;	// return of inner function 2
       }
   	// second inner function
       function INNERFUNC2(innerParam2){
           return innerParam2*innerParam2;	// return of inner function 2
       }
   	// return of outer function
       return INNERFUNC1(param1)+INNERFUNC2(param2);
   }
   
   let val2 = OUTERFUNC(3,4);
   console.log('value obtained from outer function : ' + val2);  // output : 25
   ~~~

9. call the outer function and specify arguments for both the outer and inner function

   ~~~javascript
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
   ~~~

10. [Arrow Functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)

    1. Arrow function has shorter syntax than general function expression<br><br>

    ~~~javascript
    // syntax
    let functionName = (parameter1, parameter2,..., parameterN) => expression
    
    // example
    // arrow function example
    let multiplication = (number1, number2) => number1*number2;
    
    // calling the arrow function is same as conventional function
    let outcome = multiplication(2,3);
    console.log('outcome of arrow function : '+ outcome);
    
    // equivalent 
    let MULTIPLICATION = function(num1, num2){
        let result = num1*num2;
        return result;
    }
    
    //example arrow function without any argument or any return value
    let sampleAlert = () => alert('house is on fire');
    console.log('sample alert from arrow function');
    
    // equi. conventional function
    let SAMPLEALERT = function(){
        alert('house is on fire');
    }
    console.log('sample alert from conventional function : '+SAMPLEALERT());
    ~~~

## Function Object

1. While implementing function as a part of object literal, function is taken as object property

   1. Declaring function Object<br><br>

2. [This keyword in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

   ~~~javascript
   // A circle object with 3 data and 2 function properties
   let circle = {
       // data
       radius:0,
       planeWhereReside:'',
       location:{
           x:1,
           y:0
       },
   
       // functions
       getDiameter:function(){
           let diameter = this.radius*2;
           return diameter;
       },
       getArea:function(){
           let area = this.radius*this.radius*Math.PI;
           return area;
       }
   }
   ~~~

3. Accessing function object

   ~~~javascript
   // accessing different properties of circle object
   circle.radius  = 20;        
   circle.planeWhereReside = 'XY'
   
   // how to access the object inside object
   circle.location.x = 20;     
   circle.location.y = 15;
   
   // how to access the functions of the object
   let dia = circle.getDiameter();
   let AREA = circle.getArea();
   
   // displaying the obtained result
   console.log('diameter : '+dia);		// output :	40
   console.log('area : '+AREA);		// output : 1256.6370614359173
   ~~~

## Constructor Function [function inside function]

1. By convention a constructor function always starts with an upper-case letter

   ~~~javascript
   function Circle(rad){
       
       // data
       this.radius = rad;
       
       // function
       this.draw = function(){
           let area = this.radius*this.radius*3;
           return area;
       }
   }
   ~~~

2. An instance of the constructor function can be created

   1. We created the new object 'another' using constructor function 

   ~~~javascript
   const another = new Circle(2);
   // another is the instance of the constructor function circle
   ~~~

3. Accessing the constructor function

   ~~~javascript
   // create new instance of the Circle
   let a = new Circle(20);
   console.log('radius while creating circle : ' + a.radius);		// output : 20
   
   // changing the properties individually
   a.radius = 30;
   console.log('radius after new assignment : ' + a.radius);
   
   // invoking the function
   let A = a.draw();
   console.log('area of circle : ' + A);
   ~~~

## [Factory Function]([https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1#:~:text=A%20factory%20function%20is%20any,keyword%2C%20it's%20a%20factory%20function.](https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1#:~:text=A factory function is any,keyword%2C it's a factory function.))

1. A **factory function** is any function which is not a class or constructor that returns a (presumably new) object.

2. User do not need to use `new` keyword to create new instance of the object

3. Whereas in case of constructor function new keyword is being used to create the object instance

   ~~~javascript
   // making factory function with conventional method
   function createUser (userName, avatar){
       return{
           userName,
           avatar,
   
           setUserName:function(userName){
               this.userName = userName;
               return this;
           }
       }
   }
   
   //  accessing the factory function
   console.log('fatory function')
   console.log(createUser('jay','elephant'));
   
   // output
   {userName: "jay", avatar: "elephant", setUserName: ƒ}
   
   -------------------------------------------------------------------------------------------------
   
   // same factory function as arrow function
   function createUser = ({ userName, avatar }) => ({
     userName,
     avatar,
       
     setUserName (userName) {
       this.userName = userName;
       return this;
     }
   });
   
   // accessing the factory function
   console.log('fatory function')
   console.log(createUser({ userName: 'jay', avatar: 'tiger' }));
   
   // output
   {userName: "jay", avatar: "tiger", setUserName: ƒ}
   ~~~

## [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

1. sample Class Shape implementation

   1. class must have a constructor
   2. There can only be one special method with the name "constructor" in a class.
   3. A constructor can use the `super` keyword to call the constructor of the super class.
   4. The body of class is being executed in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

2. Simple class declaration

   ~~~javascript
   // class declaration
   class Shape {
       constructor(InputedShape, propertyOfObject) {
           this.shapeOfObject = InputedShape;
           this.propertyOfObject = property
       }
   }   
   ~~~

3. Declaring class as a class expression

   ~~~javascript
   let Rect = class {
       constructor (h, w){
           this.Rectheight = h;
           this.Rectwidth = w;
       }
   }
   
   // retriving the name of the class
   console.log(Rectangle.name);
   // output : "Rectangle"
   ~~~

4. Class Body

   1. class body resides inside the `{}` of the class
   2. class body includes methods and constructor

   ~~~javascript
   // methods
   class Rect {
   	// constructor
       constructor (h, w){
           this.Rectheight = h;
           this.Rectwidth = w;
       }
       // periphery calculation method
       calculatePeri(){
           let peri = (2*this.Rectheight) + (2*this.Rectwidth);
           return peri;
       }
       // area calculation method
       calculateArea(){
           let area = this.Rectwidth*this.Rectheight;
           return area;
       }
       
   }
   ~~~

5. performing getter and setter

   ~~~javascript
   class Rect {
       constructor (h, w){
           this.Rectheight = h;
           this.Rectwidth = w;
       }
       calculatePeri(){
           let peri = (2*this.Rectheight) + (2*this.Rectwidth);
           return peri;
       }
       calculateArea(){
           let area = this.Rectwidth*this.Rectheight;
           return area;
       }
       center (){
           let x = this.Rectheight/2;
           let y = this.Rectwidth/2
           return {
               x,
               y
           }
       }
   	// getter method to get area
       get area(){
           return this.calculateArea();
       }
   	// getter method to get periphery
       get peri(){
           return this.calculatePeri();
       }
   }
   ~~~

6. Creating the instance of the class and access the properties of that instance

   ~~~javascript
   let myRectangle = new Rect(2,3);
   
   // obtaining the peripheri from get method of shape class
   let PeriPheriOfMyRectangle = myRectangle.peri;
   console.log('Peripheri of Recatangle : ' + PeriPheriOfMyRectangle);	// output : 10
   
   // obtaining the area by directly accessing the area claculation method 
   // of class Rect
   let areaOfMyRectangle = myRectangle.calculateArea();
   console.log('area of Rectangle : ' + areaOfMyRectangle);	// output : 6
   
   // accessing other properties
   let heightOfMyRectangle = myRectangle.Rectheight;
   let widthOfMyRectangle = myRectangle.Rectwidth;
   console.log('Rectangle Height : ' + heightOfMyRectangle );	// output : 2
   console.log('Rectangle width : ' + widthOfMyRectangle);     // output : 3
   
   // accessing the returned object obtained from the method center
   let centerObject = myRectangle.center();
   console.log('x co-ordinate of center : ' + centerObject.x);
   console.log('y co-ordinate of center : ' + centerObject.y);
   console.log(centerObject);
   ~~~

7. Static methods

   ~~~javascript
   // declaring static method in class    
   static staticMethod(){
               return 'we are in static method';
       }
   
   // using static method
   let staticOutput = Rect.staticMethod();
   console.log('static output : ' + staticOutput);
   // static method will always be called on class
   // and not on the instance of class
   ~~~

8. Field declaration

   ~~~javascript
   class Rect {
   field1 = 0;				// public field 
   field2;					// public field
   
   #field2 = 0;			// private field
   #field3;				// private field
   
     constructor(height, width) {    
       this.field1 = height;
       this.field2 = width;
     }
   }
   ~~~

9. Extending the class

   ~~~javascript
   class Rectangle extends Shape{
       constructor(edge,angle,inputshape){
           // The super keyword is used to access the call functions on an object's parent 
           // now we can use the parent's method in the object created using child
           super(inputshape); 
           
           this.edge = edge;
           this.angle = angle;
       }
   
       showEdges(){
           return this.edge;
       }
   
       showAngle(){
           return this.angle;
       }
   }
   ~~~

   

   

   

   

   

   

    