
import { useState } from "react"
 const Toggle = (initialValue) =>{
    
    const [state, setState] = useState(initialValue)

    const togglebtn = () => {
        setState((prevState) => !prevState)
    }

    return[state, togglebtn]
}

export default Toggle