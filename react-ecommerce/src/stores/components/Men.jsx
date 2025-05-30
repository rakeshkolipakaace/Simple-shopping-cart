import React from 'react'

import {menData } from '../data/men'

const Men = () => {
    const firstfiveimages=menData.slice(0,5);
  return (
    <>
    <h2>Mens wear</h2>
    <div className='prosection'>
        {
            firstfiveimages.map((items)=>{
                return(
                    <div className='imgbox'>
                 <img src={items.image} alt="men" className='proImage'></img>
                    
                    </div>
            )
            })
        }

    </div>
    </>
  )
}

export default Men