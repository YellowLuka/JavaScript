function divisible(a)
{
    for (var i = 0; i < arguments.length; i++)
    {
        if (a % arguments[i] != 0)
            return false;
         
    }

    return true;
         
}
