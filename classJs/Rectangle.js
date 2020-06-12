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


