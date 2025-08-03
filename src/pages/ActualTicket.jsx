import { useEffect, useState } from "react";
import { data } from "react-router-dom";
import Footer from "../components/Footer";

export default function ActualTicket() {

    // Capturar los datos de la db
    const [productList, setProductList] = useState([('','','')]);
    useEffect(() => {
        
        fetch('http://127.0.0.1:5000/tables/menu-general/',{
            method: 'GET'
        }).then(response => response.json())
        .then(data => {
            setProductList(data['data']);
        })

    }, [])

    let totalPrice = 0;

    // Calcular el precio total
    for(let i=0; i<productList.length; i++) {
        if (productList[i][2] != '') {
            let price = productList[i][2];
            totalPrice += parseInt(price);
        }
    }

    // Eliminar producto
    async function deleteProduct(index, idproduct) {
        const response = await fetch(`http://127.0.0.1:5000/tables/menu-general/${idproduct}`,{
            method: 'DELETE'
        });
        if (response.ok) {
            let newProductList = [];
            for(let i=0;i<productList.length;i++){
                if(i != index){
                    newProductList.push(productList[i]);
                }
            }
            setProductList(newProductList);
        }
    }

    return (
        <div className="flex-col">
            <div className="flex-col flex ">
                { productList.length != 0 ?
                    productList.map((product, index) => (   
                    <div key={index} className="w-full relative p-4 overflow-scroll border-b-1 border-gray-200 flex justify-between hover:bg-gray-200">
                        <p>{product[1]}</p> {/* Nombre del product */}
                        <p>{product[2]}€</p> {/* Precio del producto */}
                        <div className="w-[20%]"/>

                        <div className="p-4 gap-2 absolute flex rounded-l-[50px] right-0 top-0 items-center justify-center h-full bg-white shadow-xl shadow-white"> {/* Botones */}
                            <button onClick={() => (deleteProduct(index, product[0]))}><i className="fa-solid fa-trash text-[1.2rem] hover:text-gray-400"></i></button>
                            <button><i className="fa-solid fa-comment text-[1.2rem] hover:text-gray-400"></i></button>
                        </div>
                    </div>
                    ))
                    : <p>No hay productos</p>
                }
            </div>

            <div className="flex items-center justify-center text-xl ">
                <p>Total: {totalPrice}€</p>
            </div>

            <Footer/>
        </div>
    )
}