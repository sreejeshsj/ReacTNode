import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadPost() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("access");
  const handleSubmit = async (e) => {
   e.preventDefault()
    try {
        console.log("s f")
      const res =await  axios.post(
        "http://localhost:3000/api/post/upload",
        {
          "image":image,
          "caption":caption,
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (res.data.success) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  try {
  } catch (err) {
    console.log(err);
  }
  return (
    <div className="upload">
      <form
        action=""
        className="frm"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="file"
          name="image"
          className="form-control"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <input
          type="text"
          name="caption"
          className="form-control"
          onChange={(e) => setCaption(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
}

export default UploadPost;
