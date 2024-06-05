import React from 'react'
import'./shoe.css'
import { useState } from 'react'

export default function Shoedetail() {

  return (
    <div className='firstdiv'>
        <div className='secdiv'>
            <h1>YOUR FEET DESERVE THE BEST PRODUCT</h1>

            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.</p>
          <div className='btn'>
                <button>Shop Now</button>
                <button>Category</button>
          </div>
          <div className='img'>
          <p>Also Available On</p><br></br>
          <img className='img1' src="https://lofrev.net/wp-content/photos/2016/06/amazon-logo-1-1007x1007.png" alt="amazon-logo" />
          </div>
        </div>

        <div className='shoeimg'>      
        <img src="https://www.tennisnuts.com/images/product/full/F32293_F_beauty_B2C.jpg" alt="hero-image"/>
        </div>
    
    </div>

  )
}
