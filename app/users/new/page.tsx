'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const NewUserPage = () => {
  const router = useRouter();


  return (
    <div>

      <h1>New User</h1>
      <button className='btn btn-primary' onClick={() => {
        console.log("clicked");
        router.push("/users");
      }}> 
           Users
         </button>
    </div>
  )
}

export default NewUserPage
