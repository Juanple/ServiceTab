import { productList } from './../services/cart.js';
import { post } from '../services/post.js';

export default function Footer() {
    
    function saveProducts(productList) {
        post(productList);
    }
    
    return (
        <div className='h-10 bg-gray-200'>
            <button onClick={() => (saveProducts(productList))}>Enviar</button>
        </div>
    )
}