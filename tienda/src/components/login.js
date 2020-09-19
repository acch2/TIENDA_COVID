import React, { Component } from 'react';
class Login extends Component {
   render(){
       return(
           <div id="login">
           		<h1>Login</h1>
               <form>
                   <input type="text" className="input_login" />
                   <input type="password" className="input_login" />
                   <button className="btnIngresar">Ingresar</button>
               </form>
           </div>
       );
   }
}
export default Login;



