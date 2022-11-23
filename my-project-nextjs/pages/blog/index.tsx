import { Post } from '../../types/Post'

type Props = {
  name: string
  posts: Post[]
}

const Blog = ({name, posts}: Props) => {
  return (
    <div>
      <h1>{name}</h1>

      <h2>{posts.slice(0, 5).map((post) => {
        return (
          <div key={post.id}>
            <p>{post.title}</p>
          </div>
        )
      })}</h2>
      {/* <h1>{posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{`${post.userId}, só teste`}</h2>
            <p>{post.body}</p>
          </div>
        )
      })}</h1> */}
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
    }
  }
}


export default Blog