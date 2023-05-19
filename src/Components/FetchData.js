import React, { useEffect, useState } from 'react'
import './FetchData.css'

function FetchData() {
  const [users, setUsers] = useState([])
  const [swidth, setSwidth] = useState(window.innerWidth)


  const urlEndPoint = 'https://jsonplaceholder.typicode.com/users/'

  useEffect(() => {
    fetch(urlEndPoint)
      .then(response => response.json())
      .then(datas => {
        console.log(datas)
        setUsers(datas)
      })
      .catch(e => { console.log('e', e) })

  }, [])


  window.addEventListener('resize',()=>{
    const wd = window.innerWidth
    setSwidth(wd)
  })

  return (
    <>
      <span><h1 className='text_header'> API Data Fetch</h1> </span>
      <div className='table_data'>
        {swidth > 660 ? (<table >
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
        ) : users.length > 0 && (
          users.map(user => (
            <div className='data_user_card' key={user.id}>
              <div className='row1'>
                <span>{user.id}{'.'}</span>
                <span>{user.name}</span>
              </div>
              <div className='row2'>
                <div className='text_head'>Phone</div>
                <div className='text_data'>{user.phone}</div>
                <div className='text_head'>Email</div>
                <div className='text_data'>{user.email}</div>
                <div className='text_head'>Address</div>
                <div className='text_data'>{user.address.street}</div>
              </div>
              <div className='row3'>
                <div className='text_head'>City</div>
                <div className='text_data'>{user.address.city}</div>
                <div className='text_head'>Zipcode</div>
                <div className='text_data'>{user.address.zipcode}</div>
              </div>

            </div>))
        )}

      </div>

    </>
  )
}

export default FetchData