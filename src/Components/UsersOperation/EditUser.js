

import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {useHistory,useParams} from 'react-router-dom'




const EditUser=()=> {
    const {id}= useParams();
    let History=useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",  
        phone: "",
        website: ""
      });

      useEffect(() => {
                loadUser(); 
          },[])


     const loadUser=async()=>{
         const resultedUser=await axios.get(`http://localhost:3001/users/${id}`)
        setUser(resultedUser.data);
     }

    const submitForm=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`,user);
        History.push('/');  
    }
    const InputChange=(e)=>
    {
       setUser({...user,[e.target.name]: [e.target.value]})

    }
      const { name, username, email, phone, website } = user;
    return (
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A User</h2>
          <form onSubmit={submitForm}>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                onChange={InputChange}
                value={name}
             
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="username"
                value={username}
                onChange={InputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={email}
                onChange={InputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={phone}
                onChange={InputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Website Name"
                name="website"
                value={website}
                onChange={InputChange}
              />
            </div>
            <button className="btn btn-warning btn-block">Update User</button>
          </form>
        </div>
      </div>
    )
}
export default EditUser