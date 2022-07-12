var Stack =
{
    arr: [],
    push(a, b = 1) {
        for (var i = 0; b - 1 > i; i++) {
            this.arr.push(null);
        }
        this.arr.push(a);


    },
    pop(a = 1) {
        for (var j = 1; j < a; j++)
            this.arr.pop();
        return this.arr.pop();



    }
}
