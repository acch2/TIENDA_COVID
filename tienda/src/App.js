import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppProvider } from './helpers/appcontext';
import Cabecera from './components/cabecera';
import Pie from './components/pie';
import Principal from './components/principal';
import Vista_productos_medico from './components/vista_productos_medicos';
import ProductoDetalle from './components/producto_detalle';
import ProductoMedicoDetalle from './components/producto_medico_detalle';
import Login from './components/login';
import Carrito from './components/carrito';
import Carrito2 from './components/carrito2';
import Buscar from './components/buscar';
import NoEncontrado from './components/noencontrado';
import './App.css';


class App extends Component {
  setCarrito = (carrito)=>{
    this.setState({ carrito });
  };
  state = {
    carrito: [
      {id:88,nombre:"demo",precio:3,cantidad:10}
    ],
    setCarrito: this.setCarrito
  };



  setCarrito2 = (carrito2)=>{
    this.setState({ carrito2 });
  };
  state2= {
    carrito2: [
      {id:88,nombre:"demo",precio:3,cantidad:1}

    ],
    setCarrito2: this.setCarrito2
  };

  componentDidMount(){
    console.log("componentDidMount App");
    if(localStorage.carrito){
      console.log("localStorage.carrito");
      this.setState({
        carrito: JSON.parse(localStorage.carrito)
      });
    }

    if(localStorage.carrito2){
      console.log("localStorage.carrito2");
      this.setState({
        carrito2: JSON.parse(localStorage.carrito2)
      });
    }
  } ;


  
 
  

  render(){
    return(
      <AppProvider value={this.state}>
        <AppProvider value={this.state2}></AppProvider>
        
        <header>
          <Cabecera></Cabecera>
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={ Principal } />

            <Route exact path='/producto_medico' component={ Vista_productos_medico } />

            <Route exact path='/producto/detalle/:id' component={ ProductoDetalle } />

            <Route exact path='/producto_medico/detalle/:id' component={ ProductoMedicoDetalle } />

            <Route exact path='/login' component={ Login } />
            <Route exact path='/carrito' component={ Carrito } />
            <Route exact path='/carrito2' component={ Carrito2} />
            
            <Route exact path='/buscar/:busqueda' component={ Buscar } />
            <Route component={ NoEncontrado } />

     
          </Switch>
        </main>
        <footer>
          <Pie></Pie>
        </footer>
      </AppProvider>
    );
  }
}

export default App;
