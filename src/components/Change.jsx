import { useContext, useState } from "react"
import { AppContext } from "../Context/AppContext"



const Change = () => {
    const {setName} = useContext(AppContext)
    const[newName , setNewName] = useState('')
  return (
    <div>
      <input value={newName} type="text" onChange={(event) => {setNewName(event.target.value); console.log(setNewName) }} />
      <button onClick={() => {setName(newName); setNewName('')}}>Change</button>
    </div>
  )
}

export default Change
