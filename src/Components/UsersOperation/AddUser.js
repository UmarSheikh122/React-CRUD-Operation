import axios from 'axios';
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'


const AddUser=()=> {
    let History=useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",  
        phone: "",
        website: ""
      });

    const submitForm=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3001/users",user);
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
            <button className="btn btn-primary btn-block">Add User</button>
          </form>
        </div>
      </div>
    )
}
export default AddUser