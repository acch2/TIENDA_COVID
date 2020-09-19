import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../helpers/appcontext';
class ProductoMedicoDetalle extends Component {
	static contextType = AppContext;
	constructor() {
		super();
		this.state = {
			nombre: "",
			precio: 0,
			talla: "",
			imagen: "",
			cantidad: 1,
			stock: 0
		}
	}
	componentDidMount() {
		let idprod = this.props.match.params.id;
		let ruta2 = "http://localhost:3001/productos_medicos/" + idprod;
		fetch(ruta2).then(response => response.json())
			.then(datos => {
				this.setState({
					nombre: datos.nombre,
					precio: datos.precio,
					imagen: datos.imagen,
					talla: datos.talla
				});
			});
	}
	setCantidad(e) {
		this.setState({
			cantidad: e.target.value
		});
	}

	agregarProducto() {
		let idprod = this.props.match.params.id;
		let producto_medico = {
			id: idprod,
			nombre: this.state.nombre,
			precio: this.state.precio,
			talla: this.state.talla,
			cantidad: parseInt(this.state.cantidad)
		}
		let newCarrito2 = this.context.carrito;
		let encontrado = false;
		console.log("prueba antes de registro");
		console.log(newCarrito2);
		for (let item of newCarrito2) { // Recorro los items del carrito
			if (item.id === idprod) { // Si encuentro el producto en el carrito
				item.cantidad += producto_medico.cantidad; //sumo la cantidad que compro a la existente
				encontrado = true;
				break;
			}
		}


		if (!encontrado) //si no se encontró el producto en el carrito
			newCarrito2.push(producto_medico); //Agrego el producto
		console.log('newCarrito2', newCarrito2);
		localStorage.setItem("Carrito", JSON.stringify(newCarrito2));
		this.context.setCarrito(newCarrito2);
		window.alert("Producto  medico agregado !");
	}



	render() {
		return (
			<div id="producto_detalle">
				<div className="ruta">
					<Link to="/">Inicio</Link> / Producto_medico / {this.state.nombre}
				</div>
				<div className="caja_producto">
					<div className="imagen"><img src={"/img/" + this.state.imagen} alt="" /></div>
					<div className="datos">
						<h2>{this.state.nombre}</h2>
						<div className="precio">S/ {this.state.precio.toFixed(2)}</div>
						<div className="controles">
							<input type="number" className="cajaCantidad" onChange={this.setCantidad.bind(this)} defaultValue="1" min="1" />
							<button className="btnCarrito" onClick={this.agregarProducto.bind(this)}>Agregar al carrito</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default ProductoMedicoDetalle;