function maybe(a, b, c)
{
    if (a(c) == true)
        return b(c);
    else
        return c;
}