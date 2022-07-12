function triangleArea(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        if (a + b > c && b + c > a && a + c > b) {
            var p = (a + b + c) / 2;
            var pole1 = p * (p - a) * (p - b) * (p - c);
            var pole2 = Math.sqrt(pole1);
            var wynik = Math.round(pole2 * 100) / 100;
            return wynik;
        } else
            return -1;
    }
    else {
        return -1;
    }

}
