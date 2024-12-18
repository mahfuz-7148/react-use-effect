import React from 'react'

const UserData = ({data}) => {

    const {name, email, phone} = data
  return (
    <div>
        <h1>{name} </h1>
        <h1>{email} </h1>
        <h1>{phone} </h1>
    </div>
  )
}

export default UserData