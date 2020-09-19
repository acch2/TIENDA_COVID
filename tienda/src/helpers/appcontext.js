import React from 'react';
const AppContext = React.createContext({
   carrito: [],
   setCarrito: () => {},

   carrito2: [],
   setCarrito2: () => {},
});
export const AppProvider = AppContext.Provider;
export const AppConsumer = AppContext.Consumer;
export default AppContext;