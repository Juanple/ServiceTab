import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { post } from '../services/post.js';

export default function TablesSelector(){
        
    const rangeOne = [231,232,233,234,235,236,237,238,239,240,241,242,243,244,245];
    const rangeTwo = [301,302,303,304,305,306,307,308,309,310,311,312,313,300];
    const rangeThree = [314,315,316,317,318,319,320,321,323,324,330,340,350];
    let rangeNumber;

    const [range, setRange] = useState(rangeOne); // UseState de los range
    const [selectedRange, setSelectedRange] = useState(1); // UseState de estilos

    if (range[0] == rangeOne[0]) {
        rangeNumber = 1;
    } else if (range[0] == rangeTwo[0]) {
        rangeNumber = 2;
    } else if (range[0] == rangeThree[0]) {
        rangeNumber = 3;
    }

    const navigate = useNavigate();
    async function selectTable(table) { // Funcion para seleccionar la mesa
        await post({'table': table, 'range': rangeNumber}, '/tables');
        navigate('menu-general/');
    }

    return (
        <div className="flex flex-col container">
            <div className="flex flex-row w-full gap-2">

                <button className={`p-2 relative overflow-hidden after:content-[''] after:w-0 after:h-1 after:bg-[#E5E5FF] after:absolute after:bottom-0 after:left-0
                ${selectedRange === 1 ? 'after:w-full' : 'after:w-0'}`} // Si el boton esta seleccionado hace el efecto de slash
                onClick={() => {setRange(rangeOne); setSelectedRange(1);}}>Rango 1</button>

                <button className={`p-2 relative overflow-hidden after:content-[''] after:w-0 after:h-1 after:bg-[#E5E5FF] after:absolute after:bottom-0 after:left-0
                ${selectedRange === 2 ? 'after:w-full' : 'after:w-0'}`} // Si el boton esta seleccionado hace el efecto de slash
                onClick={() => {setRange(rangeTwo); setSelectedRange(2);}}>Rango 2</button>

                <button className={`p-2 relative overflow-hidden after:content-[''] after:w-0 after:h-1 after:bg-[#E5E5FF] after:absolute after:bottom-0 after:left-0
                ${selectedRange === 3 ? 'after:w-full' : 'after:w-0'}`} // Si el boton esta seleccionado hace el efecto de slash
                onClick={() => {setRange(rangeThree); setSelectedRange(3);}}>Rango 3</button>

            </div>
            <div className="flex gap-1 flex-wrap container p-2">
                {range.map((table, index) => (
                    <button key={index} className="bg-[#9999FF] text-lg p-2" onClick={() => (selectTable(table))}>{table}</button>
                ))}
            </div>
        </div>
    )
}