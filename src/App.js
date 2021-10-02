import { NavBar } from "./components/NavBar/Navbar"
import {ItemListContainer} from "./components/Container/ItemListContainer"
import { CartWidget } from "./components/NavBar/CartWidget";


function App() {


  return (
    <>

      <NavBar/>

      <ItemListContainer greeting="Bienvenidos"/>


    </>
  );
}

export default App;
