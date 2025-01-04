'use client'
import React from 'react'

type ErrorProps = {
    error: Error
}
const Error = ({error}: ErrorProps) => {
    console.error('Error',error);
  return (
    <div>
        <h1>Error</h1>
        <p>{error.message}</p>
    </div>
  )
}

export default Error
