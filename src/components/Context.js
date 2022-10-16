import React, { createContext, useState } from 'react'


export const cartData = createContext()


const Context = ({children}) => {
  const [cart, setCart] = useState([]);
  return (
    <cartData.Provider value={{cart,setCart}}>{children}</cartData.Provider>
  )
}
 
export default Context ;


