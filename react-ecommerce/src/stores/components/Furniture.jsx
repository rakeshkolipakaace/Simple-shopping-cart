import React from 'react'

import { furnitureData } from '../data/furniture'

const Furniture = () => {
    const firstfiveimages=furnitureData.slice(0,5);
  return (
    <>
    <h2>Furniture</h2>
        <div className='prosection'>
            {
                firstfiveimages.map((item)=>{
                    return(
                        <div className='imgbox'>
                     <img src={item.image} alt='furniture' className='proImage'></img>
                         </div>
                    )
                })
            }
        </div>

    </>
  )
}

export default Furniture