import {useQuery} from '@tanstack/react-query'
import Axios from "axios"

export const GetCatFact = () => {
    const{data, isLoading, isError, refetch} = useQuery(['cat', ], async() => {
        const response = await Axios.get('https://catfact.ninja/fact');
        return response.data
      })

      const refetching = () => {
        alert('new data')
        refetch()
      }

      return{data, isLoading, refetching, isError}
}