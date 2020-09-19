import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../helpers/appcontext';
class ProductoDetalle extends Component {
	static contextType = AppContext;
	constructor(){
		super();
		this.state = {
			nombre:"",
			precio:0,
			talla:"",
			imagen:"",
			cantidad:1,
			stock:0
		}
	}
	componentDidMount(){
		let idprod = this.props.match.params.id;
		let ruta = "http://localhost:3001/productos/"+idprod;
		fetch(ruta).then(response=>response.json())
		.then(datos=>{
			this.setState({
				nombre: datos.nombre,
				precio: datos.precio,
				imagen: datos.imagen,
				talla:datos.talla
			});
		});
	}
	setCantidad(e){
		this.setState({
			cantidad : e.target.value
		});
	}
	
	agregarProducto(){
		let idprod = this.props.match.params.id;
		let producto = {
			id: idprod,
			nombre: this.state.nombre,
			precio: this.state.precio,
			talla:this.state.talla,
			cantidad: parseInt(this.state.cantidad)
		}
		let newCarrito = this.context.carrito;
		let encontrado = false;
		for(let item of newCarrito){ // Recorro los items del carrito
			if(item.id===idprod){ // Si encuentro el producto en el carrito
				item.cantidad += producto.cantidad; //sumo la cantidad que compro a la existente
				encontrado = true;
				break;
			}
		}
		if(!encontrado) //si no se encontró el producto en el carrito
			newCarrito.push(producto); //Agrego el producto
		console.log('newCarrito',newCarrito);
		localStorage.setItem("carrito",JSON.stringify(newCarrito));
		this.context.setCarrito(newCarrito);
		window.alert("Producto agregado!");
	}
	render(){
		return(
			<div id="producto_detalle">
				<div className="ruta">
					<Link to="/">Inicio</Link> / Producto / {this.state.nombre}
				</div>
				<div className="caja_producto">
					<div className="imagen"><img src={"/img/"+this.state.imagen} alt="" /></div>
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
export default ProductoDetalle;

