import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import UserData from './pages/UserData'

function App() {
  // const [count, setCount] = useState(0)

  // useEffect(() => {
  //   window.alert('alertinggg')
  // },[])

  // useEffect(() => {
  //   window.alert('changedd')
  // },[count])

  const [allData, setAllData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setAllData(data))
  },[])

  return (
    // <div>
    //   <h1>Count {count} </h1>
    //   <button onClick={()=> setCount(count + 1) } className='bg-green-600 text-white p-2'>Click me</button>
    // </div>

    <div>
      {/* <h1 className='text-3xl'>Users</h1>
      <h1 className='text-xl'>Data length: {allData.length} </h1> */}
     { allData.map(data => 
    //  <h1>{data.name} </h1>
       <UserData 
       key={data.id}
       data = {data}
       />
    )}
    </div>
  )
}

export default App
