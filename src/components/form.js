import React,{useState} from "react";
import './styles/form.css';
import { Link } from "react-router-dom";
const Form= () => {
    const [title,setTitle]=useState('');
    const [prob,setProb]=useState('');

    const handleEventTitle=(e)=>{
        setTitle(e.target.value);
    }
    const handleEventProb=(e)=>{
        setProb(e.target.value);
    }
    console.log(title,prob)
    return (
        <React.Fragment>
        <h1>Problem Form</h1>
        <div class="form-center">
          <form action="" class="help-form">
            <input
              type="text"
              value={title}
              name="full-name"
              id="full-name"
              onChange={e=>{handleEventTitle(e)}}
              placeholder="Full Name"
            />
            <textarea value={prob} onChange={e=>{handleEventProb(e)}}  placeholder="Problems" ></textarea>
            <Link to={"/list/"+title+"/"+prob}><input type="button" value="submit" class="btn" /></Link>
          </form>
        </div>
        </React.Fragment>
    )
}

export default Form;