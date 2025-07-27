import { useState, useEffect } from 'react';

export default function OrderSummary() {
    
    const [rangeNumber, setRangeNumber] = useState(null);
    const [tableNumber, setTableNumber] = useState(null);
    let comensales = 4;
    let totalPrice = '6.32';
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
    
    return (
        <div className="flex-col h-25 overflow-hidden">
            <div className="flex justify-between">
                <p>Rango {rangeNumber} {tableNumber}</p>
                <div className="flex gap-2">
                    <div className="flex">
                        <p>{comensales}X</p>
                        <p>em</p>
                    </div>
                    <div className="flex gap-1">
                        <p>em</p>
                        <p>{totalPrice}</p>
                    </div>
                </div>
            </div>

            <div>
                {productList.map((product, index) => {
                    return (
                        <div className="flex justify-between" key={index}>
                            <p>{product[0]}</p>
                            <p>{product[1]}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}