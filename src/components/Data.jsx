import { DataFetch } from "../Hooks/Data"

const Data = () => {
    const{data,isLoading} = DataFetch();

    if(isLoading) return <h1>Loading .....</h1>
    console.log(data)
  return (
    <div>
     <h1>Data</h1>
        <br />
        
        {data.map((datas) => {

            return(
            <div style={{background:'pink', width:'auto'}}  key={datas.id}> 
                <p>{datas.title}</p>
                <small>{datas.userId}</small>
            </div>) })
        }
    </div>
  )
}

export default Data
