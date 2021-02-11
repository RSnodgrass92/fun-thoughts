const usersArr= []

class User
{
    //sizesAndPrice array goes sizeName, width(in), length(in), price
    constructor(email, password, firstName, lastName, phoneNum, address1, address2, city, state, zip,   itemsInCart=[],itemsOnWishList=[])
    {
      
       this.email= email
       this.password=password
       this.firstName= firstName
       this.lastName= lastName
       this.phoneNum= phoneNum
       this.address1= address1
       this.address2= address2
       this.city= city
       this.state= state
       this.zip= zip
       this.itemsInCart= itemsInCart
       this.itemsOnWishList= itemsOnWishList
    }

    add()
    {
        usersArr.push(this)
        return this
    }

}

new User("email","password","Joe","Smith", "(555)555-5555", "123 Main Street", "Apartment F", "New York City", "New York", "80678",[{
    modelNum:15,
    image:"/static/media/shirt15.f1f7c13c.jpg",
    description:"Angry cat on a gray tee",
    price:10,
    qty:"3",
    selectedSize:"Large",
    }]).add()
new User("test","testing","Test","Testington").add()

export default usersArr