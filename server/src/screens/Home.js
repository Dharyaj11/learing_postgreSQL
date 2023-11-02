import React from 'react'
import Navbar from '../components/Navbar'
import AddShop from '../components/AddShop'
import ShopList from '../components/ShopList'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <h1 className="text-center">Shop Finder</h1>
        <AddShop/>
        <ShopList/>
        Home
    </div>
  )
}
