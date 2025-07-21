export let productList = []; // Lista temporal de productos

export function cart(product) {
    productList.push(product);
    console.log('Producto añadido a la comanda');
}
    
