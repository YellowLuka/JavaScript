function strangeSum(a, b)
{
    var wynik;
    if (Number.isInteger(a) && Number.isInteger(b)) {
        if (a == b)
        {
            wynik = (a + b) * 3;
        }
        else
        {
            wynik = a + b;
        }
    }

    else
    {
        wynik = null;
    }

    return wynik;
}