import React,{useState} from 'react'
import {NavLink,useNavigate} from "react-router-dom";
 

const Navbar = () => {
  

  const getNavLinkStyle=({isActive})=>{
    return{
      //  color:isActive?"red":"black",
       textDecoration:isActive?"underline":"none",
    }
 }

  return (
    <>
 <div className='flex justify-between relative w-full bg-white h-16 items-center -z-10 px-42  border-b-1 border-b-slate-300 overflow-hidden' >
   <div >
    <p className='font-semibold font-weight-700 text-gray-500 '>Dashboard</p>
   </div>

  

    <div className='flex justify-between  '>
    <span className="material-symbols-outlined p-2">
      notifications
    </span>

 

      <span className="material-symbols-outlined p-2">
      person
      </span><p className='p-2'>Rahul Lakhanpal</p>

      
 </div>
</div>

{/* sidebar */}
 <div className='flex flex-col absolute top-0 left-0 bg-white w-16 h-[110%] z-20 gap-12 items-center py-6 border-r-1 border-r-slate-300'>
      <span className="material-symbols-outlined">
      drag_pan
      </span>

      <span className="material-symbols-outlined pointer">
      <NavLink to="/" style={getNavLinkStyle}> nest_heat_link_e</NavLink>        
       
        </span>

      <span className="material-symbols-outlined pointer">
         <NavLink to="/listing" style={getNavLinkStyle}>home</NavLink>
  
        </span>
      <span className="material-symbols-outlined">
        pie_chart
        </span>
      <span className="material-symbols-outlined">
        business_center
        </span>
      <span className="material-symbols-outlined">
        event_available
        </span>
      <span className="material-symbols-outlined">
    settings
    </span>
    </div>
     </>
  )
}

export default Navbar