import React, { createContext,useState } from 'react'

export const ShopContext= createContext();

export const ShopContextProvider=props=>{
    const [shop, setShop] = useState([]);

    return(
        <ShopContext.Provider value ={{shop,setShop}}>
            {props.children}
        </ShopContext.Provider>
    )
}