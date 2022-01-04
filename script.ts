"use strict"
class Product{
    productName : string = ""
    productPrice : number = 0
    servings : number = 0


    constructor(productName:string,productPrice:number,servings:number){
        this.productName=productName
        this.productPrice=productPrice
        this.servings=servings
    }


    createForm(){let productName = document.createElement("input")
    productName.type = "text"
    productName.required
    // productName.placeholder = "Product"
    productName.value=this.productName
    productName.classList.add("productName")
    
    let productLabel = document.createElement("label")
    container.appendChild(productLabel)
    productLabel.innerText = "Product name"
    productLabel.appendChild(productName)
    
    let productPrice = document.createElement("input")
    productPrice.type = "number"
    productPrice.required
    // productPrice.placeholder = "Price"
    productPrice.value=this.productPrice.toString()
    productPrice.classList.add("productPrice")
    
    let priceLabel = document.createElement("label")
    container.appendChild(priceLabel)
    priceLabel.innerText = "Product Price"
    priceLabel.appendChild(productPrice)
    
    let servings = document.createElement("input")
    servings.type = "number"
    servings.required
    // servings.placeholder = "Servings"
    servings.value=this.servings.toString()
    servings.classList.add("servings")
    
    let servingsLabel = document.createElement("label")
    container.appendChild(servingsLabel)
    servingsLabel.innerText = "Servings"
    servingsLabel.appendChild(servings)

    }
}

let container = document.createElement("div")
container.classList.add("container")
document.body.appendChild(container)

let products=[]

products.push(new Product("Coffee",500,20))
products.push(new Product("Tea", 100,10))
products.push(new Product("Milk",50,5))

for(let i=0; i<products.length; i++){
    products[i].createForm()
}







