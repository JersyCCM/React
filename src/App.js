import { NavBar } from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/Container/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { Footer } from "./components/Footer/Footer";
import { Contacto } from "./components/Container/Contacto/Contacto";








function App() {


  return (
    <>
    
      <BrowserRouter>

      <NavBar/>

      <Switch>

      <Route exact path="/">
        <ItemListContainer/> 
      </Route>

      <Route exact path="/productos/:categoryId">
              <ItemListContainer />
          </Route>

        <Route exact path="/detail/:itemId">
          <ItemDetailContainer/>
      </Route>

      <Route exact path="/contacto">
          <h1>Contacto</h1>
      </Route>

      <Route exact path="/cart">
          <h1>Carrito</h1>
      </Route>


      <Route path="*">
              <Redirect to="/"/>
          </Route>

      </Switch>


      <Footer/>
    
    
      
      </BrowserRouter>

      
    
    
    </>
  );
}

export default App;
