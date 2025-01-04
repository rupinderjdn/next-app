import React, { Suspense } from 'react'
import Link from 'next/link'
import UserTable from './UserTable';

interface User {
  id: number;
  name: string;
  email: string; 
}



type SearchParams = Promise<{ sortName: string }>;
const page = async ({searchParams }:{searchParams : SearchParams} ) => {
  const { sortName } = await searchParams;
  const res = await fetch('https://jsonplaceholder.typicode.com/users' ,{
    cache: 'no-store',
    // next: {
    //   revalidate: 10, // revalidate every 10 seconds
    // }
  })
  const users: User[] = await res.json()

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <Link href="/users/new">New User</Link>
     <Suspense fallback={<div>Loading...</div>}>

      <UserTable sortName={sortName} />
     </Suspense>
    </>
  )
}

export default page
 