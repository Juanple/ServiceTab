import { useNavigate } from "react-router-dom";
import { post } from "../services/post";

export default function WaiterSelector(){

    let waiterList = [ // Lista de todos los camareros
        {'name': 'Gonza', 'pictureURL': '../../gonza.avif', 'color': undefined},
        {'name': 'Cam3', 'pictureURL': '../../camarero1.jpg', 'color': undefined},
        {'name': 'Mauricio', 'pictureURL': '../../mauricio.avif', 'color': undefined},
        {'name': 'Guille', 'pictureURL': '../../guille.jpg', 'color': undefined},
    ]

    const navigate = useNavigate();
    async function selectWaiter(waiterName) {
        await post({'waiter': waiterName}, '/');
        navigate(`tables`);
    }

    return (
        <div className="flex-col flex">
            <div className="flex container flex-wrap flex-grow gap-2 p-2">
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
                        key={index}
                        onClick={() => (selectWaiter(waiter['name']))} /* Llamar a la funcion*/
                        className="relative overflow-hidden active:scale-90 hover:text cursor-pointer"> {/* Estilos */}

                            <img src={waiter['pictureURL']} className="h-20"></img>
                            <p className="absolute bottom-0 bg-[#000066]/40 w-full text-white font-bold text-sm">{waiter['name']}</p>
                        </button>)
                    }
                })}
            </div>

            {/* Footer */}
            <footer className="flex bg-gray-200 p-1 border-[1px] border-gray-300 fixed w-full bottom-0 gap-1">
                <button className="p-2 bg-white border-[1px] border-gray-300 cursor-pointer">
                    <i className="fa-solid fa-gear text-[#03325E] text-[1.5rem]"></i>
                </button>

                <button className="p-2 bg-white border-[1px] border-gray-300 cursor-pointer">
                    <i className="fa-solid fa-keyboard text-[#03325E] text-[1.5rem]"></i>
                </button>
            </footer>
        </div>
    )
}