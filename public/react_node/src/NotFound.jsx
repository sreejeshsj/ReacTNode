import React from 'react'
import {useNavigate} from 'react-router-dom'
function NotFound() {
  const navigate=useNavigate()
  return (
    <div>
      <h1 style={{color:'red'}}>Your in a invalid path please click the Home button to navigate to Home page!</h1>
      <button onClick={()=>navigate('/')} className='btn btn-primary'>Home</button>
    </div>
  )
}

export default NotFound
