import React,{useState} from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { useAuth } from '../Context/Context';


import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import DateRangeSharpIcon from '@mui/icons-material/DateRangeSharp';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';


const Dashboard = () => {
   let {toggle,setToggle}=useAuth();
    const [nfts, setNfts] = useState([
      { name: "Roma Avenue", value: "0.91", change: "+10%" },
      { name: "Thorian Park", value: "0.89", change: "+19%" },
      { name: "Linda Mansion", value: "1.1", change: "-17%" },
    ]);

    const data = [
      { day: "Mon", value: 300,balance:"534,123",value1: "0.91", change: "+10%"},
      { day: "Tue", value: 280,balance:"400,834",value1: "0.89", change: "+19%" },
      { day: "Wed", value: 320,balance:"732,000", value1: "1.1", change: "-17%" },
      { day: "Thu", value: 350,balance:"542,901", value1: "2.45", change: "+38%" },
      { day: "Fri", value: 300,balance:"113,456", value1: "0.12", change: "-22%" },
      { day: "Sat", value: 310,balance:"958,569", value1: "4.78", change: "+13%" },
      { day: "Sun", value: 290,balance:"432,910", value1: "0.71", change: "+22%" },
    ];
  
    const [hoverData, setHoverData] = useState({ day: "Hover to see", value: 0 });
  
    
  return (
   // className={`${toggle ? "bg-[#1f0604] text-white" : "bg-slate-100 text-black"}
    <div className={`${toggle ? "bg-[#1f0604] text-white" : "bg-slate-100 text-black" } h-[700px] overflow-hidden flex justify-between `}>
      
      <div className='flex justify-between'>
         <div className='ml-25 flex  '>
         <p className='font-semibold '>NFT Marketplace</p>
            <img className='rounded-md h-78 w-120 mt-8 hover:opacity-90 absolute' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"/>
           
            <p className='relative  left-1 text-white  rounded-xl text-center  mx-6 bg-white/40 text-sm hidden'>Top</p>
            <p className='relative top-1 left-26 text-white  rounded-xl text-center mx-6  bg-white/50 text-sm hidden'>Featured</p>    
         </div>

         <div className='ml-100 flex flex-wrap'>
         <p className='font-semibold  ml-3'>Investment </p> 
       
         <div className={`${toggle ? "bg-[#3b403c] text-white" : "bg-white text-black" } absolute  w-120 mt-8 pl-3  h-78 rounded-lg`}>
            <p className='relative top-12 left-14'>Total Investment</p>
            <p className='relative top-12 left-14 text-[#d1c343]'>0.56 Ether</p>
            <ExploreRoundedIcon sx={{color:"#d1c343",fontSize:50}}/>

            <p className='relative top-12 left-14'>Weekly Returns</p>
            <p className='relative top-12 left-14 text-[#14a67f]'>0.005 Ether</p>
            <DateRangeSharpIcon sx={{color:"#14a67f",fontSize:50}}/>

            <p className='relative top-12 left-14'>Expenses</p>
            <p className='relative top-12 left-14 text-[#91280d]'>0.005 Ether</p>
            <MonetizationOnSharpIcon sx={{color:"#91280d",fontSize:50}}/>
        
        
           
         </div>
         
            </div>


         <div className={`${toggle ? "bg-[#1f0604] text-white" : "bg-white text-black" }h-screen w-100 relative left-100 p-6`}>
            <p>My Cards</p>
            <div className='border rounded-xl bg-[#9d38e0] text-white p-2 shadow-[0px_4px_10px_rgba(0,0,0.3,0.3)] '>
               <p>Balance</p>
               <p className='text-[40px]'>${hoverData.balance}</p>
               <p className='mt-2'>Monthly Profit</p>
               <p className='text-[25px]'>${hoverData.value}</p>
               </div>

               <div className="flex flex-col w-80 mt-4">
        {nfts.map((nft, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`${toggle ? "bg-[#3b403c] text-white" : "bg-white text-black" } p-4 rounded-lg shadow-md transition-all`}
          >
            <h3 className="text-lg font-semibold">{nft.name}</h3>
            <p className="text-gray-600">{hoverData.value1} Ether</p>
            <p className={nft.change.includes("-") ? "text-red-500" : "text-green-500"}>
              {hoverData.change}
            </p>
          </motion.div>
        ))}
      </div>
            </div>


            <div className='relative top-90 right-250 '>
               {/* NFTs Owned */}
      
               <div className="flex flex-col w-80">
        {nfts.map((nft, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`${toggle ? "bg-[#3b403c] text-white" : "bg-white text-black" } p-4 rounded-lg shadow-md ml-4 transition-all`}
          >
            <h3 className="text-lg font-semibold">{nft.name}</h3>
            <p className="text-gray-600">{hoverData.value1} Ether</p>
            <p className={nft.change.includes("-") ? "text-red-500" : "text-green-500"}>
              {hoverData.change}
            </p>
          </motion.div>
        ))}
      </div>


      </div>

      <div>{/* Line Chart with Hover Effects */}
      <div className={`${toggle ? "bg-[#3b403c] text-white" : "bg-white text-black" } relative top-88 right-241 w-164 mt-3  p-3 rounded-lg shadow-md`}>
        <h2 className="text-xl font-bold">Total Distributions</h2>
        <p className="text-gray-400">Hover over the chart to see details</p>
        <p className="text-lg font-semibold">
          {hoverData.day}: ${hoverData.value}
        </p>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            data={data}
            onMouseMove={(e) => {
              if (e && e.activePayload) {
                setHoverData(e.activePayload[0].payload);
              }
            }}
          >
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div></div>
      
      </div></div>
  )
}

export default Dashboard