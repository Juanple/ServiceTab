import { Routes, Route } from "react-router-dom";
import WaiterSelector from './pages/WaiterSelector.jsx'
import TablesSelector from './pages/TablesSelector.jsx'
import MenuGeneral from "./pages/MenuGeneral.jsx";
import Tapas from './pages/Tapas.jsx';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<WaiterSelector></WaiterSelector>}></Route>
      <Route path="/tables/:waiter" element={<TablesSelector></TablesSelector>}></Route>
      <Route path="/tables/:waiter/menu-general/:table" element={<MenuGeneral></MenuGeneral>}></Route>
      <Route path="/tables/:waiter/menu-general/:table/tapas" element={<Tapas></Tapas>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  );
}