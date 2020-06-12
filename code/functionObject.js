// object can hold function

let circle = {
    radius:0,
    pi : 3.14,

    location:{
        x:1,
        y:0
    },

    setRadius:function(radius){
        this.radius = radius;
    },

    setLocation:function(a,b){
        this.location.x = a;
        this.location.y = b;
    },

    getLocation:function(){
        return this.location;
    },

    getDiameter:function(){
        let diameter = this.radius*2;
        return diameter;
    },

    getArea:function(){
        let area = this.radius*this.radius*this.pi;
        return area;
    }
}

circle.setRadius(2);
circle.setLocation(1,2);
let loc = circle.getLocation();
console.log(loc);

let dia = circle.getDiameter();
console.log(dia);

let are = circle.getArea();
console.log(are);


