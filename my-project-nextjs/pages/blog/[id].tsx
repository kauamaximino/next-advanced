import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { Post } from '../../types/Post'

type Props = {
  post: Post
  id: string
}

interface IParams extends ParsedUrlQuery {
  id: string
}

const BlogItem = ({ post, id }: Props) => { 
  return (
    <div>
      <h1>{`Blog Item number: ${id}`}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default BlogItem

export const getStaticPaths: GetStaticPaths = async () => { 
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: Post[] = await response.json()

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )

  const post: Post = await response.json()

  return {
    props: {
      post,
      id,
    }
  }
}