
import React, { Component } from 'react';
import Producto from './producto';
class Buscar extends Component {
	state = {
		lista : []
	}
	componentDidMount(){
		console.log("componentDidMount Buscar");
		this.listar();
	}
	componentDidUpdate() {
		//console.log("componentDidUpdate Buscar");
		this.listar();
	}
	listar(){
		let buscar = this.props.match.params.busqueda;
		let ruta = "http://localhost:3001/productos?nombre_like="+buscar;
		fetch(ruta).then(response=>response.json())
		.then(datos=>{
			this.setState({
				lista : datos
			});
			//console.log("datos",datos);
		});
	}
	render(){
		return(
			<div id="principal">
				<h1>Resultado de la búsqueda para {this.props.match.params.busqueda}</h1>
				<div className="lista">
				{this.state.lista.map(prod=>{
					return(<Producto key={prod.id} dato={prod} />);
				})}
				</div>
			</div>
		);
	}
}
export default Buscar;
