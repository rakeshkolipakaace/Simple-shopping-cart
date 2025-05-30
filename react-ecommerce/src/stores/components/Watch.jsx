import React from 'react'

import {watchData} from '../data/watch'
const Watch = () => {
    const firstfiveimages=watchData.slice(0,5);
  return (
    <>
    <h2>Watches</h2>
    <div className='prosection'>
        {
            firstfiveimages.map((item)=>{
                return(
                    <div className='imgbox'>
                        <img src={item.image} alt="watch" className='proImage'></img>
                    </div>
                )
            })
        }
    </div>
    
    </>
  )
}

export default Watch