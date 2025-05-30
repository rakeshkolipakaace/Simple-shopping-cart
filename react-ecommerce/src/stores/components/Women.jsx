import React from 'react'

import {womanData} from '../data/woman'

const Mobiles = () => {
    const firstfiveimages=womanData.slice(0,5)
  return (
   <>
   <h2>Women wears</h2>
    <div className='prosection'>
        {firstfiveimages.map((item)=>{
            return(
                <div className='imgbox'>
                    <img src={item.image} alt="mobile" className='proImage'></img>
                </div>
            )
        })}
    </div>
   </>
  )
}

export default Mobiles