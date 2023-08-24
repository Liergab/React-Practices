import { useBearStore } from "../zustand/zustand"


const Control = () => {
    const increase = useBearStore((state) => state.increasePopulation)
  return (
    <div>
       <button onClick={increase}>one up</button>
    </div>
  )
}

export default Control
