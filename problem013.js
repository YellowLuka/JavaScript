function parametricSort(a, b)
{
    switch (b)
    {
        case 'asc':
           return a.sort();

        case 'desc':
            return a.sort().reverse();

        default:
            return false;
    }
    
}