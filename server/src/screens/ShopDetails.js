import React,{ useEffect,useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import ShopFinder from '../apis/ShopFinder';

export default function ShopDetails() {
    const {id}=useParams();
    const {selectedShop,setselectedShop} = useContext(ShopContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await ShopFinder.get(`/${id}`);
              console.log(response);
      
              setselectedShop(response.data.data);
            } catch (err) {
              console.log(err);
            }
          };
      
          fetchData();
    }, [])
    
  return (
    <div>
        {selectedShop && (
        <>
          <h1 className="text-center display-1">
            {selectedShop.shops.name}
          </h1>
        </>
        )}
    </div>
  )
}
