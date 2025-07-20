import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react";

export default function TablesSelector(){
        
    const rangeOne = [231,232,233,234,235,236,237,238,239,240,241,242,243,244,245];
    const rangeTwo = [301,302,303,304,305,306,307,308,309,310,311,312,313,300];
    const rangeThree = [314,315,316,317,318,319,320,321,323,324,330,340,350];
    
    const [range, setRange] = useState(rangeOne); // UseState de los range

    const navigate = useNavigate();
    function selectTable(table) { // Funcion para seleccionar la mesa
        navigate(`menu-general/${table}`)
    }

    return (
        <div className="flex flex-col container">
            <div>
                <button className="bg-gray-300 p-2" onClick={() => {setRange(rangeOne)}}>Rango 1</button>
                <button className="bg-gray-300 p-2" onClick={() => {setRange(rangeTwo)}}>Rango 2</button>
                <button className="bg-gray-300 p-2" onClick={() => {setRange(rangeThree)}}>Rango 3</button>                
            </div>
            <div className="flex gap-1 flex-wrap container">
                {range.map((table) => (
                    <button className="bg-blue-200" onClick={() => (selectTable(table))}>{table}</button>
                ))}
            </div>
        </div>
    )
}