import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'


function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    window.alert('alertinggg')
  },[])

  useEffect(() => {
    window.alert('changedd')
  },[count])

 

  return (
    <div>
      <h1>Count {count} </h1>
      <button onClick={()=> setCount(count + 1) } className='bg-green-600 text-white p-2'>Click me</button>
    </div>
  )
}

export default App
