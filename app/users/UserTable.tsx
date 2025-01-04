import Link from 'next/link';
import React from 'react'



interface User {
    id: number;
    name: string; 
    email: string; 
  }

interface Props {
    sortName: string
}

const UserTable = async ({sortName}: Props) => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users' ,{
        cache: 'no-store',
        // next: {
        //   revalidate: 10, // revalidate every 10 seconds
        // }
      })
    const users: User[] = await res.json()
    // console.log(users);
    const sortedUsers = await users?.sort((a, b) => {
        if (sortName === 'asc') {
            return a.name.localeCompare(b.name)
        } else if (sortName === 'desc') {
            return b.name.localeCompare(a.name)
        } else {
            return 0
        }
    })

  return (
    <div>
            <table className='table table-bordered'>
        <thead>
          <tr>
            <th>
                {/*  // TODO  asc and desc should change the link */}
                <Link href="/users?sortName=asc">Users</Link>
            </th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody > 

      {sortedUsers.map((user: User) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      ))}
      </tbody>
      </table>    </div>
  )
}

export default UserTable
