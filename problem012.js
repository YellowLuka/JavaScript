function objectsDiff(a, b) {
    let tablica = [];
    for (baka in a) {
        if (!b.hasOwnProperty(baka)) {
            tablica.push(baka);
        }
    }

    for (baka in b) {
        if (!a.hasOwnProperty(baka)) {
            tablica.push(baka);
        }
    }
    return tablica;
}
