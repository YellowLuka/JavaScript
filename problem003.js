function isLeapYear(a)
{
    var wynik;

    if (a % 100 == 0) {
        if (a % 400 == 0)
            wynik = true;

        else
            wynik = false;
    }
    else if (a % 4 == 0)
        wynik = true;
    else
        wynik = false;
    return wynik;

}