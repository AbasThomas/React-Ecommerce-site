import React from 'react'
import './Navbar.css'
import Button1 from '../Button1/Button1'
import Button2 from '../Button2/Button2'
const Navbar = () => {
  return (
    <nav>
        <div className="nav1">
            <h2>FakeStore</h2>
            <div className='menu'>
                <p>Home</p>
                <p>Products</p>
                <p>About</p>
                <p>Contact </p>
            </div>
         </div>
         <div className="nav2">
            <Button1 className='Nav-btn1'>Wishlist</Button1>
            <Button2 className='Nav-btn2'>Cart</Button2>
         </div>
    </nav>
  )
}

export default Navbar