import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const resultedUsers = await axios.get("http://localhost:3001/users")
        setUsers(resultedUsers.data.reverse());

    }
    const deleteUser=async(id)=>
    {
        await axios.delete(`http://localhost:3001/users/${id}`)
        loadUsers();
    }
    return (
        <div className="py-4 container">
<table class="table border shadow">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  {
      users.map((users,index)=>(
          <tr>
              <th scope="row">{index+1}</th>
              <td scope="row">{users.name}</td>
              <td scope="row">{users.username}</td>
              <td scope="row">{users.email}</td>
              <td>
              <Link className="btn btn-primary mr-2"  to={`/ViewUser/${users.id}`}>View</Link>
              <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${users.id}`} >Edit</Link>
              <Link className="btn btn-danger" onClick={()=>{deleteUser(users.id)}}>Delete</Link>
              
              </td>

          </tr>
      ))
  }
  <tbody>
  
  </tbody>
</table>


        </div>
    );
};

export default Home
