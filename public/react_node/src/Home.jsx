import React from 'react'
import {useNavigate} from 'react-router-dom'
function Home() {

    const navigate=useNavigate()
  return (
    <div>
      <h1>This is a home page</h1>
      <button onClick={()=>navigate('/login')}>Login</button>
      <button onClick={()=>navigate('/register')}>Register</button>
      <button onClick={()=>navigate('/posts')}>View</button>
      <button onClick={()=>navigate('/upload')}>Post</button>
    </div>
  )
}

export default Home
