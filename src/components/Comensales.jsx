export default function Comensales({selectTable, tableNumber}) {

    function onSubmitForm(event) {
        event.preventDefault();
        const comensales = parseInt(event.target.comensalesNumber.value);
        selectTable(tableNumber,comensales,true);
    }

    return (
        <div className="flex flex-col absolute bg-white w-full h-full justify-center z-99 top-0 items-center">
            <p className="font-thin text-[1.2rem]">Introduzca comensales:</p>
            <form className="text-lg flex gap-2" onSubmit={onSubmitForm}>
                <input type="number" name="comensalesNumber" className="border-[1px]"></input>
                <button type="submit" className="bg-[#808080] border-[1px] border-transparent px-1 rounded-[3px] cursor-pointer"><i className="fa-solid fa-check text-white"></i></button>
            </form>
        </div>
    )
}