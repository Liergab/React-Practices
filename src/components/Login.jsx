import { useState,useContext } from "react"
import {login,logout} from '../store'
import {useDispatch,useSelector} from 'react-redux'
import {Theme} from "../Context/ThemeContext"


const Login = () => {
    const[newUserName, setNewUserName] = useState('')
    const{handleTheme, dark} = useContext(Theme)
    

    const styles = {
      background: dark? 'black': 'white',
      color: dark? 'white': 'black'
    }

    const dispatch = useDispatch()
    const username = useSelector((state) => state.user.value.username)
  return (
    <div style={styles}>
          <h1>This is the Login Page</h1> 
          <br />
        <input type="text" onChange={(e) => {setNewUserName(e.target.value)}} />
    
      <button onClick={() => dispatch(login({username:newUserName}))}>Submit Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
      <button onClick={handleTheme}>SetTheme</button>
        <br />
      {username}
    </div>
  )
}

export default Login
