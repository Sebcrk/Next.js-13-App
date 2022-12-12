import React from 'react'

function Post ({ params }) {
  const { id } = params
  return <div>Esto es el post {id}</div>
}

export default Post
