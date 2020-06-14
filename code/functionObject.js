// object can hold function

let circle = {
    radius:0,
    planeWhereReside:'',

    location:{
        x:1,
        y:0
    },

    getDiameter:function(){
        let diameter = this.radius*2;
        return diameter;
    },

    getArea:function(){
        let area = this.radius*this.radius*Math.PI;
        return area;
    }
}

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
console.log('diameter : '+dia);
console.log('area : '+AREA);




