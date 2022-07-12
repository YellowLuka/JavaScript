function Spy(target, method)
{
    var counte = {
        count : 0
    }
    func = target[method];
    target[method] = function () {
        counte.count++;
        func(arguments);
    };
    return counte;
}