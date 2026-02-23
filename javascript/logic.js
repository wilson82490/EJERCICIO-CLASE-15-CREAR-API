


  export function mapProductsPrice(products) {
    return products.map((product)=> product.price);
    
} 


export function filterProducts(products, query) {
    /* const filterProducts = products.filter(product => 
        product.name.toLowercase().includes(query.toLowercase())
);

return filterProducts; */


 return products.filter(product => 
  product.title && product.title.toLowerCase().includes(query.toLowerCase()) 
);


    
}