import React from 'react'

import {computerData} from '../data/computers'

const Computers = () => {
        const firstfiveimages=computerData.slice(0,5)
    
  return (
    <>
 <h2>Computers</h2>
    <div className='prosection'>
        {firstfiveimages.map((item)=>{
            return(
                <div className='imgbox'>
                   <img src={item.image} alt="computer" className='proImage'></img>
                </div>
            )
        })}
    </div>


    </>
  )
}

export default Computers