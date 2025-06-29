import React, { useEffect, useState } from "react";
import axios from "axios";
import {toast} from 'react-toastify'
function Posts() {
  const [post, setPost] = useState([]);
  const token = localStorage.getItem("access");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/post/fetch-image", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPost(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [post]);

  const handleDelete=async (id)=>{
    try{
      const res=await axios.delete(`http://localhost:3000/api/post/delete/${id}`,{
      headers:{
        'Authorization':`Bearer ${token}`
      }
     
    })
     console.log(res)
    }catch(err){
      
      if(err.response.data.success==false){
        toast.error(err.response.data.message)
      }
    }
    



  }

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      {post.length > 0 ? (
        post.map((item, index) => (
          <div key={index} className="box">
            <img className="image" src={item.url} alt="img" />
            <p>{item.caption}</p>
            <button className="btn btn-danger" onClick={()=>handleDelete(item._id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Posts;
