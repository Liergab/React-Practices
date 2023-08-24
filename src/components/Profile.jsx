import { useContext } from "react"
import Change from "./Change"
import { AppContext } from "../Context/AppContext"
import { useQuery } from "@tanstack/react-query"
import  Axios  from "axios"

/* eslint-disable react/prop-types */
const Profile = () => {
  const {name} = useContext(AppContext)

  const {data, isLoading, isError} = useQuery(['profile'], async() => {
      const response = await Axios.get('https://catfact.ninja/fact')
      return response.data

  })

  if(isLoading){
    return <h1>Loading...</h1>
  }

  if(isError){
    return <h1>Sorry Something Error!</h1>
  }
    return (
      <div>
        <h1>Profile Page!</h1>
        <br />
        <p>Hello {name}!</p>
        <br />
        <Change />
        <br />
        {data.fact}
      </div>
    )
  }
  
  export default Profile