import { Routes, Route } from "react-router-dom";
import WaiterSelector from './pages/WaiterSelector.jsx'
import TablesSelector from './pages/TablesSelector.jsx'
import MenuGeneral from "./pages/MenuGeneral.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WaiterSelector></WaiterSelector>}></Route>
      <Route path="/tables/:waiter" element={<TablesSelector></TablesSelector>}></Route>
      <Route path="/tables/:waiter/menu-general/:table" element={<MenuGeneral></MenuGeneral>}></Route>
    </Routes>
  );
}