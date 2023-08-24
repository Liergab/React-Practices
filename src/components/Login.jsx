import { useState } from "react"
import {login,logout} from '../store'
import {useDispatch,useSelector} from 'react-redux'


const Login = () => {
    const[newUserName, setNewUserName] = useState('')

    const dispatch = useDispatch()
    const username = useSelector((state) => state.user.value.username)
  return (
    <div>
          <h1>This is the Login Page</h1> 
          <br />
        <input type="text" onChange={(e) => {setNewUserName(e.target.value)}} />
    
      <button onClick={() => dispatch(login({username:newUserName}))}>Submit Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
        <br />
      {username}
    </div>
  )
}

export default Login
