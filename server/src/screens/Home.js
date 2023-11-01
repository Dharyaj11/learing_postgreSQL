import React from 'react'
import Navbar from '../components/Navbar'
import AddShop from '../components/AddShop'
import ShopList from '../components/ShopList'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <AddShop/>
        <ShopList/>
        Home
    </div>
  )
}
