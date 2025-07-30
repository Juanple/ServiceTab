import { useNavigate } from "react-router-dom";
import { post } from "../services/post";

export default function WaiterSelector(){

    let waiterList = [ // Lista de todos los camareros
        {'name': 'Gonza', 'pictureURL': '../../public/gonza.avif', 'color': undefined},
        {'name': 'Cam3', 'pictureURL': '../../public/camarero1.jpg', 'color': undefined},
        {'name': 'Mauricio', 'pictureURL': '../../public/mauricio.avif', 'color': undefined},
        {'name': 'Guille', 'pictureURL': '../../public/guille.jpg', 'color': undefined},
    ]

    const navigate = useNavigate();
    async function selectWaiter(waiterName) {
        await post({'waiter': waiterName}, '/');
        navigate(`tables`);
    }

    return (
        <div className="flex container w-full flex-wrap gap-2 h-full p-2">
            {waiterList.map((waiter, index) => {

                // Estilo de boton sin foto
                if (waiter['pictureURL'] == undefined) {
                    return (<button key={index} // Definir indice unico a cada boton
                                    className="p-2 cursor-pointer bg-[var(--color)] hover:bg-[var(--color)]/60" 
                                    style={{'--color': waiter['color']/* Definir variable de color*/}}
                                    onClick={() => (selectWaiter(waiter['name']))} /* Llamar a la funcion*/> 
                                    {waiter['name']}</button>); // Definir el nombre del camarero
                } 
                else { // Estilo del boton con foto
                    return (<button 
                    onClick={() => (selectWaiter(waiter['name']))} /* Llamar a la funcion*/
                    className="relative overflow-hidden active:scale-90 hover:text cursor-pointer"> {/* Estilos */}

                        <img src={waiter['pictureURL']} className="h-20"></img>
                        <p className="absolute bottom-0 bg-[#000066]/40 w-full text-white font-bold text-sm">{waiter['name']}</p>
                    </button>)
                }
            })}
        </div>
    )
}