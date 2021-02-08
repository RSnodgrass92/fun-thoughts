const usersArr= []

class User
{
    //sizesAndPrice array goes sizeName, width(in), length(in), price
    constructor(email, password, name="",itemsInCart=[],itemsOnWishList=[])
    {
      
       this.email= email
       this.password=password
       this.name= name
       this.itemsInCart= itemsInCart
       this.itemsOnWishList= itemsOnWishList
    }

    add()
    {
        usersArr.push(this)
        return this
    }

}

new User("email","password","joe",[{
    modelNum:15,
    image:"/static/media/shirt15.f1f7c13c.jpg",
    description:"Angry cat on a gray tee",
    price:10,
    qty:"3",
    selectedSize:"Large",
    }]).add()
new User("test","testing").add()

export default usersArr