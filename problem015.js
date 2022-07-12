function getShortMessages(messages)
{
    var filtr = messages.filter(str => str.message.length <= 50);
    var wynik = filtr.map(str => str.message);

    return wynik;
}
