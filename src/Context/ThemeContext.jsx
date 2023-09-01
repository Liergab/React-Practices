/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

export const Theme = createContext()

const ThemeContext = ({children}) => {
    const [dark, setDark] = useState(false)
    const handleTheme = () => {
    setDark(!dark)
    }
  return (
   <Theme.Provider value={{dark, setDark, handleTheme}}>
    {children}
   </Theme.Provider>
  )
}

export default ThemeContext
