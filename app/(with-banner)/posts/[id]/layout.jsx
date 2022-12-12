import Link from 'next/link'

const fetchSinglePost = (id) => {
  // getStaticProps
  // return fetch('https://jsonplaceholder.typicode.com/posts')
  // .then((res) => res.json())
  //
  // getServerSideProps
  // return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store'})
  // .then((res) => res.json())
  //
  // incremental static regeneration
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  }).then((res) => res.json())
}

async function PostLayout ({ children, params }) {
  const { id } = params
  const post = await fetchSinglePost(id)
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body} </p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  )
}

export default PostLayout
