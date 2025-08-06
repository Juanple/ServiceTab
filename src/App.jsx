import { Routes, Route } from "react-router-dom";
import WaiterSelector from './pages/WaiterSelector.jsx'
import TablesSelector from './pages/TablesSelector.jsx'
import MenuGeneral from "./pages/MenuGeneral.jsx";
import Tapas from './pages/Tapas.jsx';
import Header from "./components/Header.jsx";
import ActualTicket from "./pages/ActualTicket.jsx";
import CloseTable from "./pages/CloseTable.jsx";

export default function App() {
  return (
    <div className="flex flex-col h-screen">       
      <Header></Header> 
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<WaiterSelector />} />
          <Route path="/tables" element={<TablesSelector />} />
          <Route path="/tables/close-table" element={<CloseTable />}></Route>
          <Route path="/tables/menu-general" element={<MenuGeneral />} />
          <Route path="/tables/menu-general/tapas" element={<Tapas />} />
          <Route path="/tables/menu-general/actual-ticket" element={<ActualTicket />} />
        </Routes>
      </main>
    </div>
  );
}