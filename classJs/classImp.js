


myShapeObject = new Shape('circle');
// console.log(myShapeObject);



console.log(myShapeObject.Method1());

// calling a static method which is situated in shape.js
Shape.staticMethod();
//console.log(Shape.staticMethod());
//myShapeObject.staticMethod(); // this will give an error

// providing object as a parameter to the static method
Shape.staticMethodWithObjectAsInput(myShapeObject);

myRectangle = new Rectangle(4,90,'circle');
let edges = myRectangle.showEdges();
let angle = myRectangle.showAngle();

console.log('edges : ' + edges);
console.log('angle : ' + angle);

// derived class can access the parent's property and methods
let outputOfMethod1FromInheritedObject = myRectangle.Method1();
console.log(outputOfMethod1FromInheritedObject);


let getterSetterSample = new getterSetterExample('triangle');
// set the name using setter method
getterSetterSample.setShapeName = 'quadrilateral';
// get the name using getter method
console.log(getterSetterSample.getShapeName);
