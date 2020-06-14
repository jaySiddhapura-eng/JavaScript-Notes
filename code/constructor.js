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

// create the useer factory
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

console.log('fatory function')
console.log(createUser('jay','elephant'));





// constructor function

function Circle(radius){
    this.radius = radius;
    
    this.draw = function(){
        let area = this.radius*this.radius*3;
        return area;
    }
}



// accessing the constructor function
// setting the radius
let a = new Circle(20);
console.log('radius while creating circle : ' + a.radius);


a.radius = 30;
console.log('radius after new assignment : ' + a.radius);
let A = a.draw();
console.log('area of circle : ' + A);


