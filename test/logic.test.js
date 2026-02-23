import { mapProductsPrice } from "../javascript/logic.js";
import { filterProducts } from "../javascript/logic.js";


describe("mapProductsPrice", function () {
    it("deberia devolver los precios de los productos", function () {

        const products = [
            {name: "bolso", price: 100, stock: 13},
            {name: "zapatos", price: 400, stock: 3},
            {name: "camisa", price: 60, stock: 7},
            {name: "bufanda", price: 10, stock: 44}
                
        ];  
            const  productObjects = products.map((product)=> product.price);
            assert.deepEqual(mapProductsPrice(products), productObjects)
    });
});


describe("filterProducts", function () {
    it("deberia filtrar por nombre ", function () {
        const products = [
            {title: "bolso", price: 100, stock: 13},
            {title: "zapatos", price: 400, stock: 3},
            {title: "camisa", price: 60, stock: 7},
            {titlo: "bufanda", price: 10, stock: 44}
                
        ];  

        const query = "bo";
        const filtered = [ {title: "bolso", price: 100, stock: 13}]
        assert.deepEqual(filterProducts(products, query), filtered)
    })
})