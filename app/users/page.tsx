import React from 'react'
import Link from 'next/link'
import UserTable from './UserTable';

interface User {
  id: number;
  name: string;
  email: string; 
}

const page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users' ,{
    cache: 'no-store',
    // next: {
    //   revalidate: 10, // revalidate every 10 seconds
    // }
  })
  const users: User[] = await res.json()

  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <Link href="/users/new">New User</Link>
      <UserTable  />
    </div>
  )
}

export default page
