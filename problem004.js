function getTotalNumberOfNewYaersEveSundays(a, b)
{
    var lata = b - a;
    var i;
    var wynik = 0;
    for (i = 0; i <= lata; i++)
    {
        var test = new Date(a, 0, 1);
        if (test.getDay() == 0)
            wynik += 1;
        a++;
    }
    return wynik;
}