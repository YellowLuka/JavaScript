function deepFindAndCount(a, b)
{
    var wynik = 0;
    if (Array.isArray(a)) {
        for (let i = 0; i < a.length; i++) {
            wynik += deepFindAndCount(a[i], b);
        }

    }
    else
    {
        if (a == b)
            return 1;
        else 
            return 0;
        
    }
       
    return wynik;

}
