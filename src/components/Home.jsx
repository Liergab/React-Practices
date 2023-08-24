/* eslint-disable react/prop-types */

import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import { GetCatFact } from "../Hooks/GetcatFact"

const Home = () => {
    const {name} = useContext(AppContext)
    const{data, isLoading, isError, refetching} = GetCatFact()
    if(isLoading) return <p>Loading....</p>

    if(isError) return <p>Something Error</p>

  return (
    <div>
      <h1>Home Page!</h1>
      <br />
      <p>Hello {name} !</p> 
      <br />
      <p>{data.fact}</p>
      <br />
      <button onClick={refetching}>REfetch</button>
    </div>
  )
}

export default Home
