import { post } from "../services/post"
import OrderSummary from '../components/OrderSummary'
import { useState } from "react"

export default function Tapas() {
    
    const tapasList = [
        {'name': 'Aceitunas', 'price': 5, 'imageURL': undefined, 'color': '#ff8969', 'target': 'aceitunas'},
        {'name': 'Pan Cristal', 'price': 7, 'imageURL': undefined, 'color': '#ff8969', 'target': 'pan'},
        {'name': 'Coca de queso', 'price': 15, 'imageURL': undefined, 'color': '#ff8969', 'target': 'coca'},
        {'name': 'Figat', 'price': 18, 'imageURL': undefined, 'color': '#FFD700', 'target': 'figat'},
        {'name': 'Croquetas', 'price': 14, 'imageURL': undefined, 'color': '#FFD700', 'target': 'croquetas'},
        {'name': 'Jamon Ibérico', 'price': 29, 'imageURL': undefined, 'color': '#FFD700', 'target': 'jamon'}
    ]

    const [orderKey, setOrderKey] = useState(0); // Esto sirve para recargar el orderSummary mediante su key

    return (
        <div>
            <OrderSummary key={orderKey}></OrderSummary>
            <div className="flex flex-wrap gap-2">
            {tapasList.map((product, index) => {
                if (product['imageURL'] == undefined) { // Si no tiene imagen asignada
                    return <button
                    onClick={() => {post(product, '/tables/menu-general/').then(() => setOrderKey(orderKey + 1))}} // Llamar a la funcion
                    key={index} // Indice unico
                    className="bg-[var(--color)] p-2 cursor-pointer" // Estilos
                    style={{'--color': product['color']}} // Variable de color
                    >{product['name']}</button>
                }
                else { // Si tiene imagen asignada
                    return null
                }
            })}
            </div>
        </div>
    )
}