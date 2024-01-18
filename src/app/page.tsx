'use client'
import { useState } from "react"

export default function Home() {
  const [count ,setCount] = useState(0)
  const handleAddClick = () =>{
    setCount(v=>v+1)
  }
  return (
    <div>
      <h1 className='text-[40px]' data-testid="value-count">{count}</h1>
      <button  data-testid="btn-click" onClick={handleAddClick}>Click</button>
    </div>
  )
}
