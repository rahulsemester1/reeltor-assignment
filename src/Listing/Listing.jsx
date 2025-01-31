import React,{useEffect,useState} from 'react'
import axios from "axios"
import Item from '../Item';


const Listing = () => {
  const [search, setSearch] = useState("");
  const [all_products,setall_product]=useState([]);
  const [loading,setLoading]=useState(true);
  const [debounce,setDebounce]=useState();
  const [price,setPrice]=useState();
  const [toggle,setToggle]=useState(false);

  const searchApi=async(debounce)=>{
    try{
      const response=await axios(`http://localhost:4000/api/v1/properties/search/${debounce}`);
      console.log(response.data.data)
      if(response){
        console.log(response)
        setall_product(response.data.data)
       }
      }catch(error){
        console.log("Error apiCall",error)
  }
}

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    // searchApi();
  };

const apiCall=async()=>{
  try{
    const response=await axios("http://localhost:4000/api/v1/properties");
    console.log(response.data.data)
    if(response){
      console.log(response)
      setall_product(response.data.data)
     }
    }catch(error){
      console.log("Error apiCall",error)
    }finally{
      setLoading(false)
    }
  } 
//api call for filtering data on basis of price
  const apiFilter=async()=>{
    try{
      const response=await axios(`http://localhost:4000/api/v1/filter/${price}`);
      console.log(response.data.data)
      if(response){
        console.log(response) 
        setall_product(response.data.data)
       }
      }catch(error){
        console.log("Error apiCall",error)
      }finally{
        setLoading(false)
      }
  }


  useEffect(()=>{
       apiCall();
  },[])


  useEffect(()=>{
    const timer=setTimeout(()=>{
       setDebounce(search);
    },2000)
    return ()=>clearTimeout(timer) 
 },[search])

 useEffect(()=>{
  if(debounce){
    searchApi(debounce);
  }
},[debounce])


//for filtering a/c to price 
useEffect(()=>{
  apiFilter();
},[price])

const filter=()=>{
  let value=prompt("Enter starting price range to filter");
  console.log(value);
  setPrice(value);
}
  if(loading){
   return <div className='relative left-22'>....Loading</div>
  }
  
  return (
    <div className={`${toggle ? "bg-black text-white" : "bg-slate-100 text-black"}  overflow-hidden h-screen overflow-y-auto`}> 
    <div className='flex gap-22'>
      <p className='relative left-22 font-semibold'>Discover popular properties</p>
      <div className='border rounded-sm h-8 w-64  mt-1 relative left-22'>
  <input className='w-62 '
            type="search" 
            placeholder='Search property ie.Chicago,IL'
            value={search} 
            onChange={handleSearchChange}
            />
           
            </div>
            <span onClick={filter}className="material-symbols-outlined ml-6 mt-1 cursor-pointer">
              filter_alt
            </span>
            <div className="cursor-pointer"><span onClick={()=>setToggle(!toggle)}className="material-symbols-outlined p-1 ml-160 cursor-pointer">
        contrast
        </span>
      </div>
  </div>
      <ul>
      <p className='grid grid-cols-4 gap-2  '>{all_products.map((product,index)=>(
             <li key={index}>{<Item product={product}/>}</li>
      ))}</p>
      </ul>
      
      
      </div>
      
  )
}

export default Listing