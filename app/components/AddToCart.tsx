
import React from 'react'

export const AddToCart = () => {
  return (
    <div>
        <button onClick={()=>console.log("I got clicked")} className='btn btn-primary'>
            Add to Cart
        </button>
    </div>
  )
}
