import React from 'react'

interface Props {
    params: {
        id: number
    }
}

const UserDetailPage = ({params: {id}}: Props) => {
  return (
    <div>
      <h1>User Detail Page</h1>
      <p>User ID: {id}</p>
    </div>
  )
}

export default UserDetailPage
