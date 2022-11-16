import { useRouter } from 'next/router'

const AboutInd = () => {
  const { query: { slug } } = useRouter();

  return (
    <div>
      <h1>About slug de { slug }</h1>
    </div>
  )
}

export default AboutInd