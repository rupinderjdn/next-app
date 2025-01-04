import React from 'react'

interface Props {
    params: {
        id: number
        photoid: number
    }
}

// const PhotoPage = ({params: {id, photoid}}: Props) => {
const PhotoPage = ( props : Props) => {
    console.log(props)
    const {id, photoid} = props.params;
  return (
    <div>
      <h1>Photo Page</h1>
      <p>User ID: {id}</p>
      <p>Photo ID: {photoid}</p>
    </div>
  )
}

export default PhotoPage
