import React, { createContext,useState } from 'react'

export const ShopContext= createContext();

export const ShopContextProvider=props=>{
    const [shop, setShop] = useState([]);
    const addShops = (s) => {
    setShop([...shop, s]);
  };
    return(
        <ShopContext.Provider value ={{shop,setShop,addShops}}>
            {props.children}
        </ShopContext.Provider>
    )
}