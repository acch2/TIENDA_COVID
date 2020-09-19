import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../helpers/appcontext';

class Cabecera extends Component {
	static contextType = AppContext;
	state = {
		busqueda: ""
	}
	setBusqueda(e){
		this.setState({
			busqueda: e.target.value
		});
	}
	buscar=()=>{
		let busqueda = this.state.busqueda;
		let ruta = "/buscar/"+busqueda;
		this.setState({
			busqueda: ""
		});
		window.location.hash = ruta;
	}
	render(){
		return(
			<div id="cabecera">
				<div className="logo"><Link to="/">TIENDA COVID</Link></div>
				<div className="buscador">
					<input type="text" defaultValue={this.state.busqueda} onChange={this.setBusqueda.bind(this)} placeholder="Busca un producto" />
					<button onClick={this.buscar.bind(this)}>Buscar</button>
				</div>
				<div className="enlaces">
					<Link to="/producto_medico">Productos medicos</Link> 

					<Link to="/login">Iniciar Sesión</Link> 
					<Link to="/carrito">PEDIDOS ({this.context.carrito.length})</Link>
					<Link to="/carrito2"> </Link>
				</div>
			</div>
		);
	}
}
export default Cabecera;
  
  