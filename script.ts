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
productLabel.innerText = "Product name: "
productLabel.appendChild(productName)

let productPrice = document.createElement("input")
productPrice.type = "number"
productPrice.required
// productPrice.placeholder = "Price"
productPrice.classList.add("productPrice")

let priceLabel = document.createElement("label")
container.appendChild(priceLabel)
priceLabel.innerText = "Product Price: "
priceLabel.appendChild(productPrice)

let productServings = document.createElement("input")
productServings.type = "number"
productServings.required
// productServings.placeholder = "Servings"
productServings.classList.add("servings")

let servingsLabel = document.createElement("label")
container.appendChild(servingsLabel)
servingsLabel.innerText = "Servings: "
servingsLabel.appendChild(productServings)

let addButton = document.createElement("button")
container.appendChild(addButton)
addButton.innerHTML="Add Product"
addButton.classList.add("addButton")

// let product=document.createElement("input")
// product.type="text"

// let productNameLabel=document.createElement("label")
// container.appendChild(productNameLabel)
// productNameLabel.innerText="Product: "
// productNameLabel.appendChild(product)

let days=document.createElement("input")
days.type="number"

let daysLabel=document.createElement("label")
container.appendChild(daysLabel)
daysLabel.innerText="Days: "
daysLabel.appendChild(days)


let consumption=document.createElement("input")
consumption.type="number"

let consumptionLabel=document.createElement("label")
container.appendChild(consumptionLabel)
consumptionLabel.innerText="Consumption: "
consumptionLabel.appendChild(consumption)

let calculate = document.createElement("button")
container.appendChild(calculate)
calculate.innerHTML="Calculate Price"
calculate.classList.add("addButton")

let products:Product[]=[]



function createProduct(){
        
    products.push(new Product(productName.value,parseInt(productPrice.value),parseInt(productServings.value)))

    localStorage.setItem("products", JSON.stringify(products))
    
}

addButton.addEventListener("click",createProduct)
calculate.addEventListener("click",calculatePrice)

let data = localStorage.getItem("products") //get into a varaibel to deal with the 'does not exist' scenario
    if (data) {
        products = JSON.parse(data)
    }

    console.log(data)
    let pricePerServing= 0
    
function createCards(){

    for(let i=0; i<products.length; i++){
    let productHolder=document.createElement("div")
    document.body.appendChild(productHolder)
    productHolder.classList.add("cards")

    let name= document.createElement("p")
    productHolder.appendChild(name)
    name.innerHTML= "Product Name: "+products[i].productName

    let price =document.createElement("p")
    productHolder.appendChild(price)
    price.innerHTML="Product Price: "+products[i].productPrice

    let servings= document.createElement("p")
    productHolder.appendChild(servings)
    servings.innerHTML="Product Servings: "+products[i].servings
    
    let pricePerConsumption=document.createElement("h4")
    productHolder.appendChild(pricePerConsumption)
    pricePerConsumption.innerHTML="Price Per Consumption: "+products[i].productPrice/products[i].servings
    
    pricePerServing+=products[i].productPrice/products[i].servings
    
    }
}
pricePerServing=pricePerServing/products.length
function calculatePrice(){

    let p=document.createElement("p")
    document.body.appendChild(p)
    p.innerHTML=(pricePerServing*parseInt(consumption.value)*parseInt(days.value)).toString()
}


createCards()

console.log(pricePerServing)

// localStorage.clear()



