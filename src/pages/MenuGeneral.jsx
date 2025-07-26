import { useNavigate, useParams } from "react-router-dom"

export default function MenuGeneral(){
    
    const menuGeneralList = [
        {'name': 'Tapas', 'imageURL': undefined, 'color': 'red', 'target': 'tapas'},
        {'name': 'Entrantes', 'imageURL': undefined, 'color': 'green', 'target': 'entrantes'},
        {'name': 'Parrillas', 'imageURL': undefined, 'color': 'yellow', 'target': 'parrilla'},
        {'name': 'Arroces', 'imageURL': undefined, 'color': 'gray', 'target': 'arroces'},
        {'name': 'Especialidades', 'imageURL': undefined, 'color': 'blue', 'target': 'especialidades'},
        {'name': 'Vegetales', 'imageURL': undefined, 'color': 'green', 'target': 'vegetales'},
        {'name': 'Bebidas', 'imageURL': undefined, 'color': 'blue', 'target': 'bebidas'}
    ]

    const navigate = useNavigate();
    function selectMenuGeneralButton(targetSection) {
        navigate(targetSection);
    }

    return (
        <div className="flex flex-wrap w-full gap-2">
            {menuGeneralList.map((section, index) => {

                // Estilo de boton sin foto
                if (section['imageURL'] == undefined) {
                    return <button
                onClick={() => (selectMenuGeneralButton(section['target']))} // Llamar a la funcion
                key={index} // Indice diferente a cada uno
                className="bg-[var(--color)] p-2 cursor-pointer hover:bg-[var(--color)]/60" // Estilos
                style={{'--color': section['color']}} // Variable de color del bg
                >{section['name']}</button>; // Nombre del boton
                }

                //Estilo de boton con foto
                else {
                    return null;
                }
            })}
        </div>
    )
}