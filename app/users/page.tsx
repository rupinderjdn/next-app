import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>Users</h1>
      <Link href="/users/new">New User</Link>
    </div>
  )
}

export default page
