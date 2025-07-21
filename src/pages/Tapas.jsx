import { cart } from '../services/cart'

export default function Tapas() {
    
    const tapasList = [
        {'name': 'Aceitunas', 'price': 5, 'imageURL': undefined, 'color': 'green', 'target': 'aceitunas'},
        {'name': 'Pan Cristal', 'price': 7, 'imageURL': undefined, 'color': 'red', 'target': 'pan'},
        {'name': 'Coca de queso', 'price': 15, 'imageURL': undefined, 'color': 'yellow', 'target': 'coca'},
        {'name': 'Figat', 'price': 18, 'imageURL': undefined, 'color': 'red', 'target': 'figat'},
        {'name': 'Croquetas', 'price': 14, 'imageURL': undefined, 'color': 'blue', 'target': 'croquetas'},
        {'name': 'Jamon Ibérico', 'price': 29, 'imageURL': undefined, 'color': 'blue', 'target': 'jamon'}
    ]

    return (
        <div className="flex flex-wrap gap-2">
            {tapasList.map((product, index) => {
                if (product['imageURL'] == undefined) { // Si no tiene imagen asignada
                    return <button
                    onClick={() => (cart(product))} // Llamar a la funcion
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
    )
}