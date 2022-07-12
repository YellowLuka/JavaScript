var Vectors = {
    sum(a, b)
    {
        if (a.length == b.length) {
            for (var i = 0; i < a.length; i++)
                a[i] += b[i];
            return a;
        }
        
        else
        return false;
    },
    mulByScalar(a, b)
    {

        if (typeof b === 'number') {
            for (var i = 0; i < a.length; i++)
            a[i] *= b;
            return a;
        }
        else
            return false;
    }
}