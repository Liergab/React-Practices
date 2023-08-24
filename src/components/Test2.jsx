import { useReducer} from "react"
import {useSelector} from 'react-redux'


const reducer = (state, action) => {
    switch(action.type){
        case 'Increment': 
            return {count: state.count + 1}; 
            case'Decrement':
            return{count: state.count - 1};
        case 'Clear' : 
            return{count: 0};
        default:
            return state
        
    }
}



const Test2 = () => {
    const initial = {count:0}
    const[state,dispatch] = useReducer(reducer, initial)
 
    const handleBtnAdd = () => {
        dispatch({type:'Increment'})
    }
    const handleBtnMinus = () => {
        dispatch({type:'Decrement'})
    }
    const handleBtnClear = () => {
        dispatch({type:'Clear'})
    }

    const username = useSelector((state) => state.user.value.username)
  return (
    <div>
        <span>count: {state.count}</span> 
        <br />
        <button onClick={handleBtnAdd}>Add</button> 
        <button onClick={handleBtnMinus}>Minus</button> 
        <button onClick={handleBtnClear}>Clear</button> 
        <br />
        {username}
    </div>
  )
}

export default Test2
