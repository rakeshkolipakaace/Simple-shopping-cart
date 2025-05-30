import React from 'react'

import { acData } from '../data/ac'
const AC = () => {
     const firstfiveimages=acData.slice(0,5);
  return (
    <>
<h2>Air Conditioners</h2>
   

<div className='prosection'>
    {
        firstfiveimages.map((item)=>{ 
            return(
                <div className='imgbox'>
                <img src={item.image} alt="ac" className='proImage'></img>

                </div>
            )
        })
    }
</div>

    
    
    </>
  )
}

export default AC