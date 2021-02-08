const usersArr= []

class User
{
    //sizesAndPrice array goes sizeName, width(in), length(in), price
    constructor(email, password, name="billy")
    {
      
       this.email= email
       this.password=password
       this.name= name
    }

    add()
    {
        usersArr.push(this)
        return this
    }

}

new User("email","password","joe").add()
new User("test","testing").add()

export default usersArr