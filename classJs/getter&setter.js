
class getterSetterExample{
    constructor(nameOfShape){
        this.shapeName = nameOfShape;
    }

    get getShapeName(){
        return this.shapeName;
    }

    set setShapeName(input){
        this.shapeName = input;
    }
}

