function deepCopy(a)
{

    let tabliczka = [];
    if (Array.isArray(a))
    {
        for (let i = 0; i < a.length; i++) {
            tabliczka[i] = deepCopy(a[i]);
        }
        return tabliczka;
    }
        return a;
   
}