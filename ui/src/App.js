import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Users from './components/Users';
import Pagination from './components/Pagination';

const App=()=> {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage, setUsersPerPage] = useState(2)

  useEffect(()=>{
     const fetchUsers = async()=>{
       setLoading(true)
       const res = await axios.get("http://localhost:5000/v1/allusers")
    
       setUsers(res.data.data);
       setLoading(false)
      }

      fetchUsers()
  },[])

 // Get Current users
 const indexOfLastUser = currentPage * usersPerPage;
 const indexOfFirstUser = indexOfLastUser - usersPerPage;
 const currentUsers= users.slice(indexOfFirstUser, indexOfLastUser)


 // Change Page
const paginate = pageNumber=>setCurrentPage(pageNumber)

  return (
    <div className="container mt-5">
     <h1 className="text-primary mb-3">My Blog</h1>

     <Users users={currentUsers} loading={loading} />
     <Pagination 
            usersPerPage={usersPerPage} 
            totalUsers={users.length} 
            paginate={paginate}
            />
    </div>
  );
}

export default App;
