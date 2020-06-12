//this class needed to be hoist to make object out of it
// this class is added separately as a script in index.html

class Shape {
    constructor(InputedShape) {
        this.shapeOfObject = InputedShape;
    }

    Method1(){
        let returnValue;
        if (this.shapeOfObject == 'circle'){
            returnValue = 'Its a '+this.shapeOfObject;
        }
        if (this.shapeOfObject == 'square'){
            returnValue = 'its a '+this.shapeOfObject;
        }
        return returnValue;
    }

    // no need of object, can use it with class directly
    // no need to create the object of the class to use this method
    // same as static method of java
    static staticMethod(){
        console.log('we are in static method');
        return 'static method';
    }

    // using the object created using Shape class in static method
    static staticMethodWithObjectAsInput(obj){
        console.log('This line is called from static method with obj as parameter: '+obj.shapeOfObject);
    }
}

