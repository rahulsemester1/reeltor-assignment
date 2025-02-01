import React from 'react'

const Item = ({product}) => {
  return (
 
   <>
      <div >
         <div className='relative left-22 h-76 w-64 py-4 mb-6 transition-transform duration-500 hover:scale-110 hover:opacity-93 cursor-pointer  '>
               <img className=' rounded-md h-42 mb-4 ' src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600"/>
               <p className='font-semibold mb-2'>${product.price} /mo</p>
               <p className='font-semibold mb-2'>{product.name}</p>
               <p className='text-slate-400 text-sm mb-2'>{product.location}</p>
              <div className='flex justify-between space-x-1 text-sm '>
                <p className='flex items-center space-x-1'><span class="material-symbols-outlined">
                     bed
                     </span>{product.bedrooms}bed</p>
               <p className='flex items-center space-x-1'><span class="material-symbols-outlined">
                        shower
                        </span>{product.bathrooms}bath</p>
               <p className='flex items-center space-x-1'><span class="material-symbols-outlined">
                     edit_square
                     </span>{product.square_feet}sqft</p>
               </div>
               </div>
            
      </div>
   </>
  )
}

export default Item