import { useRouter } from 'next/router'

const AboutInd = () => {
  const { query: { nome } } = useRouter();

  return (
    <div>
      <h1>About slug de { nome }</h1>
    </div>
  )
}

export default AboutInd