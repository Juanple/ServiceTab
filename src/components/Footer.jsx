import { productList } from './../services/cart.js';
import { post } from '../services/post.js';

export default function Footer() {
    
    function saveProducts(productList) {
        post(productList);
    }
    
    return (
        <button onClick={() => (saveProducts(productList))}>Enviar</button>
    )
}