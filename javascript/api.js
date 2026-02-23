


export async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");


    if(!response.ok){
        throw new Error("ERROR AL CARGAR PRODUCTOS");
        }


    const products = await response.json();

    

   return products;

 

}