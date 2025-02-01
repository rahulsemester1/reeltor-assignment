import React,{useContext,createContext,useState} from 'react'

const AuthContext=createContext();

 function ContextProvider({children}) {
   const [toggle,setToggle]=useState(false);
 
  
  return (
    <>
    <AuthContext.Provider value={{toggle,setToggle}}>
       {children}
    </AuthContext.Provider>
    </>
  )
}

const useAuth=()=> useContext(AuthContext);

export {ContextProvider,useAuth}