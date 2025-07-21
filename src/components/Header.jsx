import { useLocation } from "react-router-dom"

export default function Header() {

    const location = useLocation();
    let urlList = location.pathname.split('/'); // ["", "tables", "Gonza", ...]

    let waiter;
    if (urlList.length >= 3) { // Sacar el camarero de la URL
        waiter = `Comandero: ${urlList[2]}`;
    } else {
        waiter = '';
    }
    
    let text;
    let actualSection = urlList[urlList.length - 2]; // Seccion de la URL actual
    switch (actualSection) {
        case '':
            text = 'Seleccionar camarero'
            break
        case 'tables':
            text = 'Seleccionar mesa'
            break
        case 'menu-general':
            text = 'Menu General'
            break
    };


    return (
        <div className="bg-gray-200 h-18 flex justify-between p-2">
            <div className="h-full flex flex-col justify-between">
                <p className="text-s">{waiter}</p>
                <h1 className="text-xl">{text}</h1>
            </div>
            <p className="flex items-center">EMOJI</p>
        </div>
    )
}