import { useQuery } from "@tanstack/react-query"
import Axios from 'axios'
export const DataFetch = () => {
    const {data, isLoading} = useQuery(['fakeApi'], async() => {
        const response = await Axios.get('https://jsonplaceholder.typicode.com/todos')
        return response.data
    })


return  {data, isLoading}
}