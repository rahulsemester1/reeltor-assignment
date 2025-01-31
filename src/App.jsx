import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


import Navbar from './Navbar'
import Listing from './Listing/Listing.jsx';
import Dashboard from './Dashboard/Dashboard';
import Layout from './Layout.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
       <Route path="" element={<Dashboard/>}/>

       <Route path="/listing" element={<Listing/>}/>
      </Route>
    </Routes>
  </Router>
    
   

   </>
  )
}

export default App
