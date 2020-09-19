import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Producto extends Component {
	producto = this.props.dato;
	render(){
		return(
			<div className="caja">
				<Link to={`/producto/detalle/${this.producto.id}`}>
					<div className="foto"><img src={"/img/"+this.producto.imagen} alt="" /></div>
					<div className="nombre">{this.producto.nombre}</div>
					<div className="talla">{this.producto.talla}</div>
					<div className="precio">S/ {this.producto.precio.toFixed(2)}</div>
				</Link>
			</div>
		);
	}
}
export default Producto;