class Square {
    constructor(a)
    {
        this.a = a;
    }
    
     getArea = function () {
        return this.a * this.a;
     }

        getPerimeter = function () {
            return 4 * this.a;
        }
}
