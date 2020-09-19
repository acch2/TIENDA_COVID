import React, { Component } from 'react';
import Producto_medico from './producto_medico';

class Vista_productos_medicos extends Component {
	constructor(){
		super();
		this.state = {
			lista: []
		}
	}
	componentDidMount(){
		let ruta = "http://localhost:3001/productos_medicos";
		fetch(ruta).then(response=>response.json())
		.then(datos=>{
			this.setState({
				lista : datos
			})
		});
	}
	render(){
		return(
			<div id="principal">
				<h1 >Mascarillas e impermeables Anti-covid </h1>
				<div className="lista">
				{this.state.lista.map(prod=>{
					return(<Producto_medico key={prod.id} dato={prod} />);
				})}
				</div>
			</div>
		);
	}
}
export default Vista_productos_medicos;

