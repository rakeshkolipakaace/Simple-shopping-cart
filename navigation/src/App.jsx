// import { useState } from 'react'

// import './App.css';
// import { FaSearch, FaMicrophone, FaBell,FaYoutube  } from 'react-icons/fa';

// function App() {
//   return (
//     <div className="app">
//       <header className="header">
//         <div className="logo"><FaYoutube /></div>

//         <div className="search-bar">
//           <input type="text" placeholder="Search" />
//           <button className="search-btn"><FaSearch /></button>
//         </div>

//         <div className="header-right">
//           <button className="icon-btn"><FaMicrophone /></button>
//           <button className="icon-btn"><FaBell /></button>
//           <div className="profile"></div>
//           <div className="auth-buttons">
//             <button className="btn sign-in">Sign In</button>
//             <button className="btn register">Register</button>
//           </div>
//         </div>
//       </header>

//       <main className="main-content">
//         <h2>Welcome to MyTube</h2>
//         <p>Start searching your favorite content now!</p>
//       </main>
//     </div>
//   );
// }

// export default App;



import React from 'react'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './Components/Navbar'

import './App.css'

const App = () => {
  return (
   <>
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
     
    </Routes>
   </Router>

   </>
  )
}

export default App