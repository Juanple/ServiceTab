import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CloseTable() {

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    function onSubmitForm(event) {
        event.preventDefault();
        const tableNumber = (event.target.tableNumber.value);

        fetch(`http://127.0.0.1:5000/tables/${tableNumber}`, 
            {
                method: 'DELETE'

            })
        .then(response => response.json())
        .then(data => {
            setMessage(data['response']);
        })
        .catch(err => {
            setMessage('Asegurate de escribir el número de mesa correctamente');
        })
    }

    return (
        <div className="flex flex-col items-center h-[100%] gap-10">
            <p className="p-2 text-center text-gray-400">Asegurate de haber cobrado la mesa antes de cerrarla</p>
            <form onSubmit={onSubmitForm} className="flex flex-col gap-2">
                <input type="text" name="tableNumber" required className="border-[1px] rounded-[5px] p-1 text-[1.2rem] "></input>
                <button type="submit" className="bg-[#E5E5FF] p-2 border-dotted transition duration-300 border-[1px] shadow-sm hover:bg-[#000066] hover:text-white hover:border-none hover:shadow-none"
                >Cerrar mesa</button>
            </form>
            <p className="p-2 text-center text-gray-600">{message}</p>

            {/* Footer */}
            <footer className="flex gap-1 bg-gray-200 p-1 border-[1px] border-gray-300 fixed w-full bottom-0 justify-between">
                <div className="flex gap-1">
                    <button className="p-2 bg-white border-[1px] border-gray-300 cursor-pointer">
                        <i className="fa-solid fa-rotate text-[#03325E] text-[1.5rem]"></i>
                    </button>

                    <button 
                    onClick={() => (navigate('/tables/close-table'))}
                    className="p-2 bg-white border-[1px] border-gray-300 cursor-pointer">
                        <i className="fa-solid fa-key text-[#03325E] text-[1.5rem]"></i>
                    </button>
                </div>

                <button 
                onClick={() => navigate(-1)}
                className="p-2 bg-white border-[1px] border-gray-300 cursor-pointer">
                    <i className="fa-solid fa-arrow-left text-[#03325E] text-[1.5rem]"></i>
                </button>
            </footer>
        </div>
    )
}