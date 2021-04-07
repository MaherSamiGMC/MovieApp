
import React, { useState } from 'react'
import "./AddForm.css"

const AddForm = (props) => {
    const handleClick =()=>{
        props.adding(moviedata);
        props.toggle(false);
        
    }
    const [moviedata,setMoviedata]=useState({title:"",
        subtitle:"",
        description:"",
        image_2:"",
        rating:"",})
    return ( (props.trigger) ?
    <div className="login-box">
    <h2>Add a new movie to the list</h2>
    <form>
      <div className="user-box">
        <input onChange={e=>setMoviedata({...moviedata,title:e.target.value})} type="text" title required />
        <label>Movie title</label>
      </div>
      <div className="user-box">
        <input onChange={e=>setMoviedata({...moviedata,subtitle:e.target.value})} type="text" Subtitle required />
        <label>Movie Subtitle</label>
      </div>
      <div className="user-box">
        <input onChange={e=>setMoviedata({...moviedata,description:e.target.value})} type="text" description required />
        <label>Movie description</label>
      </div>
      <div className="user-box">
        <input onChange={e=>setMoviedata({...moviedata,image_2:<img src={e.target.value} alt="cover" className="cover"/>})} type="text" Cover required />
        <label>Movie Cover</label>
      </div>
      <div className="user-box">
        <input onChange={e=>setMoviedata({...moviedata,rating:e.target.value})} type="text" Rating required />
        <label>Movie Rating</label>
      </div>
      
      <a onClick={handleClick} >
        <span />
        <span />
        <span />
        <span />
        Submit
      </a>
    </form>
  </div>
   : ""
    )
}

export default AddForm
