import { NavBar } from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/Container/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {


  return (
    <>

      <NavBar/>

   
      <ItemListContainer greeting="Bienvenidos"/>
    
    
    </>
  );
}

export default App;
