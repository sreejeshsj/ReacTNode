import React, { useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'
function Register() {
 const [username,setUsername]=useState('')
 const [email,setEmail]=useState('')
 const [password,setPassword]=useState('')
 const navigate=useNavigate()
 const handleSubmit=async (e)=>{
  e.preventDefault()
  try{
    const res=await axios.post('http://localhost:3000/api/auth/register',{
      username,
      email,
      password
    })

    if (res.data.success){
      toast.success(res.data.message)
      navigate('/')
    }

  }catch(err){
    if (!err.response.data.success){
      toast.error(err.response.data.message)
    }
  }
 }
  return (
    <div className='container'>
      <form  className='d-flex flex-column' onSubmit={(e)=>handleSubmit(e)}>
        <h3>REGISTER</h3>
        <input type="text" className='form-control mb-3' onChange={(e)=>setUsername(e.target.value)} required/>
        <input type="email"  className='form-control mb-3' onChange={(e)=>setEmail(e.target.value)} required />
        <input type="password"   className='form-control mb-3' onChange={(e)=>setPassword(e.target.value)} required/>
        <p onClick={()=>navigate('login')}>Already have an account!</p>
        <button className='form-control btn btn-primary'>Submit</button>
        </form>
     
    </div>
  )
}

export default Register
