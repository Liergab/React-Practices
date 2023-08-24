/* eslint-disable react/prop-types */
import { AppContext } from "../Context/AppContext"
import { useState } from "react"


const AppContextProvider = ({children}) => {
    const [name,setName] = useState('Bryan')
  return (
   <AppContext.Provider value={{name,setName}}>
    {children}
   </AppContext.Provider>
  )
}

export default AppContextProvider
