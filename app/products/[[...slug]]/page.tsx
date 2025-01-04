import React from 'react'


interface Props {
    params: {
        slug: string[]
    },
    searchParams: {
        sort: string
    }
}

const ProductPage = ({params: {slug}, searchParams: {sort}}: Props) => {
  return (
    <div>
      <h1>Product Page</h1>
      <p>Slug: {slug}</p>
      <p>Sort: {sort}</p>
    </div>
  )
}

export default ProductPage
