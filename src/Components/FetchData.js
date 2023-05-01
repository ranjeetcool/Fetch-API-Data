import React, { useEffect, useState } from 'react'
import './FetchData.css'

function FetchData() {
  const [users, setUsers] = useState([])
  
  const urlEndPoint = 'https://jsonplaceholder.typicode.com/users/'
   
  useEffect(() => {
    fetch(urlEndPoint)
    .then(response => response.json())
    .then(datas => {console.log(datas)
      setUsers(datas)})
      .catch(e=> {console.log('e',e)})
  },[])

  return (
    <>
    <span><h1 className='text_header'> API Data Fetch</h1> </span>
    <div className='table_data'>
      <table >
        <thead className='table_header'>
        <tr >
          <th>No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
        </tr>
        </thead>
        <tbody className='table_body'>
        {users.length > 0 && (
          users.map(user => (
            <tr className='table_body' key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address.street} {user.address.city} {user.address.zipcode}</td>
            </tr>
          ))
        )}
        </tbody>
      </table>
      </div>

      {console.log(users)}
    </>
  )
}

export default FetchData