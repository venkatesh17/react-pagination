import React from 'react';

const Users = ({ users, loading })=>{

    if(loading){
        return <h2>Loading...</h2>;
    }

    console.log("============", users);
    return (

<table class="table table-bordered">
    <thead>
      <tr>
        <th>User Name</th>
        <th>Category Name</th>
        <th>Project Title</th>
      </tr>
    </thead>
    <tbody>
    { users.map(user => (
        <tr key="_id">
             <td>{user.userName}</td>
             <td>{user.categoryName}</td>
             <td>{user.projectTitle}</td>
        </tr>
     ))}
     
     
    </tbody>
  </table>
    )
}

export default Users;