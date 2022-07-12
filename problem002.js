function stringRotate(a, b) {
    
    if (b >= 0) {
        var litery;
        var litery = a.split('');
        var i;
        var wynik;
            for (i = 0; i < b; i++)
            {
                litery.push(litery[0]);
                litery.shift();
            }
        var wynik = litery.join('');
        return wynik;
    }
    else {
        var str = "";
        return str;
    }
}