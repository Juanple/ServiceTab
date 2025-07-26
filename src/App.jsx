import { Routes, Route } from "react-router-dom";
import WaiterSelector from './pages/WaiterSelector.jsx'
import TablesSelector from './pages/TablesSelector.jsx'
import MenuGeneral from "./pages/MenuGeneral.jsx";
import Tapas from './pages/Tapas.jsx';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen"> 
      {/*<Header />*/}

      <main className="flex-grow">
        <Header></Header>
        <Routes>
          <Route path="/" element={<WaiterSelector />} />
          <Route path="/tables" element={<TablesSelector />} />
          <Route path="/tables/menu-general" element={<MenuGeneral />} />
          <Route path="/tables/menu-general/tapas" element={<Tapas />} />
        </Routes>
      </main>

      <Footer /> 
    </div>
  );
}