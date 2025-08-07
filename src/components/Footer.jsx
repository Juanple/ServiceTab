import { useNavigate } from "react-router-dom"
import { post } from '../services/post.js'

export default function Footer() {

    const navigate = useNavigate();

    function printTicket() {
        const response = post({'':''}, '/tables/menu-general/printTicket');
    }

    function printCuenta() {
        const response = post({'':''}, '/tables/menu-general/printCuenta');
    }

    return (
            <div className="flex gap-1 bg-gray-200 p-1 border-[1px] border-gray-300 fixed w-full bottom-0 justify-between">
                <div className="flex gap-1">
                    <button 
                    onClick={printTicket}
                    className="p-2 bg-white border-[1px] border-gray-300 cursor-pointer">
                        <i className="fa-solid fa-utensils text-[#03325E] text-[1.5rem]"></i>
                    </button>

                    <button 
                    onClick={printCuenta}
                    className="p-2 bg-white border-[1px] border-gray-300 cursor-pointer">
                        <i className="fa-solid fa-print text-[#03325E] text-[1.5rem]"></i>
                    </button>

                    <button 
                    onClick={() => navigate('/tables/menu-general/actual-ticket')}
                    className="p-2 bg-white border-[1px] border-gray-300 cursor-pointer">
                        <i className="fa-solid fa-receipt text-[#03325E] text-[1.5rem]"></i>
                    </button>

                    <button className="p-2 bg-white border-[1px] border-gray-300 cursor-pointer">
                        <i className="fa-solid fa-arrow-down-1-9 text-[#03325E] text-[1.5rem]"></i>
                    </button> 

                    <button className="p-2 bg-white border-[1px] border-gray-300 cursor-pointer">
                        <i className="fa-solid fa-book text-[#03325E] text-[1.5rem]"></i>
                    </button>                      
                </div>

                <button 
                onClick={() => navigate(-1)}
                className="p-2 bg-white border-[1px] border-gray-300 cursor-pointer">
                    <i className="fa-solid fa-arrow-left text-[#03325E] text-[1.5rem]"></i>
                </button>
            </div>
    )
}