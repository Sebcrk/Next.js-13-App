'use client'

import { useState } from 'react'

function LikeButton ({ id }) {
  const [liked, setLiked] = useState(false)
  const handleClick = () => {
    setLiked((prevState) => !prevState)
  }
  return <button onClick={handleClick}>{liked ? 'Liked' : 'Not liked'}</button>
}

export default LikeButton
