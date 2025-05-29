import React from 'react'

const Navbar = () => {
  return (
    <div className="navsection">
        <div className="tittle">
            <h2>E-MART</h2>
        </div>
        <div className="search">
            <input type ="text" placeholder="Search"></input>
        </div>
        <div className="user">
            <div className="user-details">
                Sign In / Signup
            </div>
            <div className="cart">Cart</div>
        </div>
    </div>
  )
}

export default Navbar