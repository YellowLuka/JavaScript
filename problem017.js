function countWords(inputWords)
{
    const licz = inputWords.reduce((Nazwy, nazwa)=> {
        if (nazwa in Nazwy)
            Nazwy[nazwa]++;
        else
            Nazwy[nazwa] = 1;
        return Nazwy;
    }, {});
    return licz;
}