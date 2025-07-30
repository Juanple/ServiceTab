import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {

    const location = useLocation();
    let text;
    let emoji;
    const [waiter, setWaiter] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:5000/', {method: 'GET'}) // Asignar camarero al header
        .then(response => response.json())
        .then(data => {
            if (location.pathname != '/') {
                setWaiter(data['waiter']);
            } else {
                setWaiter('');
            }
        })
        .catch(error => console.log('Error en el header: ', error))
    }, [location.pathname]) // Solo se actualiza cuando se cambia de URL

    switch (location.pathname) { // Asignar texto de ubicacion al header
        case '/':
            text = 'Seleccionar camarero'
            emoji = <i className="fa-solid fa-user"></i>
            break
        case '/tables':
            text = 'Seleccionar mesa'
            emoji = <i className="fa-solid fa-chair"></i>
            break
        case '/tables/menu-general/':
            text = 'Menu General'
            emoji = <i className="fa-solid fa-newspaper"></i>
            break
        case '/tables/menu-general/tapas':
            text = 'Tapas'
            emoji = <i className="fa-solid fa-bowl-rice"></i>
            break
    };


    return (
        <div className="bg-[#CCCCFF] h-13 flex justify-between p-2">
            <div className="h-full flex flex-col justify-between">
                <p className="text-xs font-bold">{waiter}</p>
                <h1 className="text-xl font-thin">{text}</h1>
            </div>  
            <div className="h-full flex items-center text-xl">
                {emoji}
                <button><i className="fa-solid fa-ellipsis-vertical cursor-pointer"></i></button>
            </div>
        </div>
    )
}