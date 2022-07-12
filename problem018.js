function reduce(arr, fn, initial)
{
    return (function recur(i, curr) {
        if (i >= 0)
            return fn(recur(i - 1, curr), arr[i], i, arr);
        else
            return initial;
    })
        (arr.length - 1, initial);
}