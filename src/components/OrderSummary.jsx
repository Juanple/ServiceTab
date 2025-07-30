import { useState, useEffect } from 'react';

export default function OrderSummary() {
    
    const [rangeNumber, setRangeNumber] = useState(null);
    const [tableNumber, setTableNumber] = useState(null);
    let comensales = 4;
    let totalPrice = 0;
    const [productList, setProductList] = useState(['', '']);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/tables/menu-general/',{
        method: 'GET'
    }).then(response => response.json())
    .then(data => {
        setRangeNumber(data['rangeNumber']);
        setTableNumber(data['tableNumber']);
        setProductList(data['productList']);
    })
    }, []);
    
    for (let i = 0; i<productList.length; i++) {
        totalPrice += productList[i][1]; // Precio total aumentar
    }

    return (
        <div className="flex-col h-30 overflow-hidden p-2 pt-0">
            <div className="flex justify-between">
                <div className='flex gap-2 text-[1.2rem]'>
                    <p className='font-thin'>Rango {rangeNumber}</p>
                    <p className='font-thin'>{tableNumber}</p>
                </div>
                <div className="flex gap-2">
                    <div className="flex items-center text-[1rem] text-[#03325E]">
                        <p>{comensales} x</p>
                        <i className="fa-solid fa-person"></i>
                    </div>
                    <div className="flex gap-1 items-center font-extrabold text-gray-500">
                        <i className="fa-solid fa-credit-card"></i>
                        <p>€{totalPrice}</p>
                    </div>
                </div>
            </div>

            <div className='pt-1'>
                {productList.map((product, index) => {
                    return (
                        <div className="flex justify-between" key={index}>
                            <div className='flex items-center gap-1'>
                                <i className="fa-solid fa-right-to-bracket text-xs text-gray-600"></i>
                                <p className={`${index === productList.length - 1 ? 'font-bold' : 'text-[#03325E]'}`}>{product[0]}</p>
                            </div>
                            <p className={`${index === productList.length - 1 ? 'font-bold' : 'text-[#03325E]'}`}>{product[1]}€</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}