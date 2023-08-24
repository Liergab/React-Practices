import Toggle from '../Hooks/toggle'

const Test = () => {
   const [isVisible, togglebtn] = Toggle()
  return (
    <div>
     <button onClick={togglebtn}>
        {isVisible? <span>Hide</span> : <span>Show</span>}
     </button> 
        <br />
     {isVisible && <span>Hello World</span>}
    </div>
  )
}

export default Test
