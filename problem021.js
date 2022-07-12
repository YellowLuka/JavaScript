function reverse(a)
{
    return function () {
        return a.apply(null, Array.from(arguments).reverse());
    }
}