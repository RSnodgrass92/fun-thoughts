const usersArr= []

class User
{
    //sizesAndPrice array goes sizeName, width(in), length(in), price
    constructor(email, password, firstName, lastName, phoneNum, address1, address2, city, state, zip, itemsInCart=[],itemsOnWishList=[], orderHist=[])
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
       this.orderHist= orderHist
    }

    add()
    {
        usersArr.push(this)
        return this
    }

}

new User("example@email.com","password","Joe","Smith", "(555)555-5555", "123 Main Street", "Apartment F", "New York", "NY", "80678",[{
    modelNum:15,
    image:"/static/media/shirt15.f1f7c13c.jpg",
    description:"Angry cat on a gray tee",
    price:10,
    qty:"3",
    selectedSize:"Large",
    }], undefined, 
    
    [{
        
        orderDate: String(new Date()),
        orderRefNum:830206, 
        orderItems:
        [
            {
            modelNum:15,
            image:"/static/media/shirt15.f1f7c13c.jpg",
            description:"Angry cat on a gray tee",
            price:10,
            tags:["fe","h","w"],
            altTxt:"alt text goes here",
            sizesAndPrice:
            [
                ["Small","27.8","18.3",9],
                ["Medium","28.7","20.3",9],
                ["Large","29.7","22",10],
                ["XL","30.7","23.6",10],
                ["XXL","31.5","26",10],
                ["3XL","32.3","28.1",12],
                ["4XL","33.5","30.1",12],
                ["5XL","34.4","32.1",14]   ], 
            qty:"5",
            selectedSize:"XXL",
            }, 
            
            {
            
            modelNum:13,
            image:"/static/media/shirt13.c265f8d6.jpg",
            description:"Kitten wrapped up in an american flag on a blue tee",
            price:9,
            tags:["fe","h","w"],
            altTxt:"alt text goes here",
            sizesAndPrice:
            [
                ["Small","27.8","18.3",9],
                ["Medium","28.7","20.3",9],
                ["Large","29.7","22",10],
                ["XL","30.7","23.6",10],
                ["XXL","31.5","26",10],
                ["3XL","32.3","28.1",12],
                ["4XL","33.5","30.1",12],
                ["5XL","34.4","32.1",14]   ], 
            qty:"2",
            selectedSize:"Medium",
            }
        ]
        
    }, 

    {
        
        orderDate: "Wed Feb 3 2021 09:34:43 GMT-0700 (Mountain Standard Time)",
        orderRefNum: 729365, 
        orderItems:
        [
            {
            modelNum:17,
            image:"/static/media/shirt17.b381ea79.jpg",
            description:"Brown and white horse on a gray tee",
            price:10,
            tags:["fe","bs","h","w"],
            altTxt:"alt text goes here",
            sizesAndPrice:
            [
                ["Small","27.8","18.3",9],
                ["Medium","28.7","20.3",9],
                ["Large","29.7","22",10],
                ["XL","30.7","23.6",10],
                ["XXL","31.5","26",10],
                ["3XL","32.3","28.1",12],
                ["4XL","33.5","30.1",12],
                ["5XL","34.4","32.1",14]   ], 
            qty:"1",
            selectedSize:"Small",
            } 
           
        ]
        
    }

] 
   
    ).add()
new User("test","testing","Test","Testington").add()

export default usersArr