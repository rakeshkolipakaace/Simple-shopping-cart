import React, { useState } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'   

import {Gents,Ladies} from '../data'
import WomenCollections from '../components/WomenCollections'

const Mainpage = () => {
    const [gentsFashion, setgentsFashion] = useState(Gents)
    const [LadiesFashion, setLadiesFashion] = useState(Ladies)
  return (
    <>
    <div>
      <Header/>
      <Banner/>
      <Collections genstFashion={gentsFashion}/>
      <WomenCollections LadiesFashion={LadiesFashion} ></WomenCollections>
      <Footer/>

     
    </div>

    
    </>
  )
}

export default Mainpage