import React, { useEffect,useContext } from 'react'
import ShopFinder from '../apis/ShopFinder'
import { ShopContext } from '../context/ShopContext';

export default function ShopList() {

  const {shop,setShop} = useContext(ShopContext)
  useEffect(()=>{
    
    async function fetchData(){
    try {

        const response =await ShopFinder.get("/");
        // console.log(response);
        setShop(response.data.data.shops)

      } catch (error) {
        
      }
    }
    fetchData();
  },[]);
  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await ShopFinder.delete(`/${id}`);
      setShop(
        shop.filter((restaurant) => {
          return restaurant.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="list-group">
        <table className="table table-hover table-dark">
        <thead>
           <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
            <th scope="col">Edit</th>
            {/* <th scope="col">Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {shop &&
            shop.map((restaurant) => {
              return (
                <tr
                  // onClick={() => handleRestaurantSelect(restaurant.id)}
                  key={restaurant.id}
                >
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{"$".repeat(restaurant.price_range)}</td>
                  {/* <td>{renderRating(restaurant)}</td> */}
                  <td>
                    <button
                      // onClick={(e) => handleUpdate(e, restaurant.id)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, restaurant.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {/* <tr>
            <td>mcdonalds</td>
            <td>New YOrk</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>

          <tr>
            <td>mcdonalds</td>
            <td>New YOrk</td>
            <td>$$</td>
            <td>Rating</td>
            <td>
              <button className="btn btn-warning">Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}
