import { Decrement, Increment } from "../reducer/Count"
import { useDispatch,useSelector } from "react-redux"


const CountRedux = () => {
    const count = useSelector((state) => state.count.value.count)
    const dispatch =  useDispatch()
  return (
    <div>
        <h1>count:{count}</h1>
      <button onClick={() => dispatch(Increment())}>Add using RTK</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
    </div>
  )
}

export default CountRedux
