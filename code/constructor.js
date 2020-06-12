// factory function
function createCircle(radius){
    return{
        radius:radius,
        draw:function(){
            let area = radius*radius*3;
            return area;
        }
    }
}

console.log('output of factory fn : ');
console.log( createCircle(2).draw());


// constructor function

function Circle(radius){
    this.radius = radius;
    this.area;
    this.draw = function(){
        this.area = this.radius*this.radius*3
    }
}

const another = new Circle(2);
//console.log(another);
let a = another.draw();
console.log('area obtained by constructor fn : '+another.area);

