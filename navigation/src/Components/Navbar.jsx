import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<>

<div style={{background:'pink',padding:'10px',textAlign:'center'}}>
    <Link style={{margin:'10px'}} to="/">Home</Link>
<Link style={{margin:'10px'}} to="/about">About</Link>  
<Link style={{margin:'10px'}} to="/contact">Contact</Link>
</div>


</>  )
}

export default Navbar