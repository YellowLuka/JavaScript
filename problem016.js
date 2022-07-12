function checkUsersValid(goodUsers)
{
    return function allUsersValid(submittedUsers)
    {
        return submittedUsers.every(function (check)
        {
            if (goodUsers.some(function (validUsers) {
                return check.id == validUsers.id;
            }))
                return check;
                
        })
        

    };
}