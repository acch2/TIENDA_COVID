import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Producto_medico extends Component {
	producto_medico = this.props.dato;
	render(){
		return(
			<div className="caja">
				<Link to={`/producto_medico/detalle/${this.producto_medico.id}`}>
					<div className="foto"><img src={"/img/"+this.producto_medico.imagen} alt="" /></div>
					<div className="nombre">{this.producto_medico.nombre}</div>
					<div className="talla">{this.producto_medico.talla}</div>
					<div className="precio">S/ {this.producto_medico.precio.toFixed(2)}</div>
				</Link>
			</div>
		);
	}
}
export default Producto_medico;