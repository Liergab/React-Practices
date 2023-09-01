/* eslint-disable react/prop-types */

import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import { GetCatFact } from "../Hooks/GetcatFact"
import { useBearStore } from "../zustand/zustand"
import Control from "./Control"
import { Theme } from "../Context/ThemeContext"

const Home = () => {
  const bear = useBearStore((state) => state.bears)
    const {name} = useContext(AppContext)
    const {dark} = useContext(Theme)
    const styles = {
      background: dark? 'black': 'white',
      color: dark? 'white': 'black'
    }
    const{data, isLoading, isError, refetching} = GetCatFact()
    if(isLoading) return <p>Loading....</p>

    if(isError) return <p>Something Error</p>

  return (
    <div style={styles}>
      <h1>Home Page!</h1>
      <br />
      <p>Hello {name} !</p> 
      <br />
      <p>{data.fact}</p>
      <br />
      <button onClick={refetching}>REfetch</button>
      <div>
        {bear}
        <Control />
      </div>
    </div>
  )
}

export default Home
