import React from 'react'

import {mobileData} from '../data/mobiles'

const Mobiles = () => {
    const firstfiveimages=mobileData.slice(0,5)
  return (
    <div className='prosection'>
        {firstfiveimages.map((item)=>{
            return(
                <div className='imgbox'>
                    <img src={item.image} alt="mobile" className='proImage'></img>
                </div>
            )
        })}
    </div>
  )
}

export default Mobiles