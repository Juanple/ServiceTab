import { useNavigate } from "react-router-dom";

export default function WaiterSelector(){

    let waiterList = [ // Lista de todos los camareros
        {'name': 'Gonza', 'pictureURL': undefined, 'color': 'blue'},
        {'name': 'Camarero1', 'pictureURL': undefined, 'color': 'yellow'},
        {'name': 'Camarero2', 'pictureURL': undefined, 'color': 'blue'},
        {'name': 'Camarero3', 'pictureURL': undefined, 'color': 'red'},
    ]

    const navigate = useNavigate();
    function selectWaiter(waiterName) {
        navigate(`/tables/${waiterName}`);
    }

    return (
        <div className="flex container w-full flex-wrap gap-2">
            {waiterList.map((waiter, index) => {

                // Estilo de boton sin foto
                if (waiter['pictureURL'] == undefined) {
                    return (<button key={index} // Definir indice unico a cada boton
                                    className="p-2 cursor-pointer bg-[var(--color)] hover:bg-[var(--color)]/60" 
                                    style={{'--color': waiter['color']/* Definir variable de color*/}}
                                    onClick={() => (selectWaiter(waiter['name']))} /* Llamar a la funcion*/> 
                                    {waiter['name']}</button>); // Definir el nombre del camarero
                }

                // Estilo de boton con foto
                return null;
            })}
        </div>
    )
}