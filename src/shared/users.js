const usersArr= []

class User
{
    //sizesAndPrice array goes sizeName, width(in), length(in), price
    constructor(email, password)
    {
      
       this.email= email
       this.password=password
    }

    add()
    {
        usersArr.push(this)
        return this
    }

}

new User("email","password").add()
new User("test","testing").add()

export default usersArr