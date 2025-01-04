import React from 'react'

// interface Props {
    // params: {
        // id: number
        // photoid: number
    // }
// }

type Params = Promise<{ id: number; photoid: number }>;
// const PhotoPage = ({params: {id, photoid}}: Props) => {
const PhotoPage = async  ( {params} : {params : Params}) => {
    const {id, photoid} = await params;
  return (
    <div>
      <h1>Photo Page</h1>
      <p>User ID: {id}</p>
      <p>Photo ID: {photoid}</p>
    </div>
  )
}

export default PhotoPage
