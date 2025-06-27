import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'
function Login() {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  const handleLogin=async(e)=>{
    e.preventDefault()
    try{
        const res=await axios.post('http://localhost:3000/api/auth/login',{
            username,
            password
        })
        if (res.data.success){
            toast.success("Loged in Successfully")
            localStorage.setItem('access',res.data.
accessToken
)
            navigate('/')
            
        }else{
            toast.error(res.data.message)
        }
        console.log(res)
    }catch(err){
      
       if(!err.response.data.success){
        toast.error(err.response.data.message)
       }
    }
  }
  
  return (
     <div className='container'>
      <form  className='d-flex flex-column' onSubmit={(e)=>handleLogin(e)}>
        <h3>LOGIN</h3>
        <input type="text" className='form-control mb-3' onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password"   className='form-control mb-3' onChange={(e)=>setPassword(e.target.value)}/>
        <p onClick={()=>navigate('/register')}>Dont have any account!</p>
        <button className='form-control btn btn-primary'>Submit</button>
        </form>
     
    </div>
  )
}

export default Login
