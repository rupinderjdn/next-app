import { notFound } from 'next/navigation';
import React from 'react'


type Params = Promise<{ id: number }>;
const UserDetailPage = async  ({params }: {params: Params }) => {
  const { id } = await params;
  if(id > 10) {
    notFound();
  }
  return (
    <div>
      <h1>User Detail Page</h1>
      <p>User ID: {id}</p>
    </div>
  )
}

export default UserDetailPage
