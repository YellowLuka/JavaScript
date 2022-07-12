function carry(a)
{
    var tablica = [];
    var warunek = a.length;
    var test = function (x)
    {
        if (warunek == 1) {
            tablica.push(x);
            return a.apply(null, tablica);
        }
        else
        {
            tablica.push(x);
            warunek--;
            return test;
        }
    }
    return test;
}