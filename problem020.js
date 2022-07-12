function compose() {
    var arra = [];
    for (var a = arguments.length - 1; a >= 0; a--)
        arra.push(arguments[a]);
    return function (x) {
        if (arra.length == 0)
            return x;
        var sum = arra[0](x);
        for (var i = 1; i < arra.length; i++) {
            sum = arra[i](sum);
        }
        return sum;
    }
}