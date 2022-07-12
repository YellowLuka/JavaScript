function findMax(a)
{
    var NajLicz = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < arguments.length; i++)
    {
        if (NajLicz < arguments[i])
        {
            NajLicz = arguments[i];

        }
    }
    return NajLicz;
}