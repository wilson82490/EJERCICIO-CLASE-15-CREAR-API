


/* export function renderProducts(products, lista) {
       lista.textContent = ""


    products.forEach(product => {
        const li = document.createElement("li");
        
        li.textContent = `${product.title} `;
        lista.appendChild(li);
    });
} */


export function renderProducts(products, container) {
       container.textContent = ""


    products.forEach(product => {
        const li = document.createElement("li")
        li.textContent = product.title;
        
        container.appendChild(li);

        
    });
    
}