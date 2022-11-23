import Link from 'next/link'

import { Post } from '../../types/Post'

type Props = {
  name: string
  posts: Post[]
}

const Blog = ({name, posts}: Props) => {
  return (
    <div>
      <h1>{name}</h1>

      <h2>{posts.slice(0, 10).map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </li>
        )
      })}</h2>
      
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: Post[] = await res.json()

  return {
    props: {
      name: 'Adrzinha',
      posts,
    },
    revalidate: 7200,
  }
}


export default Blog