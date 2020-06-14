class Rect {

    field1 = 0;
    field2;

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

    get area(){
        return this.calculateArea();
    }

    get peri(){
        return this.calculatePeri();
    }

    center (){
        let x = this.Rectheight/2;
        let y = this.Rectwidth/2
        return {
            x,
            y
        }
    }

    static staticMethod(){
            return 'we are in static method';
    }

}