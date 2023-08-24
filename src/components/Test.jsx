import { useStore } from '../zustand/Input'
import Toggle from '../Hooks/toggle'

const Test = () => {
   const [isVisible, togglebtn] = Toggle()
   const inputValue = useStore((state) => state.inputValue)
   const setInputValue = useStore((state) => state.setInputValue)
   console.log(inputValue)
  return (
    <div>
     <button onClick={togglebtn}>
        {isVisible? <span>Hide</span> : <span>Show</span>}
     </button> 
        <br />
     {isVisible && <span>Hello World</span>}
     <div>
      <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
     </div>
    </div>
  )
}

export default Test
