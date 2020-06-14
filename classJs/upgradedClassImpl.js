let myRectangle = new Rect(2,3);

// obtaining the peripheri from get method of shape class
let PeriPheriOfMyRectangle = myRectangle.peri;
console.log('Peripheri of Recatangle : ' + PeriPheriOfMyRectangle);

// obtaining the area by directly accessing the area claculation method 
// of class Rect
let areaOfMyRectangle = myRectangle.calculateArea();
console.log('area of Rectangle : ' + areaOfMyRectangle);

// accessing other properties
let heightOfMyRectangle = myRectangle.Rectheight;
let widthOfMyRectangle = myRectangle.Rectwidth;
console.log('Rectangle Height : ' + heightOfMyRectangle );
console.log('Rectangle width : ' + widthOfMyRectangle);

// wrong way of accessing the static method
//myRectangle.center();   // this will give the error

// correct way of accessing the static method
let centerObject = myRectangle.center();
console.log('x co-ordinate of center : ' + centerObject.x);
console.log('y co-ordinate of center : ' + centerObject.y);
console.log(centerObject);

// wrong way of using static method
//myRectangle.staticMethod();

let staticOutput = Rect.staticMethod();
console.log('static output : ' + staticOutput);