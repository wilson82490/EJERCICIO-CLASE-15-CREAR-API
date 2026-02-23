

const button = document.querySelector("#button");
const lista = document.querySelector("#productos");
const search= document.querySelector("#search")



/* button.addEventListener("click", async()=>{
    lista.textContent = "Cargando...";

    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const products = await response.json();

    console.log(products)
    
    lista.textContent = ""


    products.forEach(product => {
        const li = document.createElement("li")
        li.textContent = product.title;
        
        lista.appendChild(li);

        
    });
}) */



let productState =[];
    

import { getProducts } from "./api.js";
import { renderProducts } from "./dom.js";
import { filterProducts } from "./logic.js";
//import { mapProductsPrice } from "./logic.js";



button.addEventListener("click", async () => {

    try {lista.textContent = "Cargando...";

            productState = await getProducts();


            renderProducts(productState, lista);

           //const price = mapProductsPrice(products);
            //console.log(price, products )
        
    } catch (error) {
        console.log(error)
        lista.textContent = error.message
    };
    

});

search.addEventListener("keyup", (event)=>{
    //console.log(event.target.value)
    const filtered = filterProducts(productState, event.target.value);
    renderProducts(filtered, lista);

     }
)

