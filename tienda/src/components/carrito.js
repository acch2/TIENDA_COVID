import React, { Component } from 'react';
import AppContext from '../helpers/appcontext';
class Carrito extends Component {
	static contextType = AppContext;
	state = {
		lista : [],
		total : 0
	}
	componentDidMount(){
		this.setState({
			lista : this.context.carrito
		},()=>{
			this.calcularTotal();
		});
	}
	calcularTotal(){
		let lista = this.state.lista;
		let suma = lista.reduce((sum,item) => sum + item.precio*item.cantidad, 0);
		this.setState({
			total : suma.toFixed(2)
		});
	}
	quitarProducto(idprod){
		// idprod= 10 <= el id que quiero quitar de la lista
		// carrito [3,6,9,10,45,23]
		let newCarrito = this.state.lista.filter(item=>item.id!==idprod);
		this.context.setCarrito(newCarrito);
		this.setState({
			lista : newCarrito
		},()=>{
			this.calcularTotal();
			window.alert("Producto Eliminado!");
		});
	}
	render(){
		return(
			<div id="carrito">
				<h1>PEDIDOS DE ROPA</h1>
				<table className="tabla_carrito">
					<thead>
						<tr>
							<td>Nombre</td>
							<td>talla</td>
							<td>Cantidad</td>
							<td>Precio</td>
							<td>Subtotal</td>
							<td>Acciones</td>
						</tr>
					</thead>
					<tbody>
						{this.state.lista.map((item)=>{
							return(
								<tr key={item.id}>
									<td>{item.nombre}</td>
									<td>{item.talla}</td>
									<td>{item.cantidad}</td>
									<td>S/ {item.precio}</td>
									<td>S/ {(item.cantidad*item.precio).toFixed(2)}</td>
									<td><button onClick={this.quitarProducto.bind(this,item.id)}>Eliminar</button></td>
								</tr>
							);
						})}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan="4" align="right">Total</td>
							<td>S/ {this.state.total}</td>
						</tr>
					</tfoot>
				</table>
			</div>
		);
	}
}
export default Carrito;

