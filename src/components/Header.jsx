import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {

    const location = useLocation();
    let text;
    const [waiter, setWaiter] = useState('');

    fetch('http://127.0.0.1:5000/', {method: 'GET'}) // Asignar camarero al header
    .then(response => response.json())
    .then(data => {
        setWaiter(data['waiter'])
    })

    switch (location.pathname) { // Asignar texto de ubicacion al header
        case '/':
            text = 'Seleccionar camarero'
            break
        case '/tables':
            text = 'Seleccionar mesa'
            break
        case '/tables/menu-general/':
            text = 'Menu General'
            break
        case '/tables/menu-general/tapas':
            text = 'Tapas'
            break
    };


    return (
        <div className="bg-gray-200 h-18 flex justify-between p-2">
            <div className="h-full flex flex-col justify-between">
                <p className="text-s">{waiter}</p>
                <h1 className="text-xl">{text}</h1>
            </div>
            <p className="flex items-center">EMOJI</p>{console.log('Header actualizado: ', waiter)}
        </div>
    )
}