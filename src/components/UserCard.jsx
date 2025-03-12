import React from 'react'

const UserCard = ({name,email,age}) => {
    
  return (
    <div>
      <h2>name : {name}</h2>
      <p>Email :{email}</p>
      <p>Age :{age}</p>
    </div>
  )
}

export default UserCard
