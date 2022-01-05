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
    createProduct(){
        
        let productHolder=document.createElement("div")
        document.body.appendChild(productHolder)
    
        let name= document.createElement("p")
        productHolder.appendChild(name)
        name.innerHTML= "Product Name: "+productName.value
    
        let price =document.createElement("p")
        productHolder.appendChild(price)
        price.innerHTML="Product Price: "+productPrice.value
    
        let servings= document.createElement("p")
        productHolder.appendChild(servings)
        servings.innerHTML="Product Servings: "+productServings.value
    
    
    }
    addProduct(){
    addButton.addEventListener("click",this.createProduct)
    }

}

let container = document.createElement("div")
container.classList.add("container")
document.body.appendChild(container)
    
let productName = document.createElement("input")
productName.type = "text"
productName.required
// productName.placeholder = "Product"
productName=productName
productName.classList.add("productName")

let productLabel = document.createElement("label")
container.appendChild(productLabel)
productLabel.innerText = "Product name"
productLabel.appendChild(productName)

let productPrice = document.createElement("input")
productPrice.type = "number"
productPrice.required
// productPrice.placeholder = "Price"
productPrice=productPrice
productPrice.classList.add("productPrice")

let priceLabel = document.createElement("label")
container.appendChild(priceLabel)
priceLabel.innerText = "Product Price"
priceLabel.appendChild(productPrice)

let productServings = document.createElement("input")
productServings.type = "number"
productServings.required
// productServings.placeholder = "productServings"
productServings.classList.add("servings")

let servingsLabel = document.createElement("label")
container.appendChild(servingsLabel)
servingsLabel.innerText = "Servings"
servingsLabel.appendChild(productServings)

let products=[]

let addButton = document.createElement("button")
container.appendChild(addButton)
addButton.innerHTML="Add Product"
addButton.classList.add("addButton")

Product.







