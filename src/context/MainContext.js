import { createContext, useState, useEffect } from "react";
import { getAllEnterprises } from '../helpers/enterprises';

export const AppContext = createContext();

export const AppProvider = ({children})=>{
  const [enterprises, setEnterprises] = useState(null)  

  useEffect( ()=>{
    async function fetchData (){
      const companies= await getAllEnterprises()
      setEnterprises(companies)
    }
    fetchData()
  })

  return (
    <AppContext.Provider value={{enterprises}}>
      {children}
    </AppContext.Provider>
  )
}