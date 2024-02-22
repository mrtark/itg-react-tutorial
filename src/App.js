import { Route, Routes } from "react-router-dom";
import Contents from "./components/Contents";
import Headers from "./components/Header";
import About from "./components/About";
import Suppliers from "./components/Suppliers";
import SuppliersDetails from "./components/SuppliersDetails";
import StateIntro from "./components/StateIntro";
import Odev1 from "./components/Odev1";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Grid from "./components/Grid";
import Odev2 from "./components/Odev2";

function App() {
  return (

    // <>
    //   <Headers icon="fa-solid fa-house"></Headers>
    //   <Contents data={[1, 2, 3, 4]}></Contents>
    //   
    // </>

    <>
      <Headers icon="fa-solid fa-house"></Headers>
      <Routes>
        <Route path="/" element={<Contents />} />
        <Route path="/about" element={<About />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/stateIntro" element={<StateIntro />} />
        <Route path="/suppliers:id" element={<SuppliersDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/odev1" element={<Odev1 />} />
        <Route path="/odev2" element={<Odev2/>} />
      </Routes>
      <Footer></Footer>
    </>


  );
}

export default App;