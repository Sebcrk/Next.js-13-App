import Image from 'next/image'
import React from 'react'

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  }).then((res) => res.json())
}

async function Comments ({ params }) {
  const { id } = params
  const comments = await fetchComments(id)
  return (
    <ul style={{ fontSize: 10, backgroundColor: '#666' }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Image
            alt={comment.name}
            width='50'
            height='50'
            src={`https://avatars.dicebear.com/api/pixel-art/${comment.email}.svg`}
          />
          <h2>{comment.name}</h2>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}

export default Comments
