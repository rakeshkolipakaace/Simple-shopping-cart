import React from 'react'

const WomenColledctions = (props) => {
  const {title, image1, image2, image3, image4, image5, image6, price1, price2, price3, price4, price5, price6} = props.LadiesFashion
  return (
    <div className='collectionSection'> 
      <h2>{title}</h2>
       <div className="bannerbox">
         <img src="assets/LadiesBanner.gif" alt="banner"></img>
      </div>

     

      <div className="menImages">
        <img src={image1} alt="image1"></img>
        <img src={image2} alt="image2"></img>
        <img src={image3} alt="image3"></img>
        <img src={image4} alt="image4"></img>
        <img src={image5} alt="image5"></img>
        <img src={image6} alt="image6"></img>
      </div>
      

    </div>
  )
}

export default WomenColledctions